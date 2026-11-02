import assert from 'node:assert/strict';
import test from 'node:test';
import { createContactHandler, MAX_BODY_BYTES } from './contact.mjs';

const id = '7e9b8eca-27eb-47fc-aab4-8ab005ab04d3';
const payload = { name: 'Visitor', email: 'visitor@example.com', company: 'Example Co', role: 'Director', industry: 'retail', message: 'Please contact me.\nSecond line.', consent: true };
const options = { apiKey: 'test-only-key', allowedOrigin: 'https://vaisolutions.ai' };
const accepted = async () => Response.json({ id: 'provider-test-id' });
const request = (value = payload, extra = {}) => new Request('https://vaisolutions.ai/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Origin: 'https://vaisolutions.ai', 'Idempotency-Key': id, ...extra.headers },
  body: typeof value === 'string' ? value : JSON.stringify(value),
});

test('sends all fields only to Kamal with Omar as sender and visitor Reply-To', async () => {
  let sent;
  const handler = createContactHandler({ ...options, fetchImpl: async (url, init) => { sent = { url, ...init }; return accepted(); } });
  const response = await handler(request({ ...payload, to: 'attacker@example.com', from: 'attacker@example.com' }), 'client');
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.ok, true);
  assert.match(result.reference, /^VAI-[A-F0-9]{32}$/);
  assert.equal(sent.url, 'https://api.resend.com/emails');
  assert.equal(sent.headers.Authorization, 'Bearer test-only-key');
  assert.equal(sent.headers['Idempotency-Key'], `vai-contact/${id}`);
  const email = JSON.parse(sent.body);
  assert.equal(email.from, 'VAI Website <omar@vaisolutions.ai>');
  assert.deepEqual(email.to, ['kamal@vaisolutions.ai']);
  assert.equal(email.reply_to, payload.email);
  for (const value of [payload.name, payload.email, payload.company, payload.role, payload.industry, payload.message, result.reference, 'Contact consent: Yes']) assert.ok(email.text.includes(value));
  assert.equal(email.html, undefined);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});

test('same submission ID produces an identical provider key and body on retry', async () => {
  const calls = [];
  const handler = createContactHandler({ ...options, fetchImpl: async (_, init) => { calls.push(init); return accepted(); } });
  await handler(request(), 'client');
  await handler(request(), 'client');
  assert.equal(calls[0].body, calls[1].body);
  assert.equal(calls[0].headers['Idempotency-Key'], calls[1].headers['Idempotency-Key']);
});

for (const [name, value] of Object.entries({
  'missing name': { ...payload, name: '' },
  'missing company': { ...payload, company: ' ' },
  'missing message': { ...payload, message: '' },
  'invalid email': { ...payload, email: 'invalid' },
  'email header injection': { ...payload, email: 'valid@example.com\r\nBcc: attacker@example.com' },
  'missing consent': { ...payload, consent: false },
  'string consent': { ...payload, consent: 'true' },
  'oversized field': { ...payload, message: 'a'.repeat(10001) },
  'object field': { ...payload, company: {} },
  'array payload': [],
  'null payload': null,
})) {
  test(`rejects ${name} without sending`, async () => {
    let calls = 0;
    const handler = createContactHandler({ ...options, fetchImpl: async () => { calls++; return accepted(); } });
    assert.equal((await handler(request(value), 'client')).status, 400);
    assert.equal(calls, 0);
  });
}

test('rejects malformed JSON, oversize bytes, invalid content type and submission ID', async () => {
  const handler = createContactHandler({ ...options, fetchImpl: accepted });
  assert.equal((await handler(request('{invalid'), 'a')).status, 400);
  assert.equal((await handler(request('a'.repeat(MAX_BODY_BYTES + 1)), 'b')).status, 413);
  assert.equal((await handler(request(payload, { headers: { 'Content-Type': 'text/plain' } }), 'c')).status, 415);
  assert.equal((await handler(request(payload, { headers: { 'Idempotency-Key': 'bad' } }), 'd')).status, 400);
});

test('requires configured API key and valid sender; never simulates success', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; return accepted(); };
  assert.equal((await createContactHandler({ fetchImpl })(request(), 'a')).status, 503);
  assert.equal((await createContactHandler({ ...options, fromEmail: 'bad', fetchImpl })(request(), 'a')).status, 503);
  assert.equal(calls, 0);
});

test('allows only the configured origin, handles preflight, rejects GET', async () => {
  const handler = createContactHandler({ ...options, fetchImpl: accepted });
  const rejected = await handler(request(payload, { headers: { Origin: 'https://other.example' } }));
  assert.equal(rejected.status, 403);
  assert.equal(rejected.headers.get('access-control-allow-origin'), null);
  const preflight = await handler(new Request('https://vaisolutions.ai/api/contact', { method: 'OPTIONS', headers: { Origin: 'https://vaisolutions.ai' } }));
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), 'https://vaisolutions.ai');
  const get = await handler(new Request('https://vaisolutions.ai/api/contact'));
  assert.equal(get.status, 405);
  assert.equal(get.headers.get('allow'), 'POST, OPTIONS');
});

test('provider rejection and malformed success do not expose provider errors or claim success', async () => {
  for (const providerResponse of [Response.json({ message: 'private provider details' }, { status: 403 }), Response.json({}), new Response('bad gateway', { status: 502 })]) {
    const handler = createContactHandler({ ...options, fetchImpl: async () => providerResponse });
    const response = await handler(request());
    assert.equal(response.status, 502);
    const result = await response.json();
    assert.equal(result.ok, false);
    assert.ok(!JSON.stringify(result).includes('private provider details'));
  }
});

test('network and timeout errors return retryable failures', async () => {
  for (const [name, status] of [['Error', 502], ['TimeoutError', 504]]) {
    const handler = createContactHandler({ ...options, fetchImpl: async () => { throw Object.assign(new Error('test'), { name }); } });
    assert.equal((await handler(request())).status, status);
  }
});

test('limits each client and resets the window without blocking another client', async () => {
  let timestamp = 1000;
  const handler = createContactHandler({ ...options, fetchImpl: accepted, now: () => timestamp });
  for (let count = 0; count < 5; count++) assert.equal((await handler(request(), 'a')).status, 200);
  const blocked = await handler(request(), 'a');
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get('retry-after'), '600');
  assert.equal((await handler(request(), 'b')).status, 200);
  timestamp += 600001;
  assert.equal((await handler(request(), 'a')).status, 200);
});

import assert from 'node:assert/strict';
import test, { after, before } from 'node:test';
import { createServer } from 'vite';

let vite;
let submitContact;
const originalFetch = globalThis.fetch;
const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const payload = { name: 'Visitor', email: 'visitor@example.com', company: 'Example', role: '', industry: '', consent: true };

before(async () => {
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: () => 'denied' } });
  vite = await createServer({ configFile: false, optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true }, appType: 'custom' });
  ({ submitContact } = await vite.ssrLoadModule('/src/utils/contact.ts'));
});
after(async () => {
  globalThis.fetch = originalFetch;
  if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage);
  else delete globalThis.localStorage;
  await vite?.close();
});

test('client posts to the backend and requires confirmed success', async () => {
  let sent;
  globalThis.fetch = async (url, init) => { sent = { url, ...init }; return Response.json({ ok: true, reference: 'VAI-TEST' }); };
  const result = await submitContact({ ...payload, message: 'Client test 1' });
  assert.deepEqual(result, { ok: true, reference: 'VAI-TEST' });
  assert.equal(sent.url, '/api/contact');
  assert.ok(sent.headers['Idempotency-Key']);
  assert.equal(sent.headers.Authorization, undefined);
  assert.equal(JSON.parse(sent.body).message, 'Client test 1');
});

test('client reuses submission ID after network failure and changes it when content changes', async () => {
  const keys = [];
  globalThis.fetch = async (_, init) => { keys.push(init.headers['Idempotency-Key']); throw new Error('Network unavailable'); };
  assert.equal((await submitContact({ ...payload, message: 'Retry test' })).ok, false);
  assert.equal((await submitContact({ ...payload, message: 'Retry test' })).ok, false);
  assert.equal(keys[0], keys[1]);
  await submitContact({ ...payload, message: 'Edited retry test' });
  assert.notEqual(keys[1], keys[2]);
});

test('client rejects HTML, malformed success and server failures instead of showing confirmation', async () => {
  for (const response of [new Response('<html>SPA fallback</html>'), Response.json({}), Response.json({ ok: false, message: 'not configured' }, { status: 503 })]) {
    globalThis.fetch = async () => response;
    assert.equal((await submitContact({ ...payload, message: 'Failure test' })).ok, false);
  }
});

test('client provides a retry message for rate limiting', async () => {
  globalThis.fetch = async () => Response.json({ ok: false }, { status: 429 });
  const result = await submitContact({ ...payload, message: 'Rate test' });
  assert.deepEqual(result, { ok: false, message: 'Too many enquiries. Please try again later.' });
});

test('unavailable analytics storage cannot turn accepted email into a failed submission', async () => {
  const storage = globalThis.localStorage;
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: () => { throw new Error('Storage blocked'); } } });
  try {
    globalThis.fetch = async () => Response.json({ ok: true, reference: 'VAI-ACCEPTED' });
    assert.deepEqual(await submitContact({ ...payload, message: 'Blocked storage test' }), { ok: true, reference: 'VAI-ACCEPTED' });
  } finally {
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
  }
});

import assert from 'node:assert/strict';
import test, { after, before } from 'node:test';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve, sep } from 'node:path';
import { createVaiServer } from './index.mjs';
import { MAX_BODY_BYTES } from './contact.mjs';
import { createServer as createViteServer, loadConfigFromFile } from 'vite';

let fixtureDirectory;
before(async () => {
  fixtureDirectory = await mkdtemp(join(tmpdir(), 'vai-contact-test-'));
  await writeFile(join(fixtureDirectory, 'index.html'), '<html><body><div id="root">VAI fixture</div></body></html>');
});
after(async () => {
  const target = resolve(fixtureDirectory);
  if (!target.startsWith(`${resolve(tmpdir())}${sep}`) || !basename(target).startsWith('vai-contact-test-')) throw new Error('Unsafe fixture cleanup');
  await rm(target, { recursive: true, force: true });
});

async function start(t, options = {}) {
  const server = createVaiServer({ apiKey: 'test-only-key', fromEmail: 'omar@vaisolutions.ai', trustProxy: false, allowedOrigin: null, distDirectory: fixtureDirectory, fetchImpl: async () => Response.json({ id: 'test-id' }), ...options });
  await new Promise((accept) => server.listen(0, '127.0.0.1', accept));
  t.after(() => new Promise((accept) => { server.closeAllConnections(); server.close(accept); }));
  return `http://127.0.0.1:${server.address().port}`;
}
const payload = { name: 'Visitor', email: 'visitor@example.com', company: 'Company', role: '', industry: '', message: 'Test enquiry', consent: true };

test('native HTTP endpoint returns the provider-confirmed reference', async (t) => {
  const base = await start(t);
  const response = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: base }, body: JSON.stringify(payload) });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
});

test('serves built SPA routes and blocks private files, missing assets and unknown API endpoints', async (t) => {
  const base = await start(t);
  for (const route of ['/', '/contact', '/about']) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
    assert.ok((await response.text()).includes('VAI fixture'));
  }
  for (const route of ['/.env', '/src/utils/contact.ts', '/assets/missing.js', '/api/missing', '/..%2f.env']) {
    assert.equal((await fetch(`${base}${route}`)).status, 404, route);
  }
  const head = await fetch(`${base}/contact`, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
});

test('rejects oversized bodies over HTTP', async (t) => {
  const base = await start(t);
  const response = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: 'a'.repeat(MAX_BODY_BYTES + 1) });
  assert.equal(response.status, 413);
});

test('missing credentials returns a real failure over HTTP', async (t) => {
  const base = await start(t, { apiKey: '' });
  const response = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

test('untrusted forwarded IPs cannot evade the per-client limit', async (t) => {
  const base = await start(t);
  for (let index = 0; index < 5; index++) {
    const response = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Forwarded-For': `192.0.2.${index}` }, body: JSON.stringify(payload) });
    assert.equal(response.status, 200);
  }
  const blocked = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Forwarded-For': '192.0.2.100' }, body: JSON.stringify(payload) });
  assert.equal(blocked.status, 429);
});

test('the Vite contact proxy preserves the browser origin when forwarding to Node', async (t) => {
  const backend = await start(t, { apiKey: '' });
  const { config } = await loadConfigFromFile({ command: 'serve', mode: 'test' });
  const vite = await createViteServer({
    configFile: false,
    optimizeDeps: { noDiscovery: true, include: [] },
    server: { host: '127.0.0.1', port: 0, proxy: { '/api/contact': { ...config.server.proxy['/api/contact'], target: backend } } },
  });
  t.after(() => vite.close());
  await vite.listen();
  const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
  const response = await fetch(`${origin}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: origin }, body: JSON.stringify(payload) });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createContactHandler, MAX_BODY_BYTES } from './contact.mjs';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };

function readBody(request) {
  return new Promise((accept, reject) => {
    const chunks = [];
    let bytes = 0;
    const cleanup = () => {
      request.off('data', onData);
      request.off('end', onEnd);
      request.off('error', onError);
      request.off('aborted', onAbort);
    };
    const onError = () => { cleanup(); reject(new Error('Invalid request')); };
    const onAbort = () => { cleanup(); reject(new Error('Aborted request')); };
    const onEnd = () => { cleanup(); accept(Buffer.concat(chunks)); };
    const onData = (chunk) => {
      bytes += chunk.length;
      if (bytes > MAX_BODY_BYTES) {
        cleanup();
        request.resume();
        reject(Object.assign(new Error('Request too large'), { status: 413 }));
      } else chunks.push(chunk);
    };
    request.on('data', onData);
    request.on('end', onEnd);
    request.on('error', onError);
    request.on('aborted', onAbort);
  });
}

export function createVaiServer({
  apiKey = process.env.RESEND_API_KEY,
  fromEmail = process.env.RESEND_FROM_EMAIL || 'omar@vaisolutions.ai',
  allowedOrigin = process.env.CONTACT_ORIGIN,
  trustProxy = process.env.CONTACT_TRUST_PROXY === 'true',
  distDirectory = resolve(projectRoot, 'dist'),
  fetchImpl,
} = {}) {
  const handleContact = createContactHandler({ apiKey, fromEmail, allowedOrigin, fetchImpl });
  const distRoot = resolve(distDirectory);
  const server = createServer(async (request, response) => {
    // A client disconnect must not become an unhandled request-stream error.
    request.on('error', () => {});
    const sendJson = (status, message) => {
      response.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', Connection: 'close' });
      response.end(JSON.stringify({ ok: false, message }));
    };
    try {
      const url = new URL(request.url, 'http://localhost');
      if (url.pathname === '/api/contact') {
        if (Number(request.headers['content-length']) > MAX_BODY_BYTES) return sendJson(413, 'The enquiry is too large.');
        const body = request.method === 'POST' ? await readBody(request) : undefined;
        const headers = new Headers();
        for (const [name, value] of Object.entries(request.headers)) {
          if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
        }
        const origin = allowedOrigin || `http://${request.headers.host || 'localhost'}`;
        const webRequest = new Request(new URL('/api/contact', origin), { method: request.method, headers, body });
        const clientId = trustProxy
          ? String(request.headers['x-forwarded-for'] || request.socket.remoteAddress).split(',')[0].trim()
          : request.socket.remoteAddress;
        const result = await handleContact(webRequest, clientId);
        response.writeHead(result.status, Object.fromEntries(result.headers));
        response.end(Buffer.from(await result.arrayBuffer()));
        return;
      }
      if (url.pathname.startsWith('/api/')) return sendJson(404, 'Endpoint not found.');
      if (!['GET', 'HEAD'].includes(request.method)) return sendJson(405, 'Method not allowed.');
      const pathname = decodeURIComponent(url.pathname);
      const segments = pathname.split('/');
      if (segments.some((part) => part.startsWith('.') || part.includes('\\'))) return sendJson(404, 'Not found.');
      let target = resolve(distRoot, `.${pathname}`);
      if (!target.startsWith(`${distRoot}${sep}`) && target !== distRoot) return sendJson(404, 'Not found.');
      const exists = await stat(target).then((value) => value.isFile()).catch(() => false);
      if (!exists) {
        if (pathname.startsWith('/assets/') || extname(pathname)) return sendJson(404, 'Not found.');
        target = resolve(distRoot, 'index.html');
      }
      const content = await readFile(target);
      response.writeHead(200, {
        'Content-Type': mimeTypes[extname(target)] || 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache',
      });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch (error) {
      if (response.headersSent) response.destroy();
      else sendJson(error?.status === 413 ? 413 : error?.code === 'ENOENT' ? 503 : 400, error?.status === 413 ? 'The enquiry is too large.' : error?.code === 'ENOENT' ? 'Build the website before starting this server.' : 'The request could not be processed.');
    }
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const port = Number(process.env.PORT || 3001);
  const host = process.env.HOST || '127.0.0.1';
  createVaiServer().listen(port, host, () => {
    console.log(`VAI website/contact server listening on http://${host}:${port}`);
    if (!process.env.RESEND_API_KEY) console.log('Email sending is unavailable until RESEND_API_KEY is configured.');
  });
}

import { randomUUID } from 'node:crypto';

export const MAX_BODY_BYTES = 64 * 1024;
const recipient = 'kamal@vaisolutions.ai';
const emailPattern = /^[^\s<>@,;:]+@[^\s<>@,;:]+\.[^\s<>@,;:]+$/;
const uuidPattern = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;

function isEmail(value) {
  return typeof value === 'string' && value.length <= 254 && emailPattern.test(value)
    && [...value].every((character) => character.charCodeAt(0) > 31 && character.charCodeAt(0) !== 127);
}

function validatePayload(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input) || input.consent !== true) return null;
  const limits = { name: 120, email: 254, company: 200, role: 120, industry: 80, message: 10000 };
  const payload = {};
  for (const [field, limit] of Object.entries(limits)) {
    const value = input[field] ?? '';
    if (typeof value !== 'string' || value.length > limit || value.includes('\0')) return null;
    payload[field] = value.trim();
    if (field !== 'message' && /[\r\n]/.test(payload[field])) return null;
  }
  if (!payload.name || !payload.company || !payload.message || !isEmail(payload.email)) return null;
  return payload;
}

export function createContactHandler({
  apiKey,
  fromEmail = 'omar@vaisolutions.ai',
  allowedOrigin,
  fetchImpl = fetch,
  now = Date.now,
} = {}) {
  // Per-process abuse protection. Never trust forwarded IPs unless the server explicitly opts in.
  const attempts = new Map();
  const windowMs = 10 * 60 * 1000;

  return async function handleContact(request, clientId = 'unknown') {
    const origin = request.headers.get('origin');
    const expectedOrigin = allowedOrigin || new URL(request.url).origin;
    const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', Vary: 'Origin' };
    const json = (status, message, extra = {}) => Response.json({ ok: false, message }, { status, headers: { ...headers, ...extra } });
    if (origin && origin !== expectedOrigin) return json(403, 'This submission origin is not allowed.');
    if (origin) headers['Access-Control-Allow-Origin'] = origin;
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: {
        ...headers,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Idempotency-Key',
        'Access-Control-Max-Age': '600',
      } });
    }
    if (request.method !== 'POST') return json(405, 'Use POST to submit an enquiry.', { Allow: 'POST, OPTIONS' });
    if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
      return json(415, 'Submit the enquiry as JSON.');
    }
    const timestamp = now();
    for (const [key, value] of attempts) if (value.expires <= timestamp) attempts.delete(key);
    const attempt = attempts.get(clientId) || { count: 0, expires: timestamp + windowMs };
    if (attempt.count >= 5 || (!attempts.has(clientId) && attempts.size >= 5000)) {
      return json(429, 'Too many enquiries. Please try again later.', { 'Retry-After': String(Math.ceil((attempt.expires - timestamp) / 1000)) });
    }
    attempt.count += 1;
    attempts.set(clientId, attempt);

    let payload;
    try {
      const body = await request.text();
      if (Buffer.byteLength(body) > MAX_BODY_BYTES) return json(413, 'The enquiry is too large.');
      payload = validatePayload(JSON.parse(body));
    } catch {
      return json(400, 'The enquiry could not be read.');
    }
    if (!payload) return json(400, 'Please check your fields, email address, and consent.');
    const requestId = request.headers.get('idempotency-key') || randomUUID();
    if (!uuidPattern.test(requestId)) return json(400, 'The submission identifier is invalid.');
    if (!apiKey?.trim() || !isEmail(fromEmail)) {
      return json(503, 'The enquiry service is not configured yet. Please try again later.');
    }
    const reference = `VAI-${requestId.replaceAll('-', '').toUpperCase()}`;
    try {
      const response = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        signal: AbortSignal.timeout(10000),
        headers: {
          Authorization: `Bearer ${apiKey.trim()}`,
          'Content-Type': 'application/json',
          'Idempotency-Key': `vai-contact/${requestId}`,
        },
        body: JSON.stringify({
          from: `VAI Website <${fromEmail}>`,
          to: [recipient],
          reply_to: payload.email,
          subject: 'New VAI website enquiry',
          text: [
            `Reference: ${reference}`,
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Company: ${payload.company}`,
            `Role: ${payload.role || 'Not provided'}`,
            `Industry: ${payload.industry || 'Not provided'}`,
            'Contact consent: Yes',
            '', 'Message:', payload.message,
          ].join('\n'),
        }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || typeof data?.id !== 'string' || !data.id) {
        // Provider messages may contain implementation details: do not reflect them to visitors.
        return json(502, 'The enquiry could not be sent. Please retry.');
      }
      return Response.json({ ok: true, reference }, { headers });
    } catch (error) {
      return json(error?.name === 'TimeoutError' ? 504 : 502, 'The enquiry could not be sent. Please retry.');
    }
  };
}

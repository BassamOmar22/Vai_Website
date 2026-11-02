import { trackContactSubmit } from './analytics';

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  message: string;
  consent: boolean;
};

export type ContactResult = { ok: true; reference: string } | { ok: false; message: string };

let pendingSubmission: { fingerprint: string; id: string } | undefined;

function trackSubmission(status: string) {
  try { trackContactSubmit(status); } catch { /* Optional analytics cannot change an email's delivery result. */ }
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

  try {
    const fingerprint = JSON.stringify(payload);
    if (pendingSubmission?.fingerprint !== fingerprint) {
      pendingSubmission = { fingerprint, id: crypto.randomUUID() };
    }
    const submission = pendingSubmission;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Idempotency-Key': submission.id },
      body: fingerprint,
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json().catch(() => null) as { ok?: boolean; reference?: string; message?: string } | null;
    if (!response.ok) {
      trackSubmission('backend-error');
      return { ok: false, message: response.status === 429 ? 'Too many enquiries. Please try again later.' : 'The enquiry could not be sent. Please retry.' };
    }
    if (data?.ok !== true || typeof data.reference !== 'string' || !data.reference.trim()) {
      trackSubmission('backend-error');
      return { ok: false, message: 'The enquiry could not be sent. Please retry.' };
    }
    if (pendingSubmission === submission) pendingSubmission = undefined;
    trackSubmission('sent');
    return { ok: true, reference: data.reference };
  } catch {
    trackSubmission('network-error');
    return { ok: false, message: 'A network issue prevented submission. Please retry.' };
  }
}

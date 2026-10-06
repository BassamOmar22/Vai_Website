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

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    trackContactSubmit('local-confirmation');
    return { ok: true, reference: `VAI-${Date.now().toString(36).toUpperCase()}` };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      trackContactSubmit('backend-error');
      return { ok: false, message: 'The enquiry could not be sent. Please retry.' };
    }

    const data = (await response.json().catch(() => ({}))) as { reference?: string };
    trackContactSubmit('sent');
    return { ok: true, reference: data.reference ?? `VAI-${Date.now().toString(36).toUpperCase()}` };
  } catch {
    trackContactSubmit('network-error');
    return { ok: false, message: 'A network issue prevented submission. Please retry.' };
  }
}

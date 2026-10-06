import { useMemo, useState } from 'react';
import { contactCopy, industries } from '../../site/content';
import { submitContact, type ContactPayload } from '../../utils/contact';
import { ErrorMessage } from './ErrorMessage';
import { FormStatus } from './FormStatus';

type ContactFormProps = {
  onSuccess: (reference: string) => void;
};

const initialPayload: ContactPayload = {
  name: '',
  email: '',
  company: '',
  role: '',
  industry: '',
  message: '',
  consent: false,
};

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [payload, setPayload] = useState(initialPayload);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'validation-error' | 'backend-error'>('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');

  const isValidEmail = useMemo(() => /\S+@\S+\.\S+/.test(payload.email), [payload.email]);

  const update = (field: keyof ContactPayload, value: string | boolean) => {
    setPayload((current) => ({ ...current, [field]: value }));
  };

  const validate = () => {
    if (!payload.name.trim() || !payload.email.trim() || !payload.company.trim() || !payload.message.trim()) {
      return 'Please complete all required fields.';
    }
    if (!isValidEmail) {
      return 'Please enter a valid email address.';
    }
    if (!payload.consent) {
      return contactCopy.form.consent;
    }
    return '';
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setStatus('validation-error');
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError('');
    const result = await submitContact(payload);

    if (result.ok) {
      setReference(result.reference);
      setStatus('success');
      onSuccess(result.reference);
      return;
    }

    setStatus('backend-error');
    setError(result.message);
  };

  return (
    <form className="contact-form" id="contact-form" noValidate onSubmit={onSubmit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input autoComplete="name" onChange={(event) => update('name', event.target.value)} required value={payload.name} />
        </label>
        <label>
          <span>Work email</span>
          <input
            autoComplete="email"
            onChange={(event) => update('email', event.target.value)}
            required
            type="email"
            value={payload.email}
          />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>Company</span>
          <input
            autoComplete="organization"
            onChange={(event) => update('company', event.target.value)}
            required
            value={payload.company}
          />
        </label>
        <label>
          <span>Industry</span>
          <select onChange={(event) => update('industry', event.target.value)} value={payload.industry}>
            <option value="">Select an industry</option>
            {industries.map((industry) => (
              <option key={industry.key} value={industry.key}>
                {industry.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Role or title</span>
        <input autoComplete="organization-title" onChange={(event) => update('role', event.target.value)} value={payload.role} />
      </label>
      <label>
        <span>Message</span>
        <textarea onChange={(event) => update('message', event.target.value)} required rows={7} value={payload.message} />
      </label>
      <label className="checkbox-field">
        <input checked={payload.consent} onChange={(event) => update('consent', event.target.checked)} type="checkbox" />
        <span>{contactCopy.form.consent}</span>
      </label>
      {error ? <ErrorMessage message={error} /> : null}
      <FormStatus reference={reference} status={status} />
      <div className="button-row">
        <button className="button primary" disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? contactCopy.form.sending : status === 'backend-error' ? 'Try again' : contactCopy.form.submit}
        </button>
      </div>
    </form>
  );
}

import { CheckCircle2, LoaderCircle, RotateCcw } from 'lucide-react';

export function FormStatus({ status, reference }: { status: string; reference?: string }) {
  if (status === 'submitting') {
    return (
      <p className="form-status">
        <LoaderCircle className="spin" size={16} />
        Submitting enquiry
      </p>
    );
  }

  if (status === 'success') {
    return (
      <p className="form-status success">
        <CheckCircle2 size={16} />
        Confirmation reference {reference}
      </p>
    );
  }

  if (status === 'backend-error') {
    return (
      <p className="form-status warning">
        <RotateCcw size={16} />
        Backend error state ready. Retry is available.
      </p>
    );
  }

  return null;
}

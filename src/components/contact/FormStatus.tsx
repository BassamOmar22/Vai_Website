import { CheckCircle2, LoaderCircle, RotateCcw } from 'lucide-react';

export function FormStatus({ status, reference }: { status: string; reference?: string }) {
  if (status === 'submitting') {
    return (
      <p className="form-status">
        <LoaderCircle className="spin" size={16} />
        Sending enquiry...
      </p>
    );
  }

  if (status === 'success') {
    return (
      <p className="form-status success">
        <CheckCircle2 size={16} />
        Enquiry received. Reference {reference}
      </p>
    );
  }

  if (status === 'backend-error') {
    return (
      <p className="form-status warning">
        <RotateCcw size={16} />
        The enquiry could not be sent. Please try again.
      </p>
    );
  }

  return null;
}

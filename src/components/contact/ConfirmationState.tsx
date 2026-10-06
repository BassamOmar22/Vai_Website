import { CheckCircle2 } from 'lucide-react';

export function ConfirmationState({ reference, onNext }: { reference: string; onNext: () => void }) {
  return (
    <section className="confirmation-state" id="confirmation">
      <CheckCircle2 size={34} />
      <h1>Enquiry received.</h1>
      <p>Thank you for contacting VAI. Your enquiry has been recorded and will be reviewed.</p>
      <p className="reference">Reference: {reference}</p>
      <button className="button primary" onClick={onNext} type="button">
        Return home
      </button>
    </section>
  );
}

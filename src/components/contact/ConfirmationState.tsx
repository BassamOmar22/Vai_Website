import { CheckCircle2 } from 'lucide-react';

export function ConfirmationState({ reference, onNext }: { reference: string; onNext: () => void }) {
  return (
    <section className="confirmation-state" id="confirmation">
      <CheckCircle2 size={34} />
      <h1>[Awaiting VAI master copy: THANK-YOU TY01 HEADING]</h1>
      <p>[Awaiting VAI master copy: THANK-YOU TY01 BODY]</p>
      <p className="reference">Reference: {reference}</p>
      <button className="button primary" onClick={onNext} type="button">
        [Awaiting VAI master copy: THANK-YOU TY01 PRIMARY_CTA]
      </button>
    </section>
  );
}

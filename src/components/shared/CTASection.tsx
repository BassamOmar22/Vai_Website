import { ArrowRight } from 'lucide-react';

export function CTASection({
  title,
  body,
  action,
  onAction,
}: {
  title: string;
  body: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <section className="cta-section">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <button className="button primary" onClick={onAction} type="button">
        {action}
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

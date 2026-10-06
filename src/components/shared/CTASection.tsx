import { ArrowRight } from 'lucide-react';

export function CTASection({
  title,
  heading,
  body,
  action,
  onAction,
}: {
  title?: string;
  heading?: string;
  body: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <section className="cta-section interactive-card">
      <div>
        <h2>{title ?? heading}</h2>
        <p>{body}</p>
      </div>
      <button className="button primary" onClick={onAction} type="button">
        {action}
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

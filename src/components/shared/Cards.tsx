import { ArrowRight, CheckCircle2 } from 'lucide-react';

type CardProps = {
  title: string;
  body: string;
  action?: string;
  onAction?: () => void;
};

export function IndustryCard({ title, body, action, onAction }: CardProps) {
  return (
    <article className="card industry-card interactive-card">
      <h3>{title}</h3>
      <p>{body}</p>
      {action ? (
        <button className="text-link" onClick={onAction} type="button">
          {action}
          <ArrowRight size={16} />
        </button>
      ) : null}
    </article>
  );
}

export function CapabilityCard({ title, body }: CardProps) {
  return (
    <article className="card capability-card interactive-card">
      <CheckCircle2 size={20} />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export function EvidenceCard({ title, body }: CardProps) {
  return (
    <article className="evidence-card interactive-card">
      <span />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  visualLabels?: string[];
};

export function HeroSection({ eyebrow, heading, body, primaryCta, secondaryCta, onPrimary, onSecondary, visualLabels = ['VAI', 'Data', 'Workflow', 'Governance', 'Decision layer'] }: HeroSectionProps) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading}</h1>
          <p>{body}</p>
          <div className="button-row">
            {primaryCta ? (
              <button className="button primary" onClick={onPrimary} type="button">
                {primaryCta}
                <ArrowRight size={18} />
              </button>
            ) : null}
            {secondaryCta ? (
              <button className="button secondary" onClick={onSecondary} type="button">
                {secondaryCta}
              </button>
            ) : null}
          </div>
        </div>
        <div className="hero-panel hero-visual" aria-label="VAI operating model">
          <div className="signal-line top" />
          <div className="data-pulse" />
          {visualLabels.slice(0, 5).map((label, index) => <div className={`diagram-node ${index === 0 ? 'large' : ''}`} key={label}>{label}</div>)}
          <div className="signal-line bottom" />
        </div>
      </div>
    </section>
  );
}

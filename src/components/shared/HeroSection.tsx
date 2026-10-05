import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
};

export function HeroSection({ eyebrow, heading, body, primaryCta, secondaryCta, onPrimary, onSecondary }: HeroSectionProps) {
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
        <div className="hero-panel" aria-label="VAI operating model placeholder">
          <div className="signal-line top" />
          <div className="diagram-node large">VAI</div>
          <div className="diagram-node">Data</div>
          <div className="diagram-node">Workflow</div>
          <div className="diagram-node">Governance</div>
          <div className="signal-line bottom" />
        </div>
      </div>
    </section>
  );
}

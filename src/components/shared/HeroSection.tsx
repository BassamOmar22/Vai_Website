import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  compact?: boolean;
};

export function HeroSection({ eyebrow, heading, body, primaryCta, secondaryCta, onPrimary, onSecondary, compact = false }: HeroSectionProps) {
  return (
    <section className={`hero-section ${compact ? 'hero-compact' : ''}`} id="hero">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading}</h1>
          <p>{body}</p>
          <div className="button-row">
            {primaryCta ? <button className="button primary" onClick={onPrimary} type="button">{primaryCta}<ArrowRight size={18} /></button> : null}
            {secondaryCta ? <button className="button secondary" onClick={onSecondary} type="button">{secondaryCta}</button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

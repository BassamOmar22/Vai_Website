import { ArrowRight, Pause, Play } from 'lucide-react';
import { useDecorativeMotion } from './useDecorativeMotion';

type HeroSectionProps = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  visualLabels?: string[];
  compact?: boolean;
};

export function HeroSection({ eyebrow, heading, body, primaryCta, secondaryCta, onPrimary, onSecondary, visualLabels = ['VAI', 'Data', 'Workflow', 'Governance', 'Decision layer'], compact = false }: HeroSectionProps) {
  const { element, motionEnabled, reduced, toggle, userPaused } = useDecorativeMotion();

  return (
    <section className={`hero-section ${compact ? 'hero-compact' : ''} ${motionEnabled ? '' : 'motion-paused'}`} id="hero" ref={element}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading}</h1>
          <p>{body}</p>
          <div className="button-row">
            {primaryCta ? <button className="button primary" onClick={onPrimary} type="button">{primaryCta}<ArrowRight size={18} /></button> : null}
            {secondaryCta ? <button className="button secondary" onClick={onSecondary} type="button">{secondaryCta}</button> : null}
          </div>
        </div>
        <div className="hero-visual-wrap">
          <div className="hero-panel hero-visual" aria-label="VAI operating model">
            <svg aria-hidden="true" className="hero-trace" viewBox="0 0 360 300">
              <rect className="hero-trace-path" height="274" rx="5" width="334" x="13" y="13" />
              <circle className="hero-trace-marker" cx="13" cy="13" r="3" />
            </svg>
            {visualLabels.slice(0, 5).map((label, index) => <div className={`diagram-node ${index === 0 ? 'large' : ''}`} key={label}>{label}</div>)}
          </div>
          <button aria-pressed={userPaused} className="motion-control" disabled={reduced} onClick={toggle} type="button">
            {userPaused ? <Play size={14} /> : <Pause size={14} />}
            {reduced ? 'Motion reduced' : userPaused ? 'Resume motion' : 'Pause motion'}
          </button>
        </div>
      </div>
    </section>
  );
}

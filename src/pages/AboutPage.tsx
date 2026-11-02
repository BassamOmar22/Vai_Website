import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import type { PageProps } from '../routes';
import { about } from '../site/content';

export function AboutPage({ navigate }: PageProps) {
  return <div className="about-page">
    <HeroSection {...about.hero} compact onPrimary={() => navigate('/contact')} />

    <ResponsiveContainer>
      <Reveal>
        <section className="about-positioning section" id="positioning">
          <div className="about-section-label"><p className="eyebrow">{about.positioning.eyebrow}</p></div>
          <div className="about-reading-column">
            <p>{about.positioning.paragraphs[0]}</p>
            <p className="about-identity"><strong>{about.positioning.paragraphs[1]}</strong></p>
            <p>We transform complex business information into clear, actionable decisions by bringing together <strong>advanced AI, predictive intelligence, scenario simulation, and governed decision-making</strong> in one connected system.</p>
            <p>Positioned above existing ERP, BI, and operational platforms, VAI doesn’t replace the technology businesses already rely on. <strong>We make that technology considerably more intelligent, more predictive, and more valuable to the people making decisions.</strong></p>
            <p className="about-philosophy">{about.positioning.paragraphs[4]}</p>
          </div>
          <div className="about-principles grid three stagger-grid" aria-label="Positioning principles">
            {about.positioning.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="about-overview section" aria-labelledby="about-overview-heading">
          <div className="about-overview-heading">
            <p className="eyebrow">How VAI creates decision intelligence</p>
            <h2 id="about-overview-heading">Predict <span aria-hidden="true">→</span> Simulate <span aria-hidden="true">→</span> Decide</h2>
          </div>
          <nav aria-label="About VAI pillars" className="about-overview-rail">
            {about.overview.map((item) => <a className="about-overview-link" href={item.href} key={item.number}>
              <span className="about-overview-number">{item.number}</span>
              <span><strong>{item.title}</strong><small>{item.body}</small></span>
            </a>)}
          </nav>
        </section>
      </Reveal>

      <div className="about-pillars">
        {about.pillars.map((pillar) => <Reveal key={pillar.id}>
          <section className="about-pillar section" id={pillar.id}>
            <div className="about-pillar-heading">
              <h2>{pillar.number} — {pillar.heading}</h2>
            </div>
            <div className="about-pillar-copy">
              <p className="about-pillar-emphasis"><strong>{pillar.emphasis}</strong></p>
              {pillar.paragraphs.map((paragraph, index) => {
                if (pillar.id === 'understand' && index === 1) return <p key={paragraph}>Through specialized AI agents and structured decision reasoning, we move beyond presenting information to understanding <strong>what is changing, why it matters, and which decisions deserve attention.</strong></p>;
                if (pillar.id === 'decide-govern' && index === 0) return <p key={paragraph}>VAI brings predictions, simulations, business rules, and specialized AI reasoning together into a structured <strong>Decision Intelligence Pack</strong>.</p>;
                return <p key={paragraph}>{paragraph}</p>;
              })}
            </div>
          </section>
        </Reveal>)}
      </div>

      <Reveal>
        <section className="about-differentiators section" aria-labelledby="differentiators-heading">
          <div className="about-section-label">
            <p className="eyebrow">What makes VAI distinct</p>
            <h2 id="differentiators-heading">Five essential differentiators</h2>
          </div>
          <dl>
            {about.differentiators.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}
          </dl>
        </section>
      </Reveal>
    </ResponsiveContainer>

    <Reveal>
      <section className="about-closing" aria-labelledby="about-closing-heading">
        <ResponsiveContainer>
          <div className="about-closing-copy">
            <p className="eyebrow">VAI Solutions</p>
            <h2 id="about-closing-heading">{about.closing.heading}</h2>
            <p>{about.closing.body}</p>
            <p className="about-closing-principle"><strong>{about.closing.principle}</strong></p>
            <p className="about-closing-conviction"><strong>{about.closing.conviction}</strong></p>
            <p className="about-closing-signoff"><strong>{about.closing.signoff}</strong></p>
          </div>
        </ResponsiveContainer>
      </section>
    </Reveal>

    <ResponsiveContainer>
      <Reveal><section className="section about-cta"><CTASection {...about.cta} onAction={() => navigate('/contact')} /></section></Reveal>
    </ResponsiveContainer>
  </div>;
}

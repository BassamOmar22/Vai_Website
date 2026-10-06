import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { about } from '../site/content';

export function AboutPage({ navigate }: PageProps) {
  return <><HeroSection {...about.hero} onPrimary={() => navigate('/contact')} />
    <ResponsiveContainer><Reveal><section className="section"><SectionHeader {...about.positioning} /><div className="grid three stagger-grid">{about.positioning.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><SectionHeader {...about.ownership} /><div className="grid four stagger-grid">{about.ownership.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><CTASection {...about.cta} onAction={() => navigate('/contact')} /></section></Reveal></ResponsiveContainer></>;
}

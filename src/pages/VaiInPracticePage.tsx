import { EvidenceCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { practice } from '../site/content';

export function VaiInPracticePage({ navigate }: PageProps) {
  return <><HeroSection {...practice.hero} onPrimary={() => navigate('/contact')} />
    <ResponsiveContainer><Reveal><section className="section"><SectionHeader {...practice.evidence} /><div className="grid three stagger-grid">{practice.evidence.cards.map((card) => <EvidenceCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><SectionHeader {...practice.application} /><div className="grid four stagger-grid">{practice.application.steps.map((step, index) => <MethodStep {...step} key={step.title} step={`0${index + 1}`} />)}</div></section></Reveal>
      <Reveal><section className="section"><CTASection {...practice.cta} onAction={() => navigate('/contact')} /></section></Reveal></ResponsiveContainer></>;
}

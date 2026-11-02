import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { governance } from '../site/content';

export function ArchitectureGovernancePage({ navigate }: PageProps) {
  return <><HeroSection {...governance.hero} onPrimary={() => navigate('/contact')} />
    <ResponsiveContainer><Reveal><section className="section"><SectionHeader {...governance.principles} /><div className="grid three stagger-grid">{governance.principles.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section split"><SectionHeader {...governance.model} /><ArchitectureDiagramBlock labels={governance.model.labels} /></section></Reveal>
      <Reveal><section className="section"><SectionHeader {...governance.controls} /><div className="grid three stagger-grid">{governance.controls.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><CTASection {...governance.cta} onAction={() => navigate('/contact')} /></section></Reveal></ResponsiveContainer></>;
}

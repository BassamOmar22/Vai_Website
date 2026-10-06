import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard, EvidenceCard, IndustryCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { home, industries } from '../site/content';

export function HomePage({ navigate }: PageProps) {
  return <>
    <HeroSection {...home.hero} onPrimary={() => navigate('/contact')} onSecondary={() => navigate('/solutions')} visualLabels={['VAI', 'Data', 'Workflow', 'Governance', 'Decision layer']} />
    <ResponsiveContainer>
      <Reveal><section className="section"><SectionHeader {...home.output} /><div className="grid three stagger-grid">{home.output.cards.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><SectionHeader {...home.method} /><div className="grid four stagger-grid">{home.method.steps.map((step, index) => <MethodStep {...step} key={step.title} step={`0${index + 1}`} />)}</div></section></Reveal>
      <Reveal><section className="section"><SectionHeader eyebrow="Industries" title="Built around the way each sector actually operates." body="VAI adapts the same disciplined intelligence approach to different commercial realities, from retail execution to hospitality service workflows." /><div className="grid five stagger-grid">{industries.map((industry) => <IndustryCard action="Explore solution" body={industry.body} key={industry.key} onAction={() => navigate(industry.path)} title={industry.label} />)}</div></section></Reveal>
      <Reveal><section className="section split"><SectionHeader {...home.evidence} /><div className="stack">{home.evidence.cards.map((card) => <EvidenceCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section split"><SectionHeader {...home.architecture} /><ArchitectureDiagramBlock labels={home.architecture.labels} /></section></Reveal>
      <Reveal><section className="section"><SectionHeader {...home.engagement} /><div className="grid four stagger-grid">{home.engagement.steps.map((step, index) => <MethodStep {...step} key={step.title} step={`0${index + 1}`} />)}</div></section></Reveal>
      <Reveal><section className="section"><CTASection action="Speak with VAI" body={home.final.body} onAction={() => navigate('/contact')} title={home.final.heading} /></section></Reveal>
    </ResponsiveContainer>
  </>;
}

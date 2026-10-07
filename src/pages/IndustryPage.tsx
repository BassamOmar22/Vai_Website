import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { industryContent, type Industry } from '../site/content';

export function IndustryPage({ industry, navigate }: PageProps & { industry: Industry }) {
  const content = industryContent[industry.key];
  return <>
    <HeroSection {...content.hero} onPrimary={() => navigate('/contact')} visualLabels={content.architecture.labels} />
    <ResponsiveContainer>
      <Reveal><section className="section"><SectionHeader eyebrow="Capabilities" title={`${industry.label} intelligence, built for action.`} body="Practical capabilities designed around the signals, responsibilities, and operating rhythm of the sector." /><div className="grid three stagger-grid">{content.capabilities.map((card) => <CapabilityCard {...card} key={card.title} />)}</div></section></Reveal>
      <Reveal><section className="section"><SectionHeader eyebrow={industry.key === 'hospitality' ? 'Service workflow' : 'Operating workflow'} title="A working path from signal to action." body="The first version should be grounded in a defined decision, a focused set of signals, and a clear review rhythm." /><div className="grid four stagger-grid method-grid">{content.workflow.map((step, index) => <MethodStep {...step} key={step.title} step={`0${index + 1}`} />)}</div></section></Reveal>
      <Reveal><section className="section split"><SectionHeader eyebrow="Architecture fit" title={content.architecture.heading} body={content.architecture.body} /><ArchitectureDiagramBlock labels={content.architecture.labels} /></section></Reveal>
      <Reveal><section className="section"><CTASection {...content.cta} onAction={() => navigate('/contact')} /></section></Reveal>
    </ResponsiveContainer>
  </>;
}

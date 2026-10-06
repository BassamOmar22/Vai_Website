import { IndustryCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { Reveal } from '../components/shared/Reveal';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { industries, solutions } from '../site/content';

export function SolutionsPage({ navigate }: PageProps) {
  return <><HeroSection {...solutions.hero} onPrimary={() => navigate('/contact')} />
    <ResponsiveContainer><Reveal><section className="section"><SectionHeader {...solutions.areas} /><div className="grid five stagger-grid">{industries.map((industry) => <IndustryCard action="Explore solution" body={industry.body} key={industry.key} onAction={() => navigate(industry.path)} title={industry.label} />)}</div></section></Reveal>
      <Reveal><section className="section"><CTASection {...solutions.final} onAction={() => navigate('/contact')} /></section></Reveal></ResponsiveContainer></>;
}

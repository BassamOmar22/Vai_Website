import { IndustryCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { industries, placeholder } from '../site/content';

export function SolutionsPage({ navigate }: PageProps) {
  return (
    <>
      <HeroSection
        body={placeholder('SOLUTIONS', 'S01', 'BODY')}
        eyebrow="Solutions"
        heading={placeholder('SOLUTIONS', 'S01', 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/vai-in-practice')}
        primaryCta={placeholder('SOLUTIONS', 'S01', 'PRIMARY_CTA')}
        secondaryCta={placeholder('SOLUTIONS', 'S01', 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id="s02-industry-paths">
          <SectionHeader body={placeholder('SOLUTIONS', 'S02', 'BODY')} eyebrow="Industry paths" title={placeholder('SOLUTIONS', 'S02', 'HEADING')} />
          <div className="grid five">
            {industries.map((industry) => (
              <IndustryCard
                action={placeholder('SOLUTIONS', 'S02', `${industry.route}_CTA`)}
                body={placeholder('SOLUTIONS', 'S02', `${industry.route}_BODY`)}
                key={industry.key}
                onAction={() => navigate(industry.path)}
                title={industry.label}
              />
            ))}
          </div>
        </section>
        <section className="section" id="s03-capabilities">
          <CTASection
            action={placeholder('SOLUTIONS', 'S03', 'PRIMARY_CTA')}
            body={placeholder('SOLUTIONS', 'S03', 'BODY')}
            onAction={() => navigate('/architecture-governance')}
            title={placeholder('SOLUTIONS', 'S03', 'HEADING')}
          />
        </section>
      </ResponsiveContainer>
    </>
  );
}

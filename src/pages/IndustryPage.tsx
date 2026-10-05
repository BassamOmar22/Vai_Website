import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder, type Industry } from '../site/content';

type IndustryPageProps = PageProps & { industry: Industry };

export function IndustryPage({ industry, navigate }: IndustryPageProps) {
  const prefix = industry.code;
  const workflowCount = industry.key === 'hospitality' ? 5 : 3;

  return (
    <>
      <HeroSection
        body={placeholder(industry.route, `${prefix}01`, 'BODY')}
        eyebrow={industry.label}
        heading={placeholder(industry.route, `${prefix}01`, 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/solutions')}
        primaryCta={placeholder(industry.route, `${prefix}01`, 'PRIMARY_CTA')}
        secondaryCta={placeholder(industry.route, `${prefix}01`, 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id={`${industry.key}-capabilities`}>
          <SectionHeader
            body={placeholder(industry.route, `${prefix}02`, 'BODY')}
            eyebrow="Capabilities"
            title={placeholder(industry.route, `${prefix}02`, 'HEADING')}
          />
          <div className="grid three">
            {[1, 2, 3].map((item) => (
              <CapabilityCard
                body={placeholder(industry.route, `${prefix}02`, `CAPABILITY_CARD_0${item}_BODY`)}
                key={item}
                title={placeholder(industry.route, `${prefix}02`, `CAPABILITY_CARD_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section" id={`${industry.key}-workflow`}>
          <SectionHeader
            body={placeholder(industry.route, `${prefix}03`, 'BODY')}
            eyebrow={industry.key === 'hospitality' ? 'Service workflow' : 'Operating workflow'}
            title={placeholder(industry.route, `${prefix}03`, 'HEADING')}
          />
          <div className="grid four">
            {Array.from({ length: workflowCount }, (_, index) => index + 1).map((item) => (
              <MethodStep
                body={placeholder(industry.route, `${prefix}03`, `WORKFLOW_STEP_0${item}_BODY`)}
                key={item}
                step={`0${item}`}
                title={placeholder(industry.route, `${prefix}03`, `WORKFLOW_STEP_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section split" id={`${industry.key}-architecture`}>
          <SectionHeader
            body={placeholder(industry.route, `${prefix}04`, 'BODY')}
            eyebrow="Architecture fit"
            title={placeholder(industry.route, `${prefix}04`, 'HEADING')}
          />
          <ArchitectureDiagramBlock route={industry.route} />
        </section>
        <section className="section" id={`${industry.key}-cta`}>
          <CTASection
            action={placeholder(industry.route, `${prefix}05`, 'PRIMARY_CTA')}
            body={placeholder(industry.route, `${prefix}05`, 'BODY')}
            onAction={() => navigate('/contact')}
            title={placeholder(industry.route, `${prefix}05`, 'HEADING')}
          />
        </section>
      </ResponsiveContainer>
    </>
  );
}

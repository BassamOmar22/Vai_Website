import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard, EvidenceCard, IndustryCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { homeSections, industries, placeholder } from '../site/content';

export function HomePage({ navigate }: PageProps) {
  return (
    <>
      <HeroSection
        body={placeholder('HOME', 'H01', 'SUBHEADING')}
        eyebrow="VAI"
        heading={placeholder('HOME', 'H01', 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/solutions')}
        primaryCta={placeholder('HOME', 'H01', 'PRIMARY_CTA')}
        secondaryCta={placeholder('HOME', 'H01', 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id="h02-illustrative-output">
          <SectionHeader
            body={placeholder('HOME', 'H02', 'BODY')}
            eyebrow={homeSections[1][1]}
            title={placeholder('HOME', 'H02', 'HEADING')}
          />
          <div className="grid three">
            {[1, 2, 3].map((item) => (
              <CapabilityCard
                body={placeholder('HOME', 'H02', `OUTPUT_CARD_0${item}_BODY`)}
                key={item}
                title={placeholder('HOME', 'H02', `OUTPUT_CARD_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section" id="h03-method">
          <SectionHeader body={placeholder('HOME', 'H03', 'BODY')} eyebrow={homeSections[2][1]} title={placeholder('HOME', 'H03', 'HEADING')} />
          <div className="grid four">
            {[1, 2, 3, 4].map((item) => (
              <MethodStep
                body={placeholder('HOME', 'H03', `STEP_0${item}_BODY`)}
                key={item}
                step={`0${item}`}
                title={placeholder('HOME', 'H03', `STEP_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section" id="h04-industries">
          <SectionHeader
            body={placeholder('HOME', 'H04', 'BODY')}
            eyebrow={homeSections[3][1]}
            title={placeholder('HOME', 'H04', 'HEADING')}
          />
          <div className="grid five">
            {industries.map((industry) => (
              <IndustryCard
                action={placeholder('HOME', 'H04', `${industry.route}_CTA`)}
                body={placeholder('HOME', 'H04', `${industry.route}_BODY`)}
                key={industry.key}
                onAction={() => navigate(industry.path)}
                title={industry.label}
              />
            ))}
          </div>
        </section>
        <section className="section split" id="h05-evidence">
          <SectionHeader
            body={placeholder('HOME', 'H05', 'BODY')}
            eyebrow={homeSections[4][1]}
            title={placeholder('HOME', 'H05', 'HEADING')}
          />
          <div className="stack">
            {[1, 2, 3].map((item) => (
              <EvidenceCard
                body={placeholder('HOME', 'H05', `EVIDENCE_CARD_0${item}_BODY`)}
                key={item}
                title={placeholder('HOME', 'H05', `EVIDENCE_CARD_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section split" id="h06-architecture">
          <SectionHeader
            body={placeholder('HOME', 'H06', 'BODY')}
            eyebrow={homeSections[5][1]}
            title={placeholder('HOME', 'H06', 'HEADING')}
          />
          <ArchitectureDiagramBlock route="HOME" />
        </section>
        <section className="section" id="h07-engagement">
          <CTASection
            action={placeholder('HOME', 'H07', 'PRIMARY_CTA')}
            body={placeholder('HOME', 'H07', 'BODY')}
            onAction={() => navigate('/contact')}
            title={placeholder('HOME', 'H07', 'HEADING')}
          />
        </section>
        <section className="section" id="h08-about">
          <SectionHeader body={placeholder('HOME', 'H08', 'BODY')} eyebrow={homeSections[7][1]} title={placeholder('HOME', 'H08', 'HEADING')} />
        </section>
      </ResponsiveContainer>
    </>
  );
}

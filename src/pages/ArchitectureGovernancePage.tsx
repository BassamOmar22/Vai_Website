import { ArchitectureDiagramBlock } from '../components/shared/ArchitectureDiagramBlock';
import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder } from '../site/content';

export function ArchitectureGovernancePage({ navigate }: PageProps) {
  return (
    <>
      <HeroSection
        body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG01', 'BODY')}
        eyebrow="Architecture & Governance"
        heading={placeholder('ARCHITECTURE-GOVERNANCE', 'AG01', 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/vai-in-practice')}
        primaryCta={placeholder('ARCHITECTURE-GOVERNANCE', 'AG01', 'PRIMARY_CTA')}
        secondaryCta={placeholder('ARCHITECTURE-GOVERNANCE', 'AG01', 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id="ag02-principles">
          <SectionHeader
            body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG02', 'BODY')}
            eyebrow="Governance principles"
            title={placeholder('ARCHITECTURE-GOVERNANCE', 'AG02', 'HEADING')}
          />
          <div className="grid three">
            {[1, 2, 3].map((item) => (
              <CapabilityCard
                body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG02', `PRINCIPLE_0${item}_BODY`)}
                key={item}
                title={placeholder('ARCHITECTURE-GOVERNANCE', 'AG02', `PRINCIPLE_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section split" id="ag03-diagram">
          <SectionHeader
            body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG03', 'BODY')}
            eyebrow="Architecture model"
            title={placeholder('ARCHITECTURE-GOVERNANCE', 'AG03', 'HEADING')}
          />
          <ArchitectureDiagramBlock />
        </section>
        <section className="section" id="ag04-controls">
          <SectionHeader
            body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG04', 'BODY')}
            eyebrow="Controls"
            title={placeholder('ARCHITECTURE-GOVERNANCE', 'AG04', 'HEADING')}
          />
        </section>
        <CTASection
          action={placeholder('ARCHITECTURE-GOVERNANCE', 'AG05', 'PRIMARY_CTA')}
          body={placeholder('ARCHITECTURE-GOVERNANCE', 'AG05', 'BODY')}
          onAction={() => navigate('/contact')}
          title={placeholder('ARCHITECTURE-GOVERNANCE', 'AG05', 'HEADING')}
        />
      </ResponsiveContainer>
    </>
  );
}

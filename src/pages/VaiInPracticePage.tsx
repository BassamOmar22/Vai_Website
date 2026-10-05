import { EvidenceCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { MethodStep } from '../components/shared/MethodStep';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder } from '../site/content';

export function VaiInPracticePage({ navigate }: PageProps) {
  return (
    <>
      <HeroSection
        body={placeholder('VAI-IN-PRACTICE', 'VIP01', 'BODY')}
        eyebrow="VAI in Practice"
        heading={placeholder('VAI-IN-PRACTICE', 'VIP01', 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/architecture-governance')}
        primaryCta={placeholder('VAI-IN-PRACTICE', 'VIP01', 'PRIMARY_CTA')}
        secondaryCta={placeholder('VAI-IN-PRACTICE', 'VIP01', 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id="vip02-evidence">
          <SectionHeader
            body={placeholder('VAI-IN-PRACTICE', 'VIP02', 'BODY')}
            eyebrow="Evidence boundaries"
            title={placeholder('VAI-IN-PRACTICE', 'VIP02', 'HEADING')}
          />
          <div className="grid three">
            {[1, 2, 3].map((item) => (
              <EvidenceCard
                body={placeholder('VAI-IN-PRACTICE', 'VIP02', `EVIDENCE_CARD_0${item}_BODY`)}
                key={item}
                title={placeholder('VAI-IN-PRACTICE', 'VIP02', `EVIDENCE_CARD_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section" id="vip03-journey">
          <SectionHeader
            body={placeholder('VAI-IN-PRACTICE', 'VIP03', 'BODY')}
            eyebrow="Practical application"
            title={placeholder('VAI-IN-PRACTICE', 'VIP03', 'HEADING')}
          />
          <div className="grid four">
            {[1, 2, 3, 4].map((item) => (
              <MethodStep
                body={placeholder('VAI-IN-PRACTICE', 'VIP03', `STEP_0${item}_BODY`)}
                key={item}
                step={`0${item}`}
                title={placeholder('VAI-IN-PRACTICE', 'VIP03', `STEP_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <CTASection
          action={placeholder('VAI-IN-PRACTICE', 'VIP04', 'PRIMARY_CTA')}
          body={placeholder('VAI-IN-PRACTICE', 'VIP04', 'BODY')}
          onAction={() => navigate('/contact')}
          title={placeholder('VAI-IN-PRACTICE', 'VIP04', 'HEADING')}
        />
      </ResponsiveContainer>
    </>
  );
}

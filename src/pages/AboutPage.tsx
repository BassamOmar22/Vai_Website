import { CapabilityCard } from '../components/shared/Cards';
import { CTASection } from '../components/shared/CTASection';
import { HeroSection } from '../components/shared/HeroSection';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder } from '../site/content';

export function AboutPage({ navigate }: PageProps) {
  return (
    <>
      <HeroSection
        body={placeholder('ABOUT', 'AB01', 'BODY')}
        eyebrow="About VAI"
        heading={placeholder('ABOUT', 'AB01', 'HEADING')}
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/vai-in-practice')}
        primaryCta={placeholder('ABOUT', 'AB01', 'PRIMARY_CTA')}
        secondaryCta={placeholder('ABOUT', 'AB01', 'SECONDARY_CTA')}
      />
      <ResponsiveContainer>
        <section className="section" id="ab02-positioning">
          <SectionHeader body={placeholder('ABOUT', 'AB02', 'BODY')} eyebrow="Positioning" title={placeholder('ABOUT', 'AB02', 'HEADING')} />
          <div className="grid three">
            {[1, 2, 3].map((item) => (
              <CapabilityCard
                body={placeholder('ABOUT', 'AB02', `CARD_0${item}_BODY`)}
                key={item}
                title={placeholder('ABOUT', 'AB02', `CARD_0${item}_TITLE`)}
              />
            ))}
          </div>
        </section>
        <section className="section" id="ab03-ownership">
          <SectionHeader
            body={placeholder('ABOUT', 'AB03', 'BODY')}
            eyebrow="Delivery ownership"
            title={placeholder('ABOUT', 'AB03', 'HEADING')}
          />
        </section>
        <CTASection
          action={placeholder('ABOUT', 'AB04', 'PRIMARY_CTA')}
          body={placeholder('ABOUT', 'AB04', 'BODY')}
          onAction={() => navigate('/contact')}
          title={placeholder('ABOUT', 'AB04', 'HEADING')}
        />
      </ResponsiveContainer>
    </>
  );
}

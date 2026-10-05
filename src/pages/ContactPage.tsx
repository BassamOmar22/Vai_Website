import { useState } from 'react';
import { ConfirmationState } from '../components/contact/ConfirmationState';
import { ContactForm } from '../components/contact/ContactForm';
import { HeroSection } from '../components/shared/HeroSection';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder } from '../site/content';

export function ContactPage({ navigate }: PageProps) {
  const [reference, setReference] = useState('');

  if (reference) {
    return (
      <ResponsiveContainer className="narrow-page">
        <ConfirmationState reference={reference} onNext={() => navigate('/thank-you')} />
      </ResponsiveContainer>
    );
  }

  return (
    <>
      <HeroSection
        body={placeholder('CONTACT', 'CT01', 'BODY')}
        eyebrow="Contact"
        heading={placeholder('CONTACT', 'CT01', 'HEADING')}
        primaryCta={placeholder('CONTACT', 'CT01', 'PRIMARY_CTA')}
        onPrimary={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <ResponsiveContainer className="narrow-page">
        <section className="section" id="ct02-enquiry-form">
          <SectionHeader
            body={placeholder('CONTACT', 'CT02', 'BODY')}
            eyebrow="Enquiry"
            title={placeholder('CONTACT', 'CT02', 'HEADING')}
          />
          <ContactForm onSuccess={setReference} />
        </section>
      </ResponsiveContainer>
    </>
  );
}

import { useState } from 'react';
import { ConfirmationState } from '../components/contact/ConfirmationState';
import { ContactForm } from '../components/contact/ContactForm';
import { HeroSection } from '../components/shared/HeroSection';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { contactCopy } from '../site/content';

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
        {...contactCopy.hero}
        compact
        onPrimary={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <ResponsiveContainer className="narrow-page">
        <section className="section" id="enquiry">
          <SectionHeader
            {...contactCopy.form}
          />
          <ContactForm onSuccess={setReference} />
        </section>
      </ResponsiveContainer>
    </>
  );
}

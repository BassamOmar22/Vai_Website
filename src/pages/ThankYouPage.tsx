import { ConfirmationState } from '../components/contact/ConfirmationState';
import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import type { PageProps } from '../routes';

export function ThankYouPage({ navigate }: PageProps) {
  return (
    <ResponsiveContainer className="narrow-page">
      <ConfirmationState reference="VAI-ENQUIRY" onNext={() => navigate('/')} />
    </ResponsiveContainer>
  );
}

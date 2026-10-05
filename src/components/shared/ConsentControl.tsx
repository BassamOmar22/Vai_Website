import { useState } from 'react';
import { getAnalyticsConsent, setAnalyticsConsent } from '../../utils/analytics';

export function ConsentControl() {
  const [granted, setGranted] = useState(getAnalyticsConsent());

  const toggle = () => {
    setAnalyticsConsent(!granted);
    setGranted(!granted);
  };

  return (
    <label className="consent-toggle">
      <input checked={granted} onChange={toggle} type="checkbox" />
      <span>Analytics consent</span>
    </label>
  );
}

const consentKey = 'vai_analytics_consent';

export const getAnalyticsConsent = () => localStorage.getItem(consentKey) === 'granted';

export const setAnalyticsConsent = (granted: boolean) => {
  localStorage.setItem(consentKey, granted ? 'granted' : 'denied');
};

export const trackPageView = (path: string, title: string) => {
  if (!getAnalyticsConsent()) return;
  window.dispatchEvent(new CustomEvent('vai:analytics:page_view', { detail: { path, title } }));
};

export const trackContactSubmit = (status: string) => {
  if (!getAnalyticsConsent()) return;
  window.dispatchEvent(new CustomEvent('vai:analytics:contact_submit', { detail: { status } }));
};

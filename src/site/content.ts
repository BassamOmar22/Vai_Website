export const placeholder = (route: string, section: string, field: string) =>
  `[Awaiting VAI master copy: ${route} ${section} ${field}]`;

export const seoPlaceholder = (route: string, field: string) => `[Awaiting VAI SEO file: ${route} ${field}]`;

export const metadata = {
  home: { title: seoPlaceholder('HOME', 'META_TITLE'), description: seoPlaceholder('HOME', 'META_DESCRIPTION') },
  solutions: { title: seoPlaceholder('SOLUTIONS', 'META_TITLE'), description: seoPlaceholder('SOLUTIONS', 'META_DESCRIPTION') },
  retail: { title: seoPlaceholder('RETAIL', 'META_TITLE'), description: seoPlaceholder('RETAIL', 'META_DESCRIPTION') },
  construction: { title: seoPlaceholder('CONSTRUCTION', 'META_TITLE'), description: seoPlaceholder('CONSTRUCTION', 'META_DESCRIPTION') },
  fmcg: { title: seoPlaceholder('FMCG', 'META_TITLE'), description: seoPlaceholder('FMCG', 'META_DESCRIPTION') },
  automotive: { title: seoPlaceholder('AUTOMOTIVE', 'META_TITLE'), description: seoPlaceholder('AUTOMOTIVE', 'META_DESCRIPTION') },
  hospitality: { title: seoPlaceholder('HOSPITALITY', 'META_TITLE'), description: seoPlaceholder('HOSPITALITY', 'META_DESCRIPTION') },
  vaiInPractice: { title: seoPlaceholder('VAI-IN-PRACTICE', 'META_TITLE'), description: seoPlaceholder('VAI-IN-PRACTICE', 'META_DESCRIPTION') },
  architectureGovernance: { title: seoPlaceholder('ARCHITECTURE-GOVERNANCE', 'META_TITLE'), description: seoPlaceholder('ARCHITECTURE-GOVERNANCE', 'META_DESCRIPTION') },
  about: { title: seoPlaceholder('ABOUT', 'META_TITLE'), description: seoPlaceholder('ABOUT', 'META_DESCRIPTION') },
  contact: { title: seoPlaceholder('CONTACT', 'META_TITLE'), description: seoPlaceholder('CONTACT', 'META_DESCRIPTION') },
  privacy: { title: seoPlaceholder('PRIVACY', 'META_TITLE'), description: seoPlaceholder('PRIVACY', 'META_DESCRIPTION') },
  terms: { title: seoPlaceholder('TERMS', 'META_TITLE'), description: seoPlaceholder('TERMS', 'META_DESCRIPTION') },
  thankYou: { title: seoPlaceholder('THANK-YOU', 'META_TITLE'), description: seoPlaceholder('THANK-YOU', 'META_DESCRIPTION') },
};

export const industries = [
  { key: 'retail', label: 'Retail', route: 'RETAIL', path: '/solutions/retail', code: 'R' },
  { key: 'construction', label: 'Construction', route: 'CONSTRUCTION', path: '/solutions/construction', code: 'C' },
  { key: 'fmcg', label: 'FMCG', route: 'FMCG', path: '/solutions/fmcg', code: 'F' },
  { key: 'automotive', label: 'Automotive', route: 'AUTOMOTIVE', path: '/solutions/automotive', code: 'A' },
  { key: 'hospitality', label: 'Hospitality', route: 'HOSPITALITY', path: '/solutions/hospitality', code: 'HOSP' },
] as const;

export type Industry = (typeof industries)[number];

export const homeSections = [
  ['H01', 'Hero'],
  ['H02', 'Illustrative output'],
  ['H03', 'Method'],
  ['H04', 'Industries'],
  ['H05', 'Evidence'],
  ['H06', 'Architecture'],
  ['H07', 'Engagement'],
  ['H08', 'About'],
] as const;

export const legalPages = {
  privacy: { route: 'PRIVACY', title: 'Privacy', sections: ['P01', 'P02', 'P03', 'P04'] },
  terms: { route: 'TERMS', title: 'Terms', sections: ['T01', 'T02', 'T03', 'T04'] },
};

export const redirects = [
  { from: '[Awaiting VAI redirect map: LEGACY_URL_01]', to: '/' },
  { from: '[Awaiting VAI redirect map: LEGACY_URL_02]', to: '/solutions' },
];

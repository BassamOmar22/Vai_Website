import type { ComponentType } from 'react';
import { AboutPage } from './pages/AboutPage';
import { ArchitectureGovernancePage } from './pages/ArchitectureGovernancePage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { IndustryPage } from './pages/IndustryPage';
import { LegalPage } from './pages/LegalPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { VaiInPracticePage } from './pages/VaiInPracticePage';
import { industries, legalPages, metadata } from './site/content';

export type Navigate = (href: string) => void;
export type PageProps = { navigate: Navigate };

export type SiteRoute = {
  path: string;
  label: string;
  component: ComponentType<PageProps>;
  metadata: {
    title: string;
    description: string;
  };
};

const industryRoutes = industries.map((industry) => ({
  path: industry.path,
  label: industry.label,
  component: ((props: PageProps) => <IndustryPage industry={industry} {...props} />) as ComponentType<PageProps>,
  metadata: metadata[industry.key],
}));

export const routes: SiteRoute[] = [
  { path: '/', label: 'Home', component: HomePage, metadata: metadata.home },
  { path: '/solutions', label: 'Solutions', component: SolutionsPage, metadata: metadata.solutions },
  ...industryRoutes,
  { path: '/vai-in-practice', label: 'VAI in Practice', component: VaiInPracticePage, metadata: metadata.vaiInPractice },
  {
    path: '/architecture-governance',
    label: 'Architecture & Governance',
    component: ArchitectureGovernancePage,
    metadata: metadata.architectureGovernance,
  },
  { path: '/about', label: 'About', component: AboutPage, metadata: metadata.about },
  { path: '/contact', label: 'Contact', component: ContactPage, metadata: metadata.contact },
  {
    path: '/privacy',
    label: 'Privacy',
    component: ((props: PageProps) => <LegalPage page={legalPages.privacy} {...props} />) as ComponentType<PageProps>,
    metadata: metadata.privacy,
  },
  {
    path: '/terms',
    label: 'Terms',
    component: ((props: PageProps) => <LegalPage page={legalPages.terms} {...props} />) as ComponentType<PageProps>,
    metadata: metadata.terms,
  },
  { path: '/thank-you', label: 'Thank you', component: ThankYouPage, metadata: metadata.thankYou },
];

export const navRoutes = routes.filter((route) =>
  ['/', '/solutions', '/vai-in-practice', '/architecture-governance', '/about', '/contact'].includes(route.path),
);

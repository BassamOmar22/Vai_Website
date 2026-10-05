import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';
import type { PageProps } from '../routes';
import { placeholder } from '../site/content';

type LegalPageConfig = {
  route: string;
  title: string;
  sections: string[];
};

export function LegalPage({ page }: PageProps & { page: LegalPageConfig }) {
  return (
    <ResponsiveContainer className="legal-layout">
      <section className="section" id={`${page.route.toLowerCase()}-hero`}>
        <SectionHeader
          body={placeholder(page.route, page.sections[0], 'BODY')}
          eyebrow={page.title}
          title={placeholder(page.route, page.sections[0], 'HEADING')}
        />
      </section>
      {page.sections.slice(1).map((section) => (
        <section className="legal-section" id={`${page.route.toLowerCase()}-${section.toLowerCase()}`} key={section}>
          <h2>{placeholder(page.route, section, 'HEADING')}</h2>
          <p>{placeholder(page.route, section, 'BODY')}</p>
        </section>
      ))}
    </ResponsiveContainer>
  );
}

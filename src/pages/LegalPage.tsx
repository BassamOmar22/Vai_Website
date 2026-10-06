import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';
import { SectionHeader } from '../components/shared/SectionHeader';

type LegalPageConfig = { title: string; intro: string; sections: { title: string; body: string }[] };

export function LegalPage({ page }: { page: LegalPageConfig }) {
  return <ResponsiveContainer className="legal-layout"><section className="section"><SectionHeader eyebrow={page.title} title={page.title} body={page.intro} /></section>{page.sections.map((section) => <section className="legal-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</ResponsiveContainer>;
}

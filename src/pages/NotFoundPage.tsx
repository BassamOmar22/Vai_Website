import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';

export function NotFoundPage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <ResponsiveContainer className="narrow-page">
      <section className="not-found" id="not-found">
        <p className="eyebrow">404</p>
        <h1>[Awaiting VAI master copy: 404 NF01 HEADING]</h1>
        <p>[Awaiting VAI master copy: 404 NF01 BODY]</p>
        <button className="button primary" onClick={() => navigate('/')} type="button">
          [Awaiting VAI master copy: 404 NF01 PRIMARY_CTA]
        </button>
      </section>
    </ResponsiveContainer>
  );
}

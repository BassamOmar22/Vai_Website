import { ResponsiveContainer } from '../components/shared/ResponsiveContainer';

export function NotFoundPage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <ResponsiveContainer className="narrow-page">
      <section className="not-found" id="not-found">
        <p className="eyebrow">404</p>
        <h1>This page is not available.</h1>
        <p>The page may have moved, or the address may be incorrect. Return to the VAI homepage or explore the solution areas.</p>
        <div className="button-row"><button className="button primary" onClick={() => navigate('/')} type="button">Return home</button><button className="button secondary dark" onClick={() => navigate('/solutions')} type="button">Explore solutions</button></div>
      </section>
    </ResponsiveContainer>
  );
}

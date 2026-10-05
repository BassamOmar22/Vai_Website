import { PageShell } from './components/layout/PageShell';
import { NotFoundPage } from './pages/NotFoundPage';
import { routes } from './routes';
import { trackPageView } from './utils/analytics';
import { useEffect, useMemo, useState } from 'react';

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname || '/';
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const route = useMemo(() => routes.find((item) => item.path === path), [path]);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    trackPageView(route?.path ?? path, route?.metadata.title ?? 'Not found');
  }, [path, route]);

  const navigate = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) return;
    window.history.pushState({}, '', href);
    setPath(normalizePath(href));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Page = route?.component ?? NotFoundPage;

  return (
    <PageShell activePath={route?.path ?? path} navigate={navigate} metadata={route?.metadata}>
      <Page navigate={navigate} />
    </PageShell>
  );
}

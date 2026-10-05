import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type PageShellProps = {
  activePath: string;
  children: ReactNode;
  navigate: (href: string) => void;
  metadata?: { title: string; description: string };
};

export function PageShell({ activePath, children, navigate, metadata }: PageShellProps) {
  if (metadata) {
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metadata.description);
  }

  return (
    <div className="site-shell">
      <Header activePath={activePath} navigate={navigate} />
      <main id="main-content">{children}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

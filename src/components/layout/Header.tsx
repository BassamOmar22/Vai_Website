import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navRoutes } from '../../routes';
import { VisuallyHidden } from '../a11y/VisuallyHidden';

type HeaderProps = {
  activePath: string;
  navigate: (href: string) => void;
};

export function Header({ activePath, navigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container header-inner">
        <button className="brand-mark" onClick={() => go('/')} type="button">
          VAI
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navRoutes.map((route) => (
            <button
              className={`${route.path === '/contact' ? 'nav-link nav-contact' : 'nav-link'} ${activePath === route.path || (route.path === '/solutions' && activePath.startsWith('/solutions/')) ? 'active' : ''}`}
              key={route.path}
              onClick={() => go(route.path)}
              type="button"
              aria-current={activePath === route.path ? 'page' : undefined}
            >
              {route.label}
            </button>
          ))}
        </nav>
        <button aria-controls="mobile-navigation" aria-expanded={open} className="icon-button mobile-menu-button" onClick={() => setOpen((value) => !value)} ref={menuButton} type="button">
          {open ? <X size={20} /> : <Menu size={20} />}
          <VisuallyHidden>{open ? 'Close navigation' : 'Open navigation'}</VisuallyHidden>
        </button>
      </div>
      <nav className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open} aria-label="Mobile navigation" id="mobile-navigation">
          {navRoutes.map((route) => (
            <button
              className={activePath === route.path || (route.path === '/solutions' && activePath.startsWith('/solutions/')) ? 'mobile-nav-link active' : 'mobile-nav-link'}
              key={route.path}
              onClick={() => go(route.path)}
              type="button"
              tabIndex={open ? 0 : -1}
              aria-current={activePath === route.path ? 'page' : undefined}
            >
              {route.label}
            </button>
          ))}
      </nav>
    </header>
  );
}

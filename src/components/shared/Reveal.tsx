import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const target = element.current;
    if (!target || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal ${entered ? 'is-visible' : ''} ${className}`} ref={element} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}

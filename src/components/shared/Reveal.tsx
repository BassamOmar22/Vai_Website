import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = element.current;
    if (!target || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal ${visible ? 'is-visible' : ''} ${className}`} ref={element} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

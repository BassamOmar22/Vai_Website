import { useEffect, useRef, useState } from 'react';

const storageKey = 'vai_decorative_motion_paused';

function storedPausePreference() {
  try { return window.localStorage.getItem(storageKey) === 'true'; } catch { return false; }
}

export function useDecorativeMotion() {
  const element = useRef<HTMLElement>(null);
  const [userPaused, setUserPaused] = useState(storedPausePreference);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [inView, setInView] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const sync = () => setDocumentVisible(!document.hidden);
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  useEffect(() => {
    const target = element.current;
    if (!target || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next = !userPaused;
    setUserPaused(next);
    try { window.localStorage.setItem(storageKey, String(next)); } catch { /* Session state remains available. */ }
  };

  return { element, motionEnabled: !userPaused && !reduced && inView && documentVisible, reduced, toggle, userPaused };
}

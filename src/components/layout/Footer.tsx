import { ArrowUpRight } from 'lucide-react';
import { industries, redirects } from '../../site/content';
import { ConsentControl } from '../shared/ConsentControl';

export function Footer({ navigate }: { navigate: (href: string) => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">VAI</div>
          <p className="footer-text">[Awaiting VAI master copy: GLOBAL FOOTER POSITIONING]</p>
          <ConsentControl />
        </div>
        <div>
          <h2 className="footer-heading">Solutions</h2>
          {industries.map((industry) => (
            <button className="footer-link" key={industry.path} onClick={() => navigate(industry.path)} type="button">
              {industry.label}
            </button>
          ))}
        </div>
        <div>
          <h2 className="footer-heading">Company</h2>
          {[
            ['/vai-in-practice', 'VAI in Practice'],
            ['/architecture-governance', 'Architecture & Governance'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
            ['/privacy', 'Privacy'],
            ['/terms', 'Terms'],
          ].map(([href, label]) => (
            <button className="footer-link" key={href} onClick={() => navigate(href)} type="button">
              {label}
            </button>
          ))}
        </div>
        <div>
          <h2 className="footer-heading">Launch Readiness</h2>
          {redirects.map((redirect) => (
            <p className="redirect-note" key={redirect.from}>
              {redirect.from} <ArrowUpRight size={14} /> {redirect.to}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}

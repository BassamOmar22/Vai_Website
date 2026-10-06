# VAI Website

This repository contains the working v1 implementation of the VAI website, based on the chat-derived VAI content and design brief. It is a Vite, React, and TypeScript single-page site with a premium burgundy visual system, sector-specific intelligence pages, a working enquiry journey, and consent-aware analytics hooks.

## What Is Included

- Full VAI working copy across home, solutions, industry, practice, architecture, governance, about, contact, privacy, terms, thank-you, and 404 pages.
- Industry routes for Retail, Construction, FMCG, Automotive, and Hospitality.
- Centralized content and metadata in `src/site/content.ts`.
- Runtime page titles and meta descriptions through the route registry and page shell.
- Reusable components for heroes, cards, architecture diagrams, CTAs, method steps, page headers, and responsive containers.
- Accessible contact form validation, loading, error, retry, local-demo confirmation, and thank-you states.
- Optional `VITE_CONTACT_ENDPOINT` support for a production contact backend.
- Consent-aware analytics events held behind a browser-local consent choice.
- Responsive desktop, tablet, and mobile layouts, including sticky navigation and animated mobile navigation.
- Visible keyboard focus styles, a skip link, semantic page landmarks, and reduced-motion support.

## Visual Design

The visual direction is restrained and premium: burgundy and deep-burgundy hero areas, warm off-white page surfaces, charcoal footer treatment, and sparing warm accents. Cards lift subtly on hover, architecture diagrams use quiet layered motion, and content sections reveal as they enter the viewport. All non-essential motion is reduced for visitors who enable `prefers-reduced-motion`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | VAI overview, method, industries, evidence, architecture, and engagement model |
| `/solutions` | Sector solution overview |
| `/solutions/retail` | Retail intelligence workflows |
| `/solutions/construction` | Construction intelligence workflows |
| `/solutions/fmcg` | FMCG intelligence workflows |
| `/solutions/automotive` | Automotive intelligence workflows |
| `/solutions/hospitality` | Hospitality intelligence workflows |
| `/vai-in-practice` | Evidence boundaries and practical application |
| `/architecture-governance` | Architecture, controls, and governance model |
| `/about` | VAI positioning and delivery ownership |
| `/contact` | Enquiry form and submission states |
| `/privacy` | General working privacy information |
| `/terms` | General working site terms |
| `/thank-you` | Enquiry confirmation |

Unknown routes render the VAI 404 page.

## Project Structure

```text
src/
  components/
    a11y/        Accessibility helpers
    contact/      Enquiry form and confirmation states
    layout/       Header, footer, and page shell
    shared/       Reusable visual and content components
  pages/          Route-level page composition
  site/content.ts Working content, route metadata, and industry content
  utils/          Analytics consent and contact submission helpers
  routes.tsx      Client-side route registry
  styles.css      Global responsive visual system and motion
```

## Local Development

```bash
npm install
npm run dev
```

Run checks with:

```bash
npm run lint
npm run build
```

## Contact and Analytics

The contact form submits to `VITE_CONTACT_ENDPOINT` when it is configured. Without that variable, it simulates a successful submission for local and staging demonstrations. No credentials or analytics IDs are committed to the project.

Anonymous analytics events are only dispatched after a visitor enables analytics through the footer consent control. Consent is stored in local storage.

## Production Review

The v1 content is ready as a working website baseline. Before public production launch, VAI should review and approve the final legal wording, contact endpoint, analytics provider configuration, hosting redirects, and any approved evidence or client-specific proof points.

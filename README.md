# VAI Website

This repository contains the working v1 implementation of the VAI website, based on the chat-derived VAI content and design brief. It is a Vite, React, and TypeScript single-page site with a premium burgundy visual system, sector-specific intelligence pages, a working enquiry journey, and consent-aware analytics hooks.

## What Is Included

- Full VAI working copy across home, solutions, industry, practice, architecture, governance, about, contact, privacy, terms, thank-you, and 404 pages.
- Industry routes for Retail, Construction, FMCG, Automotive, and Hospitality.
- Centralized content and metadata in `src/site/content.ts`.
- Runtime page titles and meta descriptions through the route registry and page shell.
- Reusable components for heroes, cards, architecture diagrams, CTAs, method steps, page headers, and responsive containers.
- Accessible contact form validation, loading, error, retry, and provider-confirmed enquiry/thank-you states.
- Server-side Resend forwarding to `kamal@vaisolutions.ai`, with optional `VITE_CONTACT_ENDPOINT` override.
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

The contact form posts to `/api/contact` by default. The server sends enquiries through Resend from `VAI Website <omar@vaisolutions.ai>` to **kamal@vaisolutions.ai**, with the visitor's address as **Reply-To**. All submitted contact fields and a stable reference are included in the plain-text message. A confirmation appears only after Resend accepts the email; this is acceptance for delivery, not proof of inbox delivery. There is no simulated-success fallback.

### Resend setup

1. Add and verify `vaisolutions.ai` in [Resend Domains](https://resend.com/domains), using the DNS records Resend provides. Only sending verification is needed; do not replace the company's existing inbound mail records. Omar's existing address can be used after the sending domain is verified.
2. Create a key in [Resend API Keys](https://resend.com/api-keys) with **Sending access**, restricted to the verified domain.
3. Copy `.env.example` to `.env` and set `RESEND_API_KEY` there. Keep it server-only: never use a `VITE_` prefix or commit the key. `RESEND_FROM_EMAIL` defaults to the approved `omar@vaisolutions.ai`. The recipient is fixed in server code and cannot be supplied by a browser request.

### Required DNS records for vaisolutions.ai

Checked against the Resend account on 2026-10-31. The API key is valid, but the domain is pending verification. Public lookups did not find these records. Nameservers are `ns17.domaincontrol.com` and `ns18.domaincontrol.com` (GoDaddy).

In the DNS management page for `vaisolutions.ai`, add the following host names. These are additional sending-verification records; leave existing website and inbound email records unchanged. Use the default TTL.

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| TXT | `resend._domainkey` | The complete public DKIM value below |
| CNAME | `rsend` | `rsend-apne1.forge.rmta.net` |
| CNAME | `send` | `send.forge.rmta.net` |

TXT value for `resend._domainkey` (paste as one line):

```text
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGn/+OXFgoCVQts8B+vcXoS/sUIFtwA5Vms38EEVo3wAvxX6etywe9vc9TuNub4IFHHPOHTdtAWGSYm3ZU/GEINOsO5iGJlux025e05CqQokT0oPr+yI3P20mGHWKI4tKX9vMuU0hTLVS7YVCikk7PLJksm46PuB/bGNBxhVRpiwIDAQAB
```

Resend verification has been requested. After publishing the records, open [Resend Domains](https://resend.com/domains), select `vaisolutions.ai`, and check that verification becomes **Verified**. Then submit a real enquiry and check Kamal's inbox. These DNS values are public verification records, not the API key. If the domain is recreated in Resend, use the new records shown in its dashboard instead.

### Run locally (Node.js 22.9+)

Start the contact server in one terminal:

```bash
npm run dev:server
```

Start Vite in another terminal:

```bash
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

Vite forwards `/api/contact` to the server at `http://127.0.0.1:3001`. The example `CONTACT_ORIGIN` matches `http://127.0.0.1:5174`; update it if using a different frontend origin. Without a configured API key, real submissions return an error instead of displaying a false confirmation.

### Production

```bash
npm run build
npm start
```

The included Node server serves both `dist/` (including SPA routes) and `/api/contact`. Set `RESEND_API_KEY`, `CONTACT_ORIGIN` to the exact HTTPS website origin, and the hosting platform's `PORT`/`HOST` (typically `HOST=0.0.0.0`). Hosting only the static `dist/` directory or running `vite preview` does not provide the email endpoint. The deployment must run this Node server, route `/api/contact` to it, or adapt the handler to the selected hosting platform's serverless runtime. `VITE_CONTACT_ENDPOINT` may point to an external deployment; allow the frontend's exact origin with `CONTACT_ORIGIN` on that backend. The existing form and contact confirmation behavior remain unchanged.

The endpoint validates fields and consent, bounds request size, and limits requests to five attempts per client per ten minutes. Limits are held per Node process; multi-instance hosting needs a shared limiter or an edge-level limit. Forwarded IP headers are ignored by default. Set `CONTACT_TRUST_PROXY=true` only behind a trusted proxy that overwrites `X-Forwarded-For`. Stable submission IDs are sent as Resend idempotency keys, so retries of the same failed attempt do not send duplicate emails within Resend's retention window.

Run `npm run test:contact` for client, endpoint, validation, retry, failure, and HTTP integration tests. Tests mock Resend and never send real email. After configuring credentials/domain and deployment, submit one real enquiry and verify it in Resend and Kamal's inbox before launch.

Anonymous analytics events are only dispatched after a visitor enables analytics through the footer consent control. Consent is stored in local storage.

## Production Review

The v1 content is ready as a working website baseline. Before public production launch, VAI should review and approve the final legal wording, contact endpoint, analytics provider configuration, hosting redirects, and any approved evidence or client-specific proof points.

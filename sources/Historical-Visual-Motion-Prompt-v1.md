# VAI - visual refinement and controlled motion pass

Work inside the existing VAI website repository. Implement this pass, validate it in the browser, and commit and push the changes to a review branch on the connected GitHub repository. Do not stop after describing a plan unless an actual access, permission, or source conflict blocks safe work.

This is a presentation and motion refinement, NOT a rebuild, content rewrite, positioning exercise, or production launch.

## 1. Scope and source boundaries

Read this entire prompt, the attached screenshot review, and SITE-VISUAL-GUIDE.md before editing. Inspect the actual repository and screenshots. Do not rely only on the written guide.

The historical founder-chat excerpt confirms a burgundy direction, five industries, a reported 14-route/110-section handoff, commercial and technical balance, evidence boundaries, governance, enquiry saving, consent, accessibility, and lightweight motion. It does not contain the original complete master copy or original motion/design files.

The current website text was subsequently drafted and implemented during this project. Preserve it for this visual pass, but do not label it recovered verbatim from, or fully approved by, the founder. Missing historical source files do not block this pass. Do not recreate public 'Awaiting...' placeholders or fabricate missing original sections to reach 110.

Priority for this task:
1. This request's explicit preservation boundaries and visual-only scope.
2. The current repository as the implementation and working-content baseline.
3. The supplied screenshots and visual guide as presentation references, with the capture limitations below.
4. The new design and motion proposals in this prompt.

This prompt supersedes earlier instructions to rewrite copy or broadly add floating/glowing effects. Preserve any higher-level repository safety instructions. If an original founder artifact happens to be present and conflicts with current content, document the conflict; do not silently reconcile it during this pass.

### Preserve exactly

- Vite, React, TypeScript, npm, existing route registry, build/deployment conventions, and reusable component approach, unless inspection shows these have since changed. In that case preserve the actual stack.
- Every current route, current page/section order, existing anchor and section IDs, headings, body text, industry names, capability names, evidence qualifiers, diagram labels, CTA labels and destinations, and SEO text.
- All existing content, including conditional Construction capability blocks and Hospitality's distinct service workflow. Do not assume those blocks are absent merely because the screenshots do not show them.
- Form fields, names, required/optional flags, option values, validation, consent, API contract, submission/retry semantics, analytics gating, redirects, and confirmation logic.
- Legal wording. Flag concerns separately rather than changing legal text.

Allowed changes: presentation wrappers, CSS layout, typography scale, spacing, component presentation props, decorative SVG/CSS, accessible motion controls, and motion-specific tests. Minimal new utility text such as 'Pause motion' and 'Resume motion' is allowed. No new marketing sections, business claims, dummy dashboards, numbers, client logos, testimonials, integrations, or compliance badges.

## 2. Baseline and repository safety

Inspect git status, current branch, recent commits, remotes, repository instructions, package.json, scripts, and existing tests before changing files. Preserve unrelated user changes; do not reset, stash, delete, or stage them automatically.

Read the current versions of:
- src/App.tsx, src/routes.tsx, src/site/content.ts, src/styles.css.
- Shared layout, header, footer, hero, cards, method, architecture, and motion helpers.
- All route components and the contact/analytics utilities.
- README and existing screenshot/test tooling.

Do not assume filenames beyond those actually present.

Create an internal baseline of route paths, section IDs and order, normalized visible copy, CTA destinations, diagram labels, form contract, metadata, and central content-file hashes. Use this as a before/after content-preservation test. Exclude only new motion-control/accessibility utility labels and genuinely variable state such as real enquiry references; document exclusions. Preserve existing role and capability wording byte-for-byte wherever practical.

Use existing components instead of building a parallel site. Do not install a large animation library or change the router/framework for this task. Prefer existing dependencies, CSS, SVG, and small React helpers.

## 3. First investigate the screenshot/capture anomaly

The archive has 14 PNGs. Thirteen are 1425 px wide; thank-you.png is 1440 px wide. In these image files the visible site occupies approximately the leftmost 840 px, not the whole capture width. thank-you.png shows a scrollbar near x=830 inside a smaller rendered region. Several long captures contain large blank areas below the first one or two sections; footer content is absent or clipped in many of them.

These are observed image properties, NOT proof of a specific CSS or content bug. Plausible explanations include an embedded preview, capture of a parent rather than the actual app, a width-constrained app shell, scroll-container clipping, or reveal logic that has not run.

Before visual styling:
1. Run the app using its existing scripts and open its actual app URL directly as a top-level browser page, not only in a VS Code/embedded preview. Do not guess a port; use the server output.
2. Record the actual URL, window.innerWidth/innerHeight, document client width, device pixel ratio, root bounding box, document scroll dimensions, and relevant overflow ancestors. Inspect frames and the real scrolling element.
3. Capture Home, Retail, Contact, and Thank You at an actual 1440 x 1000 viewport and 100% browser zoom.
4. Compare the direct app with the embedded preview, if available. If only the preview/capture is constrained, fix the capture workflow, not the website CSS.
5. If the app itself is constrained, locate the actual cause in html/body/#root/PageShell/container rules, flex sizing, fixed widths/heights, max-width, overflow, or starter styles. Correct the root cause. Do not blindly paste a universal reset or use width:100vw to disguise it.
6. Scroll every route to its actual footer. Check whether supposedly blank sections exist, have nonzero geometry, and are readable. Check inherited opacity, visibility, clipping, transforms, reveal state, observer root, and errors.
7. If IntersectionObserver is used, verify its root and thresholds against the actual scroll container. Do not require a tall section to become mostly visible before it can be read.
8. Never treat a full-page PNG alone as proof that every nested scroll container or reveal state has been exercised.

Acceptance for this phase: determine whether the issue is in the app, the capture, or both; give evidence; restore ordinary readable scrolling where needed. Do not delete sections, add filler, or crop away blank regions to pass a screenshot check.

## 4. Locked brand palette and layout direction

Preserve these current visual-guide values as the baseline for this pass. They are current implementation values, not a claim that the original founder file contained these exact hex codes:
- Page background: #fbf8f6.
- Card surface: #fffdfb.
- Burgundy: #541827.
- Deep wine: #3b101b.
- Warm accent: #9b6d4d.
- Main text: #231b1c.
- Existing warm-gray borders and dark footer tokens.

Use the current font stack. Do not add a font network dependency or rebrand the wordmark. Retain the light editorial site, dark burgundy marketing heroes, warm cards, and dark footer. No neon, rainbow gradients, stock robot imagery, particles, black dashboard redesign, giant blur blobs, or aggressive glass effects.

Proposed layout targets, to tune against the actual browser rather than apply blindly:
- Full-width shell and section backgrounds, with a centered marketing content width around 1200-1240 px on wide screens.
- Fluid gutters of approximately 20-40 px where space is limited; no lopsided empty desktop canvas.
- A real two-column marketing hero when there is sufficient width, roughly 52/48 text/visual with a 40-64 px gap. Stack logically when needed, around 1000-1100 px or according to measured content fit.
- Home and industry heroes use intrinsic height, not forced full-screen panels. A desktop hero often fits roughly 560-680 px including padding; do not clip long headings to meet that number.
- Contact and About may use a compact hero variant while retaining every word, CTA, and existing diagram label.
- Main headings use fluid sizing, typically 52-68 px at wide desktop and 34-42 px on narrow phones, adjusted for real line lengths. Retain readable body sizes, approximately 16-18 px and 1.55-1.75 line height.
- Major section padding around 72-96 px desktop and 44-64 px mobile. Use intentional variations instead of equal-height blocks or empty spacer divs.
- Keep card corners modest, around the existing 6-10 px family. Avoid turning every element into a pill.
- Keep reading widths controlled; legal copy should be narrower and centered within the full-width shell.

Retain all section order and content grouping. Better layout within a section is allowed; moving, merging, omitting, or hiding sections is not.

## 5. Signature idea: the existing operating model gains a restrained signal trace

The hero already has labeled tiles. Improve that component rather than replace it with a new product story.

Keep the exact labels, source order, and established meaning for each page. Reduce the visual weight of opaque tile fills, make frames and alignment crisper, and add a restrained decorative trace along the model's existing frame or supported connections. Keep titles and body text stationary.

- One small warm highlight travels along a thin path and settles. The rest of the diagram stays still.
- Use a slow 12-16 second cycle with roughly 3-4 seconds of visible travel and a long quiet rest, not a constantly buzzing network.
- The entire graphic must still make sense when static.
- Only animate a connection or directional relationship when the existing content supports it. If it does not, use a non-directional perimeter trace instead. Do not invent architecture topology or a sequential business process.
- Do not add 'live', throughput, uptime, percentage, completion, customer-result, or other data-status claims.
- Use a decorative SVG layer with pointer-events:none. Keep existing meaningful labels as accessible text. Avoid duplicate announcements or turning noninteractive tiles into buttons.
- No continuous bobbing of every node and no moving text. Avoid large-area animated blur or background-position effects.
- The hero diagram is the main ambient-motion feature. Other sections should generally use finite entry/interaction effects, not additional continuous loops.

The signal motif is a new presentation proposal, not a recovered founder-approved animation specification.

## 6. Motion system: visible, controlled, and readable

Create or adapt one small shared motion system, not an independent observer and infinite loop in every card.

Motion rules:
- Link/button feedback: 160-220 ms. Arrow shift about 2-3 px; no moving click target.
- Interactive card hover: at most 2-3 px lift, a subtle border change, and modest shadow; equivalent focus-visible treatment without requiring hover.
- Section/decorative entry: 360-500 ms, at most 8-12 px travel. Small grid stagger around 50-70 ms, with total additional delay capped near 200 ms.
- Process-rail or architecture trace: one brief 1-2 second accent pass when first encountered; then static.
- Ambient hero trace: the restrained 12-16 second cycle above, with user control.
- One focal motion area at a time. No whole-page fades, typing headlines, scroll-jacking, parallax, cursor followers, magnetic buttons, carousels, or forced scroll snapping.

### Visibility is the default

Essential text, headings, links, forms, errors, and the footer must render in their final readable state independently of animation. Remove legacy patterns that leave whole sections at opacity:0 or visibility:hidden awaiting an observer.

Prefer animating decorative layers. If a content wrapper uses an entry transform, its baseline must still be readable with opacity:1, and any animation must be finite and fail open. Reveal once; never hide content again on scroll exit. Do not animate hero heading opacity or delay its availability.

If motion JS, IntersectionObserver, or storage fails, the already-rendered React content remains readable. This is not a request to convert a client-rendered Vite app to server rendering or claim the entire SPA works with all JavaScript disabled. Test motion-subsystem failure separately from app boot failure.

Avoid nesting multiple entry transforms on the same content. Clean up observers, media-query listeners, visibility handlers, and animations on unmount. Account for development Strict Mode. Do not trigger React state updates on every animation frame.

### Pause and reduced motion

Add a small, visible, keyboard-accessible native button near the looping hero visual: 'Pause motion' / 'Resume motion'. Its action must work immediately, not only while focused or hovered. Apply it to decorative site motion and preserve the choice for this browser when storage is available. Keep it separate from analytics consent; do not create tracking identifiers.

Honor prefers-reduced-motion in both CSS and JS, including changes while the page is open. Device reduced-motion preference wins over autoplay. In reduced-motion mode use a static readable composition, with no decorative translation, pulsing, or smooth scrolling. Do not force resume over a device preference.

Pause decorative animation offscreen and while the document is hidden. Resuming visibility must not override a user pause. Freezing/stopping must not leave text dimmed or content halfway offscreen.

If the pause control cannot be implemented reliably, use one finite animation of no more than five seconds and then stop; do not ship an unpausable loop. Scope reduced-motion rules to this motion system rather than indiscriminately breaking functional progress indicators.

## 7. Apply the design per page without changing its content

### Home: preserve H01-H08 and their existing separation

- H01: use the balanced split hero and refined operating-model trace. Copy and CTAs remain unchanged and immediately readable.
- H02 illustrative output: retain the three existing cards. Add small abstract line-work derived from each current theme, if useful. No fake charts, metrics, dashboards, or new explanatory claims.
- H03 method: retain all steps and their text in order. Connect existing numbered markers with a fine rail on desktop and a vertical rail on mobile. A decorative one-time accent can pass along it; never imply actual completion status.
- H04 industries: retain all five labels, summaries, and links. Use equal-importance cards in a centered 3+2 desktop layout, 2-column tablet where appropriate, and 1-column mobile. No hidden sectors or horizontal carousel.
- H05 evidence: use more editorial spacing, a restrained warm side-rule, and clear hierarchy within the existing cards. Do not turn evidence-boundary text into testimonials or invent numerical proof.
- H06 architecture: improve alignment and reading order of the existing layers. Add a brief decorative trace only where semantics permit. Keep every existing layer visible.
- H07 engagement: retain Focus/Build/Review/Scale and all supporting text. Reuse the method-rail treatment without another endless loop.
- H08 existing closing/About invitation: retain its copy and destinations; refine the current warm CTA surface, border, spacing, and button feedback. Do not merge it away.

### Solutions

Keep the current hero, five industry cards, and final CTA. Apply the same equal-importance card system. Do not add search, filters, tabs, or an extra comparison table.

### Five industry pages

Use the existing shared IndustryPage template. All five receive consistent layout/motion upgrades through that component, not five diverging page implementations.

Use the current sector diagram labels and existing semantic groupings. Subtle decorative line geometry may differ by sector but must not introduce new product capabilities.

Retail remains the visual reference. Preserve both Construction public-capability blocks if present; if missing relative to the project brief, record the discrepancy without inventing their original names. Preserve Hospitality's actual service-workflow wording and structure; being distinct does not mean it must have a different number of steps.

### VAI in Practice

Preserve the evidence and practical-application sections. Emphasize readable evidence panels and one-time process-rail detail. No animated results, score counters, synthetic customer stories, or fake product screenshots.

### Architecture & Governance

Make the existing architecture composition the focal visual, using its real labels and order. Principle/control cards remain calm. Do not add a padlock/check/certification badge that suggests verified security or compliance.

### About

Use the compact hero variant and calm editorial card treatment. Preserve current wording and section order for this pass. Do not turn internal delivery roles into new staff biographies, portraits, or public credentials. Record the existing delivery-ownership copy as a separate business-approval item.

### Contact

Reduce unnecessary hero dominance through spacing/composition only, retaining the existing diagram and copy. Let the form appear sooner. Use clear focus states and restrained real-state feedback. Do not animate away errors, shift fields while typing, auto-select consent, alter option values, or simulate successful delivery for visual effect.

### Privacy and Terms

Keep all current text and headings. Improve column width, spacing, footer readability, and focus states only. No entry animations or decorative loops in legal content. The existing 'Review before launch' text remains an approval flag, not evidence of final legal approval.

### Thank You and 404

Keep these quiet and readable. A check icon may draw once, under 400 ms, only for a genuine existing success state. No confetti, invented references, or new success behavior. Do not make a direct visit imply a new enquiry was received. If that problem already exists, document it as a separate functional defect rather than silently changing the form contract.

## 8. Shared header, footer, and interaction refinements

The screenshots show Contact as a consistently dark CTA and other active links with a lighter treatment. Do not assume the Contact CTA is a bug. Inspect actual routing and preserve the distinction between CTA emphasis and current-page state.

- Keep six primary links and their destinations.
- Use aria-current appropriately for the actual page, with a visually clear Solutions section state on industry routes without falsely claiming /solutions is the current exact URL.
- Keep the sticky header compact; a subtle divider/shadow after scroll is enough. Do not add a second navigation or duplicate CTA.
- Mobile menu: smooth short transition, correct expanded state, keyboard access, Escape behavior and focus return, and no focusable links trapped in a visually closed menu.
- Static capability cards are not buttons. Do not add pointer cursors, tabindex, or fake click affordances to noninteractive content.
- Footer: preserve the dark background and link groups. Correct visibly weak text contrast with suitable existing light-surface tokens, and verify computed contrast in the live app. Do not assume every muted brown token works on dark backgrounds.
- Preserve the current consent behavior and wording; no new claims of anonymization or privacy compliance.

## 9. Validation and evidence, not just a successful build

Run the existing lint/build/type-check/test commands that are actually available. Do not invent scripts, claim skipped tests passed, or install a second package manager.

Browser QA:
- Cover all 14 routes plus 404 at actual top-level desktop and mobile viewports. Target 1440x1000 and 390x844. Spot-check narrow 360 px, tablet 768/1024 px, and wide 1920 px layouts.
- Check direct route entry, refresh, back/forward, anchor navigation, navigation active states, mobile menu, footer links, and keyboard navigation.
- Check all sections are visibly readable before/after scroll, under reduced motion, and with the motion subsystem unavailable after app boot.
- Verify no horizontal overflow, clipped heading, overlapping card, displaced click target, focus hidden by the sticky header, or footer cut-off in the real document.
- Measure normal-text contrast against 4.5:1 and large-text contrast against 3:1 where applicable; also check control boundaries and visible focus.
- Check pause/resume, device preference changes, hidden-tab behavior, offscreen pauses, and route changes.
- Regression-test form validation/error/submitting/success behavior with approved local test or mock inputs; do not send unsolicited real enquiries.
- Preserve consent gating. Do not equate custom analytics events with a configured production analytics provider.
- Compare normalized content and route/CTA/form baselines. Report any difference; unauthorized public-copy changes are a failure.

Capture evidence from the actual app URL, not the preview container:
1. Normal-motion viewport screenshots plus a short recording of Home and one industry page, including pause/resume and a scroll. A static PNG does not prove motion works.
2. Full-page desktop/mobile screenshots for every route in a deterministic reduced-motion/static state, after checking the actual content and footer. Prefer the existing browser/test tooling; use Playwright if already available or add it only as a justified dev dependency.
3. A regular-motion scroll-through check separate from those deterministic screenshots. Do not inject force-visible CSS as the only evidence that production visibility works.
4. Record viewport dimensions, actual URL, browser, commit/revision, and any capture limitations.

Keep screenshots and recordings as QA artifacts, not files served in the public website bundle. Avoid committing large recordings unless repository policy requires it.

Report bundle-size/performance differences where measurement is available. Do not claim a performance score or accessibility certification from lint/build. No new runtime motion dependency by default; no 3D/video background, endless per-frame state updates, or animation-driven layout shifts.

## 10. Separate existing approval/release risks from this pass

Create or update an internal content/release review register. Do not silently rewrite these items:
- Current working copy is not a verified verbatim restoration of the founder's complete 110-section master.
- The About delivery-ownership text describes the website build team; public presentation needs business approval.
- Evidence panels include website-production instructions such as 'The website should not rely on...'; keep during this pass, flag for editorial approval.
- Privacy/Terms include 'Review before launch'; do not mark them legally complete.
- The earlier README described simulated contact confirmation without a configured endpoint. Inspect current behavior; if still present, identify it as a production blocker. A visual success animation or generic VAI-ENQUIRY reference does not demonstrate durable receipt.
- Real enquiry persistence, duplicate-safe retry, provider configuration, and final production readiness require functional evidence, not screenshots.

These items do not block a visual review branch. They do block an unsupported claim that the website is ready for public launch.

## 11. Implementation sequence

A. Snapshot current content/contracts and diagnose direct-browser/capture/visibility issues.
B. Establish reliable layout and readable static fallbacks.
C. Refine shared tokens, shell, header/footer, Home, and Retail.
D. Check those pages in desktop/mobile, normal/reduced motion, and paused state. Correct shared issues before replication.
E. Apply the shared improvements to the remaining routes without changing content.
F. Run content-preservation, functional, visual, accessibility, motion, and build checks.
G. Update handoff/readme honestly, commit, and push to a review branch.

Proceed through these stages in one task where practical. If browser tooling or permissions are unavailable, finish safe code work and explicitly report which visual checks remain unverified. Never claim screenshot comparison or motion testing you did not perform.

## 12. GitHub delivery

The user previously authorized committing and pushing project work. For this pass, push to a review branch such as vai-visual-motion-refinement, or a unique suffixed name if needed. Preserve the current history and unrelated work. Do not push to a production-connected main/master branch, merge, or trigger a public release as part of this visual pass.

Verify the intended remote and branch. Stage only task changes, inspect the staged diff for accidental copy changes/secrets, run validation, commit with a clear message such as 'Refine VAI visual system and controlled motion', and push the review branch to the connected origin using normal non-force Git operations. Do not change remote configuration or bypass permission checks.

If authentication, sandbox approval, branch policy, or network access prevents pushing, report the exact blocker and the intended push command. Do not claim that VS Code authorization automatically grants every execution environment GitHub access. Do not print credentials or token-bearing remote URLs.

Final handoff must include:
- Screenshot anomaly diagnosis, evidence, and any remaining uncertainty.
- Actual files/components changed and visual/motion changes made.
- Content/route/section/CTA/form preservation results.
- Commands run and their actual results; untested items explicitly identified.
- Desktop/mobile screenshots and motion recording locations, where produced.
- Reduced-motion, pause/resume, footer visibility, and contrast-check results.
- Existing business/legal/backend approval flags kept separate from visual defects.
- Branch, commit, sanitized remote, and confirmed push status.

Begin by inspecting the repository and the actual rendered app, then implement this visual-only refinement. Do not rewrite the site copy or rebuild the project.

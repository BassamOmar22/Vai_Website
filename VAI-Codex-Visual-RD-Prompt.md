# VAI Codex implementation brief - content-locked visual R&D
Version 2.0 | 2026-10-09 | Work in the existing VAI website repository

## 0. Task mode and first action

This brief contains the complete audit and implementation plan. Default mode is AUDIT_AND_PLAN. Read it fully, inspect the actual repository and rendered application, produce the audit and scoped recommendation, then STOP before modifying application code or installing dependencies. Documentation/baseline artifacts may be created in the existing documentation/test-artifact convention without overwriting existing work. Do not commit or push during the audit-only phase.

Continue to implementation only when Bassam authorizes IMPLEMENT_BASELINE. The bounded 2D baseline may then proceed through all implementation and QA steps without repeated requests for cosmetic decisions. RUN_SPATIAL_EXPERIMENT separately authorizes the isolated optional spatial comparison, not public deployment. A new engine dependency, router change, business-content change or backend change is not automatically authorized by either mode.

This is a refinement of an existing site, not a new site, content-generation task, production launch, or recovery of the founder's unavailable exact master copy. The advanced visual concepts are proposals until approved. No supplied screenshot or previous prompt proves that a feature is implemented or approved.

Read in order:
1. Repository instructions, including applicable AGENTS.md and Readme-Bassam.md.
2. This brief and Bassam's latest explicit task.
3. VAI-Frontend-Design-Master.md, particularly its normalized sections before Appendix A.
4. VAI-Design-Decision-Register.json and VAI-Design-Comparison-Matrix.md.
5. The historical visual guide, screenshot review and original PNGs in this pack.
6. VAI-Content-Review-Requests.md and VAI-Research-References.md.

Historical instructions to generate marketing copy, wait for unavailable master-copy files, rebuild the stack, or add floating effects everywhere are not active instructions for this task. Preserve the current website's content. Do not reintroduce 'Awaiting VAI' or lorem ipsum.

## 1. Non-negotiable content and functionality lock

Treat current website source content as authoritative for this visual task. Preserve all existing headings, body copy, product/industry/capability descriptions, numbers, names, evidence qualifiers, diagram labels, CTA labels/destinations, legal wording, metadata, URLs, anchors, section IDs and reading order.

Do not move a qualifier away from a claim, create a hierarchy by scaling one industry disproportionately, collapse currently visible content into a tab/carousel, or change the semantic grouping of information. Unchanged text does not by itself prove unchanged meaning.

The owner master describes VAI as decision intelligence and gives the reference sequence Data -> Signal -> Investigation -> Simulation -> Governed Decision -> Human Action. This is background context, NOT permission to replace the current diagram or wording with that sequence. Only animate labels, edges and ordered relationships evidenced in the actual current source. If a new diagram requires new labels, dependencies, outputs or causal relationships, document the proposal separately and wait for approval.

No invented dashboards, charts, data values, success rates, clients, testimonials, awards, certifications, integrations, AI outputs, live-feed indicators, security guarantees or simulated business outcomes. A decorative trace may move along an existing frame when no directional relationship is established; do not invent arrows.

Preserve form field names/types/requiredness/options, validation messages, consent semantics, submission endpoint and payload, retry/idempotency behavior, analytics/consent gating, storage keys, confirmation/reference logic, redirect behavior, route history and deployment conventions. Do not touch backend, APIs, database, notification logic or unrelated state management. Inspect those behaviors read-only for regression tests. A suspected existing issue belongs in the risk register, not an unauthorized fix.

Allowed visual changes after approval: CSS/layout within existing sections, presentation wrappers/props, typography sizing without copy edits, decorative SVG/CSS, motion-only state/helpers, static fallbacks, accessible visual controls, visual tests and documentation. Small operational labels such as Pause motion, Resume motion, Replay animation and Highlight [existing label] are allowed only where needed; record them in the content-test exception list. Do not add marketing copy under this exception.

## 2. Audit the actual source, branch and runtime

First inspect (do not assume):
- Working directory, git status --short, active branch, relevant recent history and remotes. Sanitize credentials from reported URLs.
- All applicable repository instructions and any uncommitted/untracked or teammate work. Do not reset, stash, force-checkout, clean, merge or stage unrelated files.
- package.json, lockfile, installed dependency versions, actual package manager and scripts.
- Actual application entry, routing, source of page content, shared layouts, typography/tokens, media assets, style conventions, existing motion helpers, existing optional renderer setup, tests and deployment configuration.
- README and Readme-Bassam.md if present, prior design notes and branch/commit references.

Historical candidate paths, to locate rather than assume: src/App.tsx, src/main.tsx, src/routes.tsx, src/site/content.ts, src/styles.css; shared HeroSection, ArchitectureDiagramBlock, MethodStep, cards, Header, Footer, ContactForm and ConsentControl; src/utils/contact.ts and src/utils/analytics.ts. Historical stack is Vite/React/TypeScript/npm. Preserve the actual stack if it has changed. Do not introduce React Router, Next.js, Tailwind or another framework to satisfy this brief.

Historical branch vai-visual-motion-refinement and commit 3741a29 are search clues, not proof of latest work. List which relevant alternatives are actually present and which have real approval evidence. Do not decide that a newer branch supersedes a teammate's experiment without evidence.

Run the app using its actual scripts. Open the app URL directly in a top-level browser, not only an embedded editor preview. Record viewport, browser, device scale/zoom, root geometry, document and nested scrolling dimensions. Recheck the historical narrow-left capture and blank lower areas. Determine whether each is an app defect, a capture artifact, a visibility/observer issue, or unresolved. Never delete blank-looking source sections or create filler to make a screenshot appear complete.

Read every actual route and inspect all below-fold sections. Historical route list is /, /solutions, five /solutions/<industry> routes, /vai-in-practice, /architecture-governance, /about, /contact, /privacy, /terms, /thank-you, plus 404 handling. Preserve current actual paths. Confirm Construction capability blocks and Hospitality's existing workflow without inventing missing content to meet an old 110-section claim.

If source or browser access is unavailable, report the specific missing capability; perform the available read-only audit and stop before claiming runtime findings. A lint/build result is not a visual, accessibility, backend or motion test.

## 3. Build a preservation baseline

Before any implementation, record a structured baseline per route:
- Ordered section/anchor IDs and semantic heading tree.
- Normalized visible text in DOM reading order, paragraph grouping and evidence qualifiers.
- Links with text, destinations, accessible names and relevant attributes.
- Diagram labels, grouping and explicit relationships.
- Form controls, option values, labels, messages, requiredness, endpoint/payload contract and consent behavior.
- Page titles/descriptions, navigation behavior, focus restoration, history/back handling and existing redirect configuration.
- Hashes/diffs of centralized content and functional files.
- Representative rendered screenshots at known viewports, after scrolling through every section.

Exclude only documented dynamic values and approved new motion-control utility labels. Do not normalize away changed words, duplicate headings, missing paragraphs, removed qualifiers, changed links or reordered content. Keep a separate manual semantic review for diagrams and visual hierarchy.

Use mocked/intercepted requests for contact regression tests. Do not send real customer enquiries or enable analytics to test a cosmetic task. No secrets or enquiry content may appear in test artifacts.

## 4. Deliver the audit checkpoint before implementation

Write an audit entry in Readme-Bassam.md (append; create only if absent) and return:
- Evidence ledger: confirmed / reported / runtime verified / proposed / experimental / unknown.
- Actual routes, components, content files, stack/dependencies, branch and clean/dirty state.
- Which previous refinements already exist and should be reused.
- Width/scroll/visibility diagnosis with direct-browser evidence.
- Exact affected files for the proposed scope and protected files that will not be edited.
- Baseline content/function snapshot and test approach.
- Recommended default 2D direction, optional 3D alternatives, trade-offs and estimated costs.
- Any needed dependency or meaning-related approval, separately from visual choices.

In AUDIT_AND_PLAN, stop here. Do not mistake reading this brief for approval to run later stages.

## 5. Recommended visual result after IMPLEMENT_BASELINE approval

Internal direction: structured depth and purposeful motion. Retain a warm ivory editorial site, burgundy/wine visual emphasis, charcoal text, fine linework and restraint. Do not use the internal direction title as new website copy.

Verify and preserve current palette. Historical web values are #fbf8f6, #fffdfb, #541827, #3b101b, #9b6d4d and #231b1c. Presentation references #b7355f/#5b5b5b/#000000 are separate; do not replace website tokens with them without approval. Reuse current fonts. Do not fetch a new typeface or ship reference screenshots as site assets.

Improve composition first. Correct genuine viewport/root defects before decoration. Use an intrinsically sized, centered content region and logical responsive gutters, not width:100vw hacks. Retain section order and reading width. Home and industry hero text can sit beside the model at sufficient width; stack naturally on smaller screens. Do not force hero height or clip long headings to reach a visual target.

Give existing sections distinct treatment within the same system: illustrative-output panels remain panels; workflow steps gain a clear rail; industry links remain equal-priority cards; evidence stays editorial; architecture gets fine layers; closing CTAs gain considered spacing rather than new slogans.

## 6. Signature experiment A - precise operating-model illustration

Affected candidates: HeroSection and its existing diagram subcomponent; shared CSS/tokens; motion utility. Adapt actual filenames. Preserve labels and existing grouping.

Static base:
- Replace heavy-looking translucent block styling with crisp frames, subtle surface separation and modest depth, using existing elements.
- Keep every label in readable HTML or accessible source markup, visible at rest.
- Keep group sizes and visual emphasis faithful to the source; do not elevate an industry or imply an unapproved processing sequence.

2D motion:
- One warm trace follows an explicit existing path. Where none exists, it follows the outer frame only.
- Proposed finite motion: 2.4-3.2 seconds, starting after the component is ready and on screen; then completely still. Do not delay headline, body or CTA rendering to wait for it.
- Reuse an existing approved 12-16 second cycle only if inspection finds it and its pause behavior is intact. Otherwise prefer one-shot plus optional replay to a new infinite loop.
- Labels remain stationary. No flying headlines, spinner clouds, bobbing cards, typing, fake processing bars or simulated telemetry.
- On keyboard/touch interaction, emphasize an existing relationship only if the interaction has clear value. Decorative cards must not become fake buttons.
- Optional shallow CSS perspective is simulated depth, not a claim of real 3D. Pointer response, if tested, stays within roughly 2 degrees on geometry, never the text or hit target; disable on touch/coarse-pointer and reduced-motion modes.

Do not create both a new Reveal system and a parallel motion library when an existing helper can be safely refined.

## 7. Signature experiment B - reading-linked architecture focus

Affected candidates: ArchitectureDiagramBlock, ArchitectureGovernancePage and the existing Home architecture section. Preserve their position and content.

- Start with the complete static diagram.
- Map focus only to existing explanations/layers with explicit source relationships. Create no new summaries or dependencies.
- As the visitor naturally scrolls an existing explanation into its reading position, accentuate the corresponding model layer. Other labels remain fully readable; no low-contrast dimming.
- Keep all paragraphs in normal DOM flow. Do not replace the paragraph with successive slides or reveal one step at a time.
- On wide/tall screens, the existing diagram may remain sticky within that section only when this improves reading and fits without clipping. No custom smooth-scroll engine, scroll lock, pinned multiviewport sequence, added empty spacer, horizontal-scroll hijack or camera flight.
- On smaller/shorter viewports or reduced motion, use the complete flat model and normal document flow. Deep links and skip navigation must reach the intended content.
- Use native scroll/view timelines for decorative properties where supported, with feature guards. An existing animation library or a scoped observer can provide discrete accents when appropriate. Unsupported animation features fall back to static, not invisible.

Optional highlight controls must be real keyboard/touch-operable buttons with precise accessible names based on existing labels. They may highlight geometry without hiding text or changing business copy. No live-region announcement on every scroll tick.

## 8. Supporting motion - selective, not everywhere

Method/workflow rail: connect the current ordered steps with a fine decorative rail; trace it once or accentuate the current reading position. Keep existing numbers/text/order. Horizontal at sufficient width, vertical on mobile. No fake completion percentages or operational status.

Typography: retain the exact text, font and semantic heading. Compare a one-time 350-500 ms settle of a small visual offset (about 4-8 px maximum) with a static heading. Text is readable from first paint. Prefer animating an underline/rule to splitting a headline. Never letter-scramble, type a sentence over time, alter words, change relative emphasis or depend on a line-splitting library. Do not duplicate accessible headings or break copy/paste/search.

Section boundaries: fine rule/field transitions within existing sections, decorative only. No opaque curtain covering content, continuous full-screen gradient, large parallax, or movement required to read a section. A small layered background experiment may be compared, not assumed superior.

Cards/links: 160-220 ms feedback on genuinely interactive elements; modest 2-3 px movement if beneficial. Preserve focus outline, hit area and navigation on first touch. Do not lift every static panel so that it falsely appears clickable.

Header: verify actual active state. A persistent Contact CTA is allowed; do not call it an active-route bug without evidence. Improve visual spacing/scroll polish only. Keep menu semantics, Escape behavior, focus, scrolling and navigation intact.

Footer: measure contrast rather than guess from compressed screenshots. Keep it largely static, complete and readable, including consent labels. Do not change consent behavior or label meaning.

Contact, Privacy, Terms and Thank You: quiet layouts. Only real focus/loading/confirmation feedback; do not turn these pages into a motion showcase. Do not change fake-versus-real enquiry handling in this task. Record any pre-existing persistence concern separately.

Optional route transition: only after inspecting a safe existing navigation lifecycle. Feature-detect native view transitions and animate a decorative model/region, not the whole interactive page. Keep URL/history/focus/scroll state immediate and correct. Do not add a router, force synchronous global rendering, remount forms or intercept links to obtain a transition. If the hook is not safe, defer this feature with a reason.

## 9. Optional spatial comparison after RUN_SPATIAL_EXPERIMENT approval

Preserve four alternatives for the same content and viewport:
A. Complete static 2D.
B. SVG/CSS 2D motion, with optional simulated depth.
C. A static rendered spatial composition, if producing an asset is justified and possible.
D. A real-time 3D model with bounded motion.

Do not label C implemented when no asset exists or D implemented because CSS looks three-dimensional. Do not generate placeholder 3D assets and claim they are official VAI designs.

Use an existing isolated component-preview/Storybook system if present. Otherwise use a development-only comparison entry or harness that is not a public production route and is excluded from production imports. Keep the website's public route inventory unchanged. No default production import of a renderer. Demonstrate exclusion in the build/network report.

If a renderer is not installed, first propose one dependency path and expected compressed cost; do not silently install several alternatives. Reuse compatible Three.js/R3F infrastructure when present. Evaluate the installed versions, not examples from an assumed latest version. No WebGPU migration or unrelated build-system replacement.

Spatial scene:
- Use only the layers/groups evidenced in the current content; fixed camera and modest perspective.
- Simple planes, crisp edges and restrained material contrast. No physics, postprocessing stack, bloom, expensive refraction, video textures or huge HDR environments by default.
- Animate separation/focus around an explicit current relationship; labels remain HTML outside canvas and stay aligned/readable. No 360-degree orbit or drag-to-read interaction.
- One canvas in the experiment; lazy-load on deliberate opt-in after the static base is already usable.
- Reserve exact layout space; loading/failure/context-loss uses the complete static fallback.
- Use demand rendering and bounded frame invalidation; show that rendering stops at rest and while offscreen/hidden. No permanent rAF/ticker that invalidates an otherwise idle scene.
- Clean up listeners, frame requests and renderer resources on unmount. Reuse geometries/materials when appropriate.
- Start around DPR 1-1.5 and adjust from measured quality/cost. Do not assume high desktop GPU performance or infer capability from device identity.
- Mobile/coarse-pointer/reduced-motion starts with the static/2D composition unless testing justifies an explicit opt-in. All meaningful information exists without canvas.

Comparison report: same content, viewport and load conditions; visual legibility, meaning fidelity, responsive behavior, user control, initial/optional bytes, LCP/CLS diagnostics, frame traces, idle rendering, failure behavior and maintenance cost. Recommend real 3D only if it improves explanation sufficiently to justify its cost. A polished 2D result can win.

## 10. Motion policy, cancellation and fallback

Create or refine one scoped motion policy, not several inconsistent global overrides. Preserve any existing user preference storage contract. New visual preference can remain in memory for the session; no analytics event or cookie is required.

Priority: reduced-motion/explicit disable -> static; explicit pause -> stopped/settled; hidden/offscreen -> suspended; otherwise requested animation. When a preference changes, cancel active motion and restore a complete layout immediately. Resume only permitted effects, without restarting all page entrances.

For relevant recurring motion, expose Pause motion / Resume motion with correct accessible state. A one-shot can offer Replay animation. A replay under reduced motion must not silently override the preference.

Every helper must define cleanup for component unmount, route change, resize, interruption and React development reinitialization. No leaked observers/listeners/GSAP contexts/frame loops, duplicate events or per-frame React state updates. Cache geometry sensibly; do not measure layout and write style repeatedly per node on every frame.

Prefer transform and opacity for animation. SVG line, clip, mask and filter changes need profiling; do not call them GPU-free or automatically fast. Avoid blanket will-change or global animation-duration hacks that leave interaction state machines waiting for events. Use components' explicit static states.

Essential content must never be permanently hidden by initial opacity/visibility or an observer threshold. Test optional motion module failure while the React application remains operational. Do not promise full no-JavaScript rendering for a client-only app or rearchitect it to SSR as part of this task.

## 11. Responsive and performance acceptance gates

Proposed targets below are review budgets, not measured facts or recovered founder requirements. Establish baseline and report actual deltas.

Responsive checks: actual desktop 1440x1000, narrow desktop/tablet 1024x768 and 768x1024, mobile 390x844 and 360x800, plus 200% zoom/reflow. Adjust to any established support matrix. Test fine/coarse input, keyboard, touch, short viewports, reduced motion and optional-capability failure. Do not scale a desktop scene down until labels become unreadable.

Default 2D budget: additional production JS <=25 KB gzip, CSS <=15 KB gzip, compressed decorative assets <=150 KB per affected route. Count incremental dependency cost accurately. Request approval before exceeding; do not hide costs in another bundle.

Optional engine: zero initial route-request bytes and excluded from default production entry. Proposed opt-in payload <=700 KB compressed including renderer/runtime/assets. If current technology cannot meet this, document actual cost and keep the variant unshipped pending approval. No obligatory new font/video downloads.

Target no attributable layout shift, no new animation-caused >50 ms long task in representative 2D traces, and smooth frames on the stated reference device. Use repeated like-for-like runs; do not imply universal 60 fps. At 60 Hz, a frame interval is about 16.7 ms, not an assurance that every device meets it.

Reference good Core Web Vitals: LCP <=2.5 s, INP <=200 ms and CLS <=0.1 at the relevant 75th percentile. These require appropriate evidence; lab measurements are not field INP or production conformance. Provisional comparison gate: investigate >10% median LCP regression across at least three identical lab runs, with hardware/network/config stated. Do not blame a pre-existing issue on this change or mask it by deleting content.

## 12. Implementation sequence after approval

1. Preserve the audit baseline and select a safe review branch from the confirmed current source.
2. Fix only proven visual/visibility defects within scope; do not fix a capture artifact by changing app layout.
3. Refine shared static composition and complete reduced-motion states.
4. Refine the existing motion policy/helpers rather than add a duplicate system.
5. Implement Home hero experiment A and Home/Architecture experiment B.
6. Compare static versus motion with identical content before proliferating the design.
7. Refine Retail as the industry reference, then apply shared improvements to the other four without new claims.
8. Refine Solutions, VAI in Practice, About and shared CTA/process elements inside existing section boundaries.
9. Apply only minimal presentation changes to Contact, legal, confirmation and footer.
10. Run optional spatial comparison only in its separately authorized lane.
11. Run semantic/content, functional, responsive, motion/failure and performance checks.
12. Document actual work in Readme-Bassam.md, update decisions and deliver evidence.
13. Commit and push only the approved implementation to a review branch; do not merge or launch.

## 13. Verification - do not finish at lint/build

Run actual repository validation scripts with the existing package manager. Historical commands are npm run lint and npm run build; inspect package.json for type checks/tests instead of inventing commands. Fix errors introduced by this change; report pre-existing issues separately.

Test content/semantics: compare the baseline data and protected-source diffs, plus manual diagram relationship/visual emphasis review. Every route and footer must remain readable. Confirm no newly hidden content, deleted CTA, changed metadata, renamed stage or reordered section.

Test behavior: navigation, menu keyboard/Escape, anchors, back/forward, focus, scrolling, contact validation and mocked success/error/retry, consent on/off, confirmation state. No real network writes or customer data in artifacts.

Test motion: first visit, scrolled entry, replay, pause/resume, reduced preference before/after mount, interrupted route change, resize, hidden/visible tab, offscreen, optional script load failure. For an engine variant also test renderer unavailable/context loss and static fallback. Verify idle means no scene renders/ticking work attributable to the optional visual.

Visual evidence: direct-browser before/after screenshots at identical viewport/zoom, scroll each route through footer, capture meaningful intermediate states and final static state, and a short recording showing signature motion, keyboard/touch interaction and reduced-motion behavior. Do not fake state by removing content or bypassing visibility bugs in screenshot mode. Distinguish forced-static comparison from normal-motion capture.

Use available browser/a11y tools. Record unrun checks as NOT RUN with reason; do not equate an automated check with full accessibility certification or a static image with implemented animation.

## 14. Documentation and Git delivery

Append to existing Readme-Bassam.md; do not overwrite it with the supplied template. Record objective, baseline commit/branch, exact changed files, reasons, components/categories, dependencies, content/meaning delta (must be zero except approved utility labels), motion state model, responsive/fallback behavior, commands/results, measurements, screenshots/recording locations, limitations, outstanding approvals and next action.

Maintain the master/decision/comparison documents under the existing docs convention, preferably docs/vai-design. Keep historical source/experiment material identifiable. Do not commit raw private chat transcripts/screenshots to a public repo merely because they are in the reference ZIP. Inspect repository visibility or omit those reference files; use concise private documentation without personal/secret material. Do not replace AGENTS.md; if appropriate, append a small pointer to the maintained master while respecting existing instructions.

Audit-only: no commit/push. After an authorized implementation: prior owner authorization covers committing/pushing validated review work, subject to actual environment permissions. Use a suitable review branch such as vai-frontend-motion-rd, without overwriting or merging an existing unrelated branch. Preserve teammate/uncommitted work. Stage specific task files; review the staged diff and sensitive files. Never force-push, amend others' commits, reset history, commit secrets/.env/node_modules or change production deployment configuration. Check whether branch pushes trigger preview/production automation; do not knowingly trigger a production release under a review-only task.

If authentication/protection/network permissions block a push, report the real error and exact remaining action; do not claim success. Confirm pushed commit/branch from remote evidence, not just a local commit message. No automatic PR merge or public launch.

## 15. Required handoff

Return: task mode; audited source/branch; verified versus unknown findings; exact component changes; comparison recommendation; content/meaning preservation results; protected functionality results; dependencies and compressed deltas; responsive/motion/fallback behavior; test commands and actual outcomes; evidence paths; Readme-Bassam.md update; approval items; branch/commit and confirmed push status when applicable.

Begin in AUDIT_AND_PLAN now. Understand the current application before modifying it. Do not rebuild it or rewrite its content.

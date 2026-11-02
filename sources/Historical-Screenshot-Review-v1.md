# VAI screenshot review and visual direction

## Basis and limits

Reviewed all 14 supplied PNGs and the entire supplied SITE-VISUAL-GUIDE.md. Also reread the available founder-handoff excerpt. This review does not include the repository, live website, mobile screenshots, a motion recording, or backend inspection.

The proposed design is a new refinement of the current site. It is not a recovered version of the founder's missing design/motion assets. Current working copy should be preserved in this pass, but it should not be described as a verbatim recovery of the original 110-section master.

## First finding: the captures do not demonstrate the complete desktop site

The guide says the captures use a 1440 x 1000 browser viewport and continue to the footer. The actual files do not consistently demonstrate that complete state:

- Thirteen files are 1425 px wide; Thank You is 1440 px wide.
- The visible site region occupies about the leftmost 840 px. There is a large blank region on the right.
- Thank You includes a scrollbar inside the approximately 840 px-wide rendered region, near x=830, and the region ends around y=584.
- Home is 5725 px tall but visibly shows its opening and illustrative-output section followed by a large blank lower region.
- Several other routes also show only the hero and first content section before blank space.
- Contact, Privacy, and Terms have readable lower content but footer groups are cut off in the supplied images.

The horizontal extent was also checked against image pixels; this is a property of the raster captures, NOT a measurement of the app's CSS viewport.

Possible causes include embedded-preview capture, a parent-page screenshot, root/container sizing, nested scrolling/clipping, or reveal-state timing. The images alone cannot choose among them. The correct next action is a direct top-level browser capture plus DOM/scroll measurements, not an assumed CSS fix.

## Per-image review

| Route | File and dimensions | Actually visible in supplied image | Not demonstrated by that image |
| --- | --- | --- | --- |
| Home | home.png, 1425 x 5725 | Header, burgundy hero, five-tile model, three illustrative-output cards | Later method/industry/evidence/architecture/engagement/closing sections and footer are not visibly readable in the blank lower area |
| Solutions | solutions.png, 1425 x 2295 | Hero, five industry cards arranged 2+2+1 in the narrow captured region | Complete final CTA/footer |
| Retail | retail.png, 1425 x 3280 | Hero, sector labels, three capability cards | Lower workflow, architecture fit, CTA, footer |
| Construction | construction.png, 1425 x 3475 | Hero, three capability cards | Two public-capability blocks cannot be verified from this capture; neither can lower workflow/architecture/CTA/footer |
| FMCG | fmcg.png, 1425 x 3378 | Hero and three capability cards | Lower workflow/architecture/CTA/footer |
| Automotive | automotive.png, 1425 x 3550 | Hero and sector model | Capability and later sections are not visibly readable below the hero |
| Hospitality | hospitality.png, 1425 x 3547 | Hero and three capability cards | Distinct service workflow and lower sections are not visually demonstrated |
| VAI in Practice | vai-in-practice.png, 1425 x 2661 | Hero and three evidence panels | Practical-application workflow, final CTA, footer |
| Architecture & Governance | architecture-governance.png, 1425 x 3546 | Hero and three governance-principle cards | Lower architecture model, controls, CTA, footer |
| About | about.png, 1425 x 3007 | Hero; a dark footer-edge strip appears near the bottom | Positioning/ownership sections described in the guide are not visibly readable in the blank middle |
| Contact | contact.png, 1425 x 2155 | Hero, labelled enquiry form, consent, submit button, beginning of dark footer | Complete footer; form behavior, dropdown option set, or submission persistence |
| Privacy | privacy.png, 1425 x 1824 | Legal copy including Review before launch; top part of footer | Entire footer, consent behavior, final legal approval |
| Terms | terms.png, 1425 x 1852 | Legal copy including Review before launch; top part of footer | Entire footer and final legal approval |
| Thank You | thank-you.png, 1440 x 1000 | Confirmation copy, generic VAI-ENQUIRY reference, Return home, internal scrollbar, dark footer edge | Complete footer or evidence that any real enquiry was saved |

A section not visibly readable in a capture is not thereby proven missing from the application.

## What to keep

Keep the ivory/burgundy/wine palette, wordmark, restrained editorial tone, existing text, route hierarchy, five-industry scope, evidence qualifiers, form semantics, and reusable React component model. The available founder excerpt specifically favors shared corrections before repeating layouts and cosmetic work within the agreed design system.

The current guide's exact palette is a useful implementation baseline, but only the broad burgundy direction is visible in the founder-handoff excerpt. Do not retroactively label every hex code or current paragraph founder-approved.

## What currently looks static: design judgments

1. The hero model looks like a group of large translucent buttons. Its occupied area is large relative to the information it conveys. More floating/glow would not solve its graphic hierarchy.
2. The captured hero stacks text above the model despite the guide describing a side-by-side desktop layout. Check the real viewport before redesigning around this.
3. Cards share almost identical treatment. Once full rendering is verified, differences in editorial spacing, process rails, diagram treatment, and CTA composition can create rhythm without adding content.
4. The visible footer description and consent label are quite dark against the dark footer. This warrants computed contrast measurement; it is not yet a measured WCAG failure.
5. The fifth Solutions card is alone in the narrow capture. A centered equal-card 3+2 desktop arrangement would look more deliberate, provided the actual viewport supports it.

Static screenshots cannot establish whether the site already animates, whether reduced motion is honored, whether keyboard focus works, or whether mobile layouts are correct.

## Proposed visual concept: a restrained signal trace

Let the existing operating-model graphic contain one small moving highlight, while its labels and surrounding text remain still. Use the current relationships only; if no relationship is explicit, run the highlight along the frame rather than inventing directional architecture.

Use a 12-16 second cycle containing a short 3-4 second movement and a long rest. Add a small Pause motion control. Everything else should mainly respond to an intentional interaction or animate once on arrival.

This creates three distinct layers of behavior:

| Layer | Proposal | Why use it here |
| --- | --- | --- |
| Signature graphic | One controlled hero trace, static labels | Gives the site a recognizable moving element without turning it into a dashboard |
| Page progression | Brief process-rail/section accents | Makes long pages feel composed rather than repetitive |
| Interaction | Small arrow shifts, real-link card emphasis, clear input focus | Makes the interface responsive without pretending noninteractive cards are buttons |

Avoid animated statistics, fake live activity, typing headings, bobbing text, magnetic cursors, large blur blobs, parallax, and carousels that hide industry content.

## Prioritized work

### Priority 0: trustworthy rendering

Capture the actual app URL at a measured desktop viewport; diagnose frame/root/scroll behavior; ensure every real section and footer can be read. Remove any animation mechanism that keeps essential content invisible.

### Priority 1: shared layout and visual hierarchy

Refine full-width shell and centered content, split hero, tighter model composition, readable footer contrast, intentional section spacing, and real active navigation states. Do not mistake the dark Contact CTA for an incorrect active state; the screenshots show a separate lighter current-route treatment.

### Priority 2: controlled motion

Implement the hero trace, small interactive feedback, and finite process accents through shared components. Provide pause/reduced-motion behavior and offscreen/hidden-tab handling. Keep Contact and legal routes calm.

### Priority 3: all-route verification and delivery

Check Home/Retail first, then propagate shared changes. Compare content and functional baselines. Capture actual desktop/mobile pages and record live motion. Validate and push a review branch, not a public launch.

## Separate approval issues: not part of the visual rewrite

- The About delivery-ownership text describes the website build team's internal responsibilities in the guide. The founder excerpt assigns execution roles; it does not establish that these should appear as public biographies.
- VAI in Practice visibly includes production-facing wording such as 'The website should not rely on unapproved client names...'. Preserve it during this pass and flag editorial approval separately.
- Privacy and Terms visibly include Review before launch. These are working pages, not confirmed final legal copy.
- The earlier README described local simulated confirmation when no contact endpoint is configured. The current repository must be checked; the screenshot's received/recorded text and generic reference cannot establish successful persistence.

These issues should not hold up a reviewable visual refinement, but they must not disappear behind a more polished design or a blanket 'production ready' claim.

# VAI technical research references
Reviewed: 2026-10-09. These sources explain implementation mechanisms, not VAI business capabilities or approval of this design. Recheck documentation against installed package versions at implementation time. Proposed performance budgets are project choices, not industry standards.

| ID | Primary source | Application and boundary |
| --- | --- | --- |
| R01 | MDN, animation-timeline: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline | Scroll/view timelines; feature-detect; the animation shorthand resets animation-timeline. Do not infer universal support. |
| R02 | MDN, Scroll-driven animation timelines: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines | Native scroll progress and view progress; use for optional decorative accents, not essential content visibility. |
| R03 | MDN, View Transition API: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API | Optional visual continuity for state/navigation changes. Does not authorize router replacement or altering focus/history behavior. |
| R04 | web.dev, High-performance CSS animations: https://web.dev/articles/animations-guide | Favor transform/opacity; measure paint/layout costs. SVG strokes and masks are not automatically compositor-only. |
| R05 | web.dev, Web Vitals: https://web.dev/articles/vitals | LCP, INP, CLS; distinguish lab diagnostics from field results. |
| R06 | W3C WCAG 2.2, Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | Relevant automatically starting movement needs a pause/stop/hide mechanism. Apply a user pause control to optional recurring hero motion. |
| R07 | W3C WCAG 2.2, Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | This is Level AAA; adopt disableable nonessential interaction motion as a project requirement, without claiming blanket WCAG certification. |
| R08 | Motion for React, useScroll: https://motion.dev/docs/react-use-scroll | Use only if appropriate for the inspected dependency stack; avoid React state updates for every animation frame. |
| R09 | Motion for React, useReducedMotion: https://motion.dev/docs/react-use-reduced-motion | Respond to device motion preference; also apply explicit rules to CSS, SVG and optional 3D. |
| R10 | GSAP, matchMedia: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ | Media-specific setup/revert. Reuse GSAP if already suitable; do not install GSAP and Motion for the same behavior. |
| R11 | React Three Fiber, Scaling performance: https://r3f.docs.pmnd.rs/next/advanced/scaling-performance | Search-indexed official documentation describes demand rendering and invalidate. Direct retrieval failed in this session; verify the installed-version URL before coding. Continuous rendering is unnecessary at rest. |
| R12 | OpenAI, Unrolling the Codex agent loop: https://openai.com/index/unrolling-the-codex-agent-loop/ | Documents repository instructions/context including AGENTS.md; use a concise pointer to full design docs, never overwrite existing instructions. |

Research selection: use native CSS/SVG first; reuse an existing animation library if it materially reduces complexity. Real-time 3D is a comparison experiment, not a default dependency. No external reference supplies missing original VAI copy, product claims, legal facts or approved architecture edges.

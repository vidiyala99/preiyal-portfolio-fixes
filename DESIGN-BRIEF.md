# Design brief: preiyalbhalla.com, fixed homepage

Approved scope (2026-11-13): keep her look, fix the contradictions; deliver a fixed page and a before/after page.

Design read: designer portfolio (Experience mode) for hiring managers, an incumbent dark editorial world
(Fraunces display, Inter body, gradient cards, butterfly hero video). Refinement, not redesign.

## What each skill said, and the decision

| Skill | Guidance applied | Decision |
|---|---|---|
| impeccable | Refinement keeps the incumbent identity, behavior, and copy; ask before replacing factual copy. Experience mode: the work leads. Craft floor: contrast, focus, themed browser surfaces. | Keep her tokens 1:1 (bg #161616, card gradient 330deg #040404 to #212121, radius 24, Fraunces 300, Inter 16/24, tag pill rgba(255,255,255,.15)). Only copy changes are fixes, each listed on the before/after page. |
| taste-core | Redesign-preserve: match existing dials (variance 6, motion 4, density 3). Mobile collapse explicit per section. No em dashes. One label per intent. `min-height: 100dvh` not `100vh`. | One nav set on every breakpoint. Horizontal cards stack below 760px instead of squeezing the title. One email action, one label ("Email") everywhere. |
| taste-redesign | Audit first; work with what exists; fix missing focus rings, alt text, semantic HTML, meta tags. | Real `<h1>`, `<h2>` per card, alt text on all images, meta description, skip link. |
| emil-design-eng | Buttons scale 0.97 on press, 160ms ease-out; crossfade label changes with a small blur; hover gated behind `(hover: hover)`; respect reduced motion. | Email button: press feedback, label crossfades "Email" to "Copied, opening mail" and back. Card hover lift gated to fine pointers. Hero video doesn't autoplay under reduced motion. |
| ui-ux-pro-max | Priority 1 to 2: contrast 4.5:1, 44px touch targets, visible labels, no horizontal scroll. | "Coming soon" moves from #5E5E5E (2.9:1) to #A3A3A3. Nav pills and email button get 44px tap targets on phones. |
| ui-ux-pro-max (search tool run) | "Consistent Help" (WCAG 2.2): keep contact in the same relative place everywhere. "Text Reflow": fluid sizes, never clip text at narrow widths. "Mobile First": base styles for phone, enhance up. No database match for copy-to-clipboard; used the built-in default (a polite live-region status). | Email sits in the profile block at every width; titles use `clamp()` sizes with `text-wrap: balance`; CSS is mobile-first with `min-width` queries. |
| frontend-design | Spend boldness in one place; build to the quality floor without announcing it. | The hero video stays the one memorable moment; everything else stays quiet. |
| gstack | Router: visual QA belongs to the design-review lane. | Verify with the Playwright MCP at 390, 820 and 1440 before proposing. |

## Fixes (each maps to a FINDINGS.md row)

1. Phone cards show the correct logos and images (Catchback, Twitch).
2. Email: a real `mailto:` link that also copies the address, same behavior on every breakpoint.
3. Title "Senior Product Designer" everywhere.
4. One nav on every breakpoint: Work, About, Resume, LinkedIn, plus Email.
5. Airtel title no longer breaks mid-word on phones.
6. Catchback card no longer links to the Twitch deck (no correct URL known, so it stays unlinked until one exists).
7. Airtel tag "Trading" replaced with "Rewards" (from her own card title). Flagged as a suggestion.
8. Real headings, alt text, meta description, accessible email label.

## Round 2 (owner notes, 2026-11-13)

Owner: the nav pills and Email button were too loud; contact should be clean icons at the top; the desktop
profile in the bottom-left is hard to reach, while her phone header (identity top right) is better.
Three header mockups (site/mockups.html, not deployed); owner picked A: her phone pattern at every width.

| Skill | Guidance | Decision |
|---|---|---|
| ui-ux-pro-max | 44px touch targets; "Consistent Help" keeps contact in one place everywhere | Three 44px icon buttons, same top-bar spot at every width; bar stays visible while scrolling |
| taste-core | Icons from a real library, one family; nav on one line on desktop, height 80px max | Phosphor regular (her Framer site already loads Phosphor); one 64px row on desktop |
| emil-design-eng | Press feedback; hover labels only for fine pointers, with a short delay; state change shown in place | Scale 0.94 on press; tooltip after 300ms hover or on keyboard focus; envelope turns into a check after copy |
| impeccable | Refinement keeps her identity | Same palette and type; her photo and name move up, nothing is restyled |
| frontend-design | Spend boldness in one place | Header stays quiet so the hero video remains the moment |

## Round 3 (2026-11-14): About page + image weight
- About rebuilt as about.html on the home system: same sticky top bar (Work/About, identity, Email/Resume/LinkedIn/X icons), same cards, type and tokens. Her About copy carried over in her words; current role uses Catchback (YC26) only, confirmed by the owner. The conflicting Amazon line is listed on the before/after page, not silently dropped.
- Design stack applied: impeccable/taste-redesign (refinement, preserve identity and copy), taste-core (one nav set, one label per intent, explicit mobile collapse), emil-design-eng (same press/hover/reduced-motion behavior via shared app.js), ui-ux-pro-max guidance recorded in this brief (44px targets, contact in the same place on every page), gstack design-review (audit, fix, verify at 390/820/1440).
- fishing-hint.svg (2,319 KB SVG wrapping a PNG) converted to fishing-hint.webp (33 KB, same source image at 1024px wide).
- Verified locally in Edge via Playwright: no horizontal overflow and no console errors at 390/820/1440 on all three pages; resume dialog opens and Esc closes on About.


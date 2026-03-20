---
phase: 01-marketing-site
plan: 02
subsystem: ui
tags: [nextjs, tailwind, react, components, landing-page, lucide-react]

# Dependency graph
requires:
  - "01-01: Next.js scaffold + content data layer"
provides:
  - "Complete 8-section marketing landing page"
  - "Nav, Hero, HowItWorks, SampleOutput, Compare, Pricing, FAQ, Footer components"
  - "All sections composed in src/app/page.tsx"
  - "lucide-react installed for step icons"
affects: [03-marketing-site]

# Tech tracking
tech-stack:
  added:
    - "lucide-react (Mic, Target, PenTool, TrendingUp icons in HowItWorks)"
  patterns:
    - "Server Components by default — only SampleOutput and FAQ use 'use client'"
    - "All copy imported from @/lib/content — zero hardcoded strings in components"
    - "Tailwind v4 utility classes only — no inline styles except Hero radial gradient"
    - "HTML table for Compare section per CLAUDE.md anti-CSS-grid rule"
    - "iconMap pattern for mapping icon strings to Lucide components"

key-files:
  created:
    - "src/components/Nav.tsx — fixed sticky nav, bg-navy/92 backdrop-blur, smooth-scroll anchors, mobile-responsive"
    - "src/components/Hero.tsx — min-h-screen, left-aligned max-w-3xl, radial gold gradient, badge, headline array, stats row"
    - "src/components/HowItWorks.tsx — 2-col grid (1-col mobile), 4 step cards with lucide icons, hover transitions"
    - "src/components/SampleOutput.tsx — use client, tabbed post switcher, author avatar, voice tag pill"
    - "src/components/Compare.tsx — HTML table, overflow-x-auto, BylineAgent column highlighted in gold"
    - "src/components/Pricing.tsx — single card, $49/mo, 6 features with checkmarks, gold CTA, comparison row"
    - "src/components/FAQ.tsx — use client, accordion, single-open state, + rotates 45deg"
    - "src/components/Footer.tsx — LINCHPIN attribution with linchpin.studio link, tagline, disclaimer"
  modified:
    - "src/app/page.tsx — composes all 8 components in order"
    - "src/app/globals.css — added scroll-behavior: smooth on html element"

key-decisions:
  - "Server Components for Nav, Hero, HowItWorks, Compare, Pricing, Footer — no client-side state needed"
  - "use client only for SampleOutput (tab useState) and FAQ (accordion useState)"
  - "HTML table for Compare per CLAUDE.md rule: CSS grid breaks with unknown column counts"
  - "iconMap Record<string, LucideIcon> pattern maps HOW_IT_WORKS_STEPS icon strings to actual Lucide components"
  - "Radial gradient on Hero via inline style — only exception to Tailwind-only rule (dynamic CSS value)"
  - "scroll-behavior: smooth added to html element in globals.css — enables all anchor smooth-scroll"

# Metrics
duration: 3min
completed: 2026-03-20
---

# Phase 1 Plan 02: Complete 8-section BylineAgent marketing site — all components built, composed, anti-AI design rules enforced, build passes

**8 React components built (Nav, Hero, HowItWorks, SampleOutput, Compare, Pricing, FAQ, Footer), all copy from content.ts, no purple/violet, left-aligned hero, varied section heights, lucide icons, responsive at 375px, npm run build passes with zero errors**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-20T22:45:07Z
- **Completed:** 2026-03-20T22:48:02Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments

- All 8 marketing sections built as React components — Nav, Hero, HowItWorks, SampleOutput, Compare, Pricing, FAQ, Footer
- Every component imports copy exclusively from src/lib/content.ts — zero hardcoded strings
- Anti-AI design checklist passes: no purple/violet colors, left-aligned hero, 2-column step grid (not 3-column icon grid), DM Sans throughout, one gold accent only
- SampleOutput and FAQ use "use client" with useState; all other components are Server Components
- Compare section uses HTML table with overflow-x-auto per CLAUDE.md rule
- LINCHPIN attribution in footer links to linchpin.studio
- smooth-scroll behavior added to html element
- npm run build: zero TypeScript errors, zero build errors, all pages static

## Task Commits

1. **Task 1: Build Nav, Hero, HowItWorks, and Footer components** — `73c4803` (feat)
2. **Task 2: Build SampleOutput, Compare, Pricing, FAQ and compose page** — `d4e6289` (feat)

## Files Created/Modified

- `src/components/Nav.tsx` — fixed top-0 z-50, bg-navy/92 backdrop-blur-lg, gold gradient logo, NAV_LINKS anchors, hidden md:flex, Start Free Trial CTA
- `src/components/Hero.tsx` — min-h-screen left-aligned, radial gradient, badge pill, headline array + goldLine, dual CTAs, stats row from HERO.stats
- `src/components/HowItWorks.tsx` — id=how-it-works, grid-cols-1 md:grid-cols-2, iconMap for lucide icons, step cards with hover border-gold/30
- `src/components/SampleOutput.tsx` — use client, useState tab, post card with author header + voice tag, whitespace-pre-line content
- `src/components/Compare.tsx` — HTML table, overflow-x-auto, BylineAgent column gold header + bg, footnote below table
- `src/components/Pricing.tsx` — max-w-lg card, BRAND.price, PRICING.features with checkmarks, gold CTA, PRICING.comparisons flex-wrap row
- `src/components/FAQ.tsx` — use client, useState accordion single-open, + rotates 45deg on active, border-b dividers
- `src/components/Footer.tsx` — LINCHPIN attribution + linchpin.studio gold link, FOOTER tagline + disclaimer
- `src/app/page.tsx` — imports and renders all 8 components in order
- `src/app/globals.css` — html { scroll-behavior: smooth }

## Decisions Made

- Server Components by default: only SampleOutput and FAQ have client-side interactivity (tab switching and accordion), so only they get "use client"
- HTML table for Compare: per CLAUDE.md rule about CSS grid breaking with unknown column counts — table is semantically correct and overflow-x-auto handles mobile
- iconMap pattern: HOW_IT_WORKS_STEPS stores icon as string ("Mic", "Target", etc.) since content.ts is a plain data file. The map resolves to actual LucideIcon components in the component layer.
- Radial gradient on Hero is the only inline style — it uses CSS radial-gradient() which can't be expressed as a static Tailwind utility class

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — this plan only builds components.

## Next Phase Readiness

- Complete marketing site live on localhost:3000, ready for visual QA
- All section IDs present: how-it-works, sample, compare, pricing, faq
- CTA buttons have href="#" — Plan 03 will wire them to Stripe checkout and onboarding flow
- Page is fully static (SSG) — ready for Vercel deployment

## Self-Check: PASSED

All 9 component/page files confirmed present on disk. Task commits 73c4803 and d4e6289 confirmed in git log. npm run build exits with zero errors. All 10 requirements (SITE-01 through SITE-10) marked complete.

---
*Phase: 01-marketing-site*
*Completed: 2026-03-20*

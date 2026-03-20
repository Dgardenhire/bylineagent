---
phase: 01-marketing-site
plan: 01
subsystem: infra
tags: [nextjs, tailwind, typescript, google-fonts, github]

# Dependency graph
requires: []
provides:
  - Next.js 16.2 project with TypeScript + Tailwind v4
  - DM Sans + DM Mono fonts configured via next/font/google
  - BylineAgent design tokens (navy, gold, text colors) in globals.css @theme
  - All marketing copy as typed TypeScript constants in src/lib/content.ts
  - TypeScript interfaces for all content structures in src/lib/types.ts
  - GitHub repo at github.com/Dgardenhire/bylineagent
affects: [02-marketing-site, 03-marketing-site]

# Tech tracking
tech-stack:
  added:
    - "next@16.2.0"
    - "react@19.2.4"
    - "tailwindcss@4 (CSS-based config, no tailwind.config.ts)"
    - "@tailwindcss/postcss@4"
    - "DM Sans + DM Mono (Google Fonts via next/font)"
  patterns:
    - "Tailwind v4 @theme block for design tokens in globals.css"
    - "Content as typed constants in src/lib/content.ts — single source of truth for all copy"
    - "TypeScript interfaces in src/lib/types.ts imported by content layer"

key-files:
  created:
    - "src/lib/types.ts — 9 TypeScript interfaces for all content structures"
    - "src/lib/content.ts — all marketing copy as typed constants (BRAND, HERO, HOW_IT_WORKS_STEPS, SAMPLE_OUTPUT, COMPARE, PRICING, FAQ_ITEMS, FOOTER, NAV_LINKS)"
  modified:
    - "src/app/layout.tsx — DM Sans + DM Mono fonts, metadata, font variables on html element"
    - "src/app/globals.css — Tailwind @import, @theme design tokens, navy background"
    - "src/app/page.tsx — simple BylineAgent placeholder"

key-decisions:
  - "Tailwind v4 uses CSS @theme block instead of tailwind.config.ts — no JS config file needed"
  - "Temporarily moved .planning and .git during create-next-app scaffolding (existing directory conflict)"
  - "GitHub repo created as public: github.com/Dgardenhire/bylineagent"
  - "Font CSS variables named --font-dm-sans and --font-dm-mono (matching Tailwind v4 @theme naming)"

patterns-established:
  - "Content pattern: All string copy lives in src/lib/content.ts, zero hardcoded strings in components"
  - "Token pattern: Design tokens defined in globals.css @theme block, referenced as Tailwind color utilities"
  - "Font pattern: next/font/google with CSS variables applied to html element, font-sans/font-mono Tailwind utilities"

requirements-completed: [INFRA-01, INFRA-07]

# Metrics
duration: 6min
completed: 2026-03-20
---

# Phase 1 Plan 01: Next.js scaffold with all marketing copy in typed content layer and GitHub repo live

**Next.js 16 + Tailwind v4 project scaffolded with DM Sans/DM Mono fonts, BylineAgent design tokens, all marketing copy extracted from prototype into typed src/lib/content.ts, and code pushed to github.com/Dgardenhire/bylineagent**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-20T22:35:15Z
- **Completed:** 2026-03-20T22:41:47Z
- **Tasks:** 3
- **Files modified:** 7

## Accomplishments

- Next.js 16.2 project with TypeScript, App Router, Tailwind v4 builds with zero errors
- All marketing copy from JSX prototype extracted verbatim into typed TypeScript constants — 9 exports covering hero, steps, sample posts, compare table, pricing, FAQ (7 items), footer
- GitHub repo created and all code pushed to github.com/Dgardenhire/bylineagent

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js 16 project with Tailwind and fonts** - `290152f` (feat)
2. **Task 2: Create content data layer and type definitions** - `2eeb431` (feat)
3. **Task 3: Create GitHub repo and push initial commit** - `445809e` (chore) + pushed to origin

## Files Created/Modified

- `src/app/layout.tsx` — DM Sans + DM Mono fonts via next/font/google, metadata set, font variables on html
- `src/app/globals.css` — Tailwind @import, @theme design tokens (navy/gold/text palette), navy body background
- `src/app/page.tsx` — Minimal placeholder with BylineAgent heading
- `src/lib/types.ts` — 9 TypeScript interfaces: Brand, HeroContent, Step, SamplePost, SampleOutputContent, CompareRow, CompareContent, PricingContent, FaqItem, FooterContent, NavLink
- `src/lib/content.ts` — 9 typed constants: BRAND, HERO, HOW_IT_WORKS_STEPS, SAMPLE_OUTPUT, COMPARE, PRICING, FAQ_ITEMS, FOOTER, NAV_LINKS

## Decisions Made

- Tailwind v4 ships with Next.js 16 — uses CSS @theme block instead of tailwind.config.ts. Design tokens defined in globals.css directly. This is the correct pattern for this stack.
- .planning and .git directories had to be temporarily moved during `create-next-app` scaffolding since the tool rejects non-empty directories. Both restored after scaffolding completed.
- GitHub repo is public at github.com/Dgardenhire/bylineagent as specified.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Tailwind v4 has no tailwind.config.ts**
- **Found during:** Task 1 (scaffold)
- **Issue:** Plan specified updating tailwind.config.ts with design tokens, but Next.js 16 + Tailwind v4 uses CSS-based configuration. No tailwind.config.ts file exists.
- **Fix:** Added design tokens to globals.css using Tailwind v4's @theme block. All color utilities (text-navy, bg-gold, etc.) work identically via @theme as they would via tailwind.config.ts.
- **Files modified:** src/app/globals.css
- **Verification:** npm run build passes, color utilities resolve correctly
- **Committed in:** 290152f (Task 1 commit)

**2. [Rule 3 - Blocking] Existing .planning directory blocks create-next-app**
- **Found during:** Task 1 (scaffold)
- **Issue:** create-next-app refuses to scaffold into a non-empty directory
- **Fix:** Temporarily moved .planning and .git to /tmp, ran scaffolding, restored both directories. Discarded the new .git init from create-next-app and restored original repo.
- **Files modified:** None — procedural workaround only
- **Verification:** All planning files intact, git history preserved
- **Committed in:** n/a

---

**Total deviations:** 2 auto-fixed (2 blocking)
**Impact on plan:** Both auto-fixes necessary. Tailwind v4 @theme is the correct pattern for this stack — functionally equivalent to tailwind.config.ts approach. Scaffolding workaround preserved all planning artifacts.

## Issues Encountered

None beyond the two auto-fixed blocking issues documented above.

## User Setup Required

None — no external service configuration required for this plan.

## Next Phase Readiness

- Next.js project builds cleanly, ready for component development in Plan 02
- Content data layer is the single source of truth — all components in Plans 02 and 03 import from src/lib/content.ts
- GitHub repo live, Vercel can be connected to auto-deploy from main branch

---
*Phase: 01-marketing-site*
*Completed: 2026-03-20*

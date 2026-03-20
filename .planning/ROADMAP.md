# Roadmap: BylineAgent

## Overview

Four phases that move from zero to a paying product. Phase 1 ships the marketing site and creates the GitHub repo. Phase 2 wires payments, onboarding, and all infrastructure (most of it automated via CLI/MCP). Phase 3 builds the weekly pipeline. Phase 4 polishes for launch.

## Phases

- [ ] **Phase 1: Marketing Site** - Static site deployed on Vercel — the thing that sells
- [ ] **Phase 2: Checkout + Onboarding + Infra** - Stripe, Supabase, Notion, onboarding form, voice profile generation
- [ ] **Phase 3: Weekly Pipeline** - AI generation pipeline, quality gate, email delivery, Notion sync
- [ ] **Phase 4: Launch Polish** - Domain, OG metadata, mobile polish, E2E test, go-live

## Phase Details

### Phase 1: Marketing Site
**Goal**: A deployed Next.js 16 site with all marketing sections — compelling enough that a consultant would click "Start Free Trial"
**Depends on**: Nothing (first phase)
**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, SITE-06, SITE-07, SITE-08, SITE-09, SITE-10, INFRA-01, INFRA-07
**Success Criteria** (what must be TRUE):
  1. `next build` completes with zero errors
  2. All 7 sections render: Hero, How It Works, Sample Output, Compare, Pricing, FAQ, Footer
  3. Site is responsive at 375px — no horizontal scroll, all content accessible
  4. Design passes anti-AI checklist: no purple gradients, no 3-column icon grids, DM Sans loads, left-aligned default, varied section heights
  5. CTA buttons exist (wired to # for now, connected in Phase 2)
  6. LINCHPIN attribution visible in footer
  7. GitHub repo created, code pushed, deployed to Vercel preview URL
**Plans:** 3 plans

Plans:
- [ ] 01-01-PLAN.md — Scaffold Next.js 16 project, content data layer, GitHub repo
- [ ] 01-02-PLAN.md — Build all 7 marketing sections (Nav, Hero, HowItWorks, SampleOutput, Compare, Pricing, FAQ, Footer)
- [ ] 01-03-PLAN.md — Deploy to Vercel, browser verification, design approval

**Automated steps in this phase:**
- `gh repo create bylineagent --public --source=. --remote=origin`
- `vercel link` + `vercel deploy`

### Phase 2: Checkout + Onboarding + Infra
**Goal**: A visitor can pay $49/mo via Stripe, fill the onboarding form, and have a Voice Profile built by Claude — plus all supporting infrastructure is provisioned
**Depends on**: Phase 1
**Requirements**: PAY-01, PAY-02, PAY-03, PAY-04, PAY-05, ONBOARD-01, ONBOARD-02, ONBOARD-03, ONBOARD-04, ONBOARD-05, INFRA-02, INFRA-03, INFRA-06, INFRA-08, INFRA-09, INFRA-10
**Success Criteria** (what must be TRUE):
  1. Clicking CTA opens Stripe Checkout for $49/mo subscription (test mode)
  2. After payment, customer lands on /welcome with the 8-field onboarding form
  3. Form submission creates customer in Supabase, triggers voice profile generation, sends confirmation email
  4. Customer appears in Notion Customers database with status "Active"
  5. Stripe webhook correctly handles subscription.deleted
  6. Race condition handled — /welcome works even if webhook hasn't fired yet
  7. `.env.example` documents all 12 required environment variables
**Plans**: TBD

**Automated steps in this phase:**
- Stripe product + price creation via `stripe products create` + `stripe prices create`
- Stripe webhook endpoint via `stripe webhook_endpoints create`
- Supabase schema via MCP `execute_sql`
- Notion databases via MCP `notion-create-database`
- Vercel env vars via `vercel env add`

**Damon does manually (with step-by-step instructions provided):**
- Create Resend account + verify bylineagent.com domain (DNS records)
- Create Supabase project (pick region, org)

### Phase 3: Weekly Pipeline
**Goal**: Every Monday at 6am CT, all active customers receive 5 voice-matched LinkedIn posts via branded email — the core product loop works end-to-end
**Depends on**: Phase 2
**Requirements**: PIPE-01, PIPE-02, PIPE-03, PIPE-04, PIPE-05, PIPE-06, PIPE-07, PIPE-08, PIPE-09
**Success Criteria** (what must be TRUE):
  1. Manual trigger of /api/generate-weekly generates 5 posts for a test customer
  2. Posts match the customer's voice profile (not generic AI output)
  3. Quality gate catches low-scoring posts and regeneration improves them
  4. Topic deduplication prevents repeat topics within 90 days
  5. Delivery email is branded HTML matching BylineAgent design, with posts formatted for copy-paste
  6. Posts stored in Supabase with scores, synced to Notion
  7. Pipeline uses `waitUntil()` for background processing (doesn't hit cron timeout)
  8. Vercel cron configured for Monday 11:00 UTC
**Plans**: TBD

### Phase 4: Launch Polish
**Goal**: Production-ready — domain resolves, OG previews work, mobile polished, full E2E test passes, ready for first paying customer
**Depends on**: Phase 3
**Requirements**: INFRA-04, INFRA-05
**Success Criteria** (what must be TRUE):
  1. bylineagent.com resolves to the Vercel deployment
  2. Sharing any page URL shows branded OG image with correct title/description
  3. Mobile experience at 375px and 768px is polished
  4. Stripe switched to live mode, webhook endpoint updated
  5. Full E2E test: sign up → pay → onboard → voice profile → manual cron → email delivered
**Plans**: TBD

**Damon does manually:**
- Point bylineagent.com to Vercel (CNAME record at registrar)
- Switch Stripe to live mode in dashboard
- (Optional) Set up Meta Pixel + Facebook Page for ads

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Marketing Site | 0/3 | Planning complete | - |
| 2. Checkout + Onboarding + Infra | 0/TBD | Not started | - |
| 3. Weekly Pipeline | 0/TBD | Not started | - |
| 4. Launch Polish | 0/TBD | Not started | - |

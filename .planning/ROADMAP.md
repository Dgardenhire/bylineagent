# Roadmap: BylineAgent

## Overview

Four phases that move from zero to a paying product. Phase 1 ships the marketing site — the thing a prospect sees and decides to buy from. Phase 2 wires payments and onboarding — the moment a visitor becomes a customer with a voice profile. Phase 3 builds the weekly pipeline — the product's core value loop. Phase 4 polishes for launch — domain, OG metadata, and production hardening.

## Phases

- [ ] **Phase 1: Marketing Site** - Static site deployed on Vercel — the thing that sells
- [ ] **Phase 2: Checkout + Onboarding** - Stripe payments, onboarding form, voice profile generation
- [ ] **Phase 3: Weekly Pipeline** - AI generation pipeline, quality gate, email delivery, Notion sync
- [ ] **Phase 4: Launch Polish** - Domain, OG metadata, mobile polish, production hardening

## Phase Details

### Phase 1: Marketing Site
**Goal**: A deployed Next.js 16 site at bylineagent.com with all 7 marketing sections — compelling enough that a consultant would click "Start Free Trial"
**Depends on**: Nothing (first phase)
**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, SITE-06, SITE-07, SITE-08, SITE-09, INFRA-01
**Success Criteria** (what must be TRUE):
  1. `next build` completes with zero errors
  2. All 7 sections render: Hero, How It Works, Sample Output, Compare, Pricing, FAQ, Footer
  3. Site is responsive at 375px — no horizontal scroll, all content accessible
  4. Design passes anti-AI checklist: no purple gradients, no 3-column icon grids, no generic hero copy, DM Sans font loads correctly
  5. CTA buttons exist (wired to # for now, connected in Phase 2)
  6. Deployed to Vercel and accessible via preview URL
**Plans**: TBD

### Phase 2: Checkout + Onboarding
**Goal**: A visitor can pay $49/mo via Stripe, fill the onboarding form, and have a Voice Profile built by Claude — the customer creation flow is complete
**Depends on**: Phase 1
**Requirements**: PAY-01, PAY-02, PAY-03, PAY-04, ONBOARD-01, ONBOARD-02, ONBOARD-03, ONBOARD-04, ONBOARD-05, INFRA-02, INFRA-03
**Success Criteria** (what must be TRUE):
  1. Clicking "Start Free Trial" opens Stripe Checkout for $49/mo subscription (test mode)
  2. After payment, customer lands on /welcome with the 8-field onboarding form
  3. Form submission creates customer in Supabase, triggers Claude voice profile generation, sends confirmation email via Resend
  4. Customer appears in Notion Customers database with status "Active"
  5. Stripe webhook correctly handles subscription.deleted (marks customer as churned)
**Plans**: TBD

### Phase 3: Weekly Pipeline
**Goal**: Every Monday at 6am CT, all active customers receive 5 voice-matched LinkedIn posts via email — the core product loop works end-to-end
**Depends on**: Phase 2
**Requirements**: PIPE-01, PIPE-02, PIPE-03, PIPE-04, PIPE-05, PIPE-06, PIPE-07
**Success Criteria** (what must be TRUE):
  1. Manual trigger of /api/generate-weekly generates 5 posts for a test customer
  2. Posts match the customer's voice profile (not generic AI output)
  3. Quality gate catches low-scoring posts and regeneration improves them
  4. Delivery email arrives with all 5 posts formatted for copy-paste
  5. Posts stored in Supabase with scores and synced to Notion Posts database
  6. Vercel cron configured for Monday 11:00 UTC
**Plans**: TBD

### Phase 4: Launch Polish
**Goal**: Production-ready — domain resolves, OG previews work in emails and social, mobile nav polished, ready for first paying customer
**Depends on**: Phase 3
**Requirements**: INFRA-04, INFRA-05
**Success Criteria** (what must be TRUE):
  1. bylineagent.com resolves to the Vercel deployment
  2. Sharing any page URL shows branded OG image with correct title/description
  3. Mobile experience at 375px and 768px is polished (no janky layouts)
  4. Stripe switched to live mode, webhook endpoint updated
  5. End-to-end test: sign up → pay → onboard → voice profile → manual cron → email delivered
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Marketing Site | 0/TBD | Not started | - |
| 2. Checkout + Onboarding | 0/TBD | Not started | - |
| 3. Weekly Pipeline | 0/TBD | Not started | - |
| 4. Launch Polish | 0/TBD | Not started | - |

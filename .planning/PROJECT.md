# Project: BylineAgent

## Core Value

A LinkedIn ghostwriting service that sounds like you — not like AI. The product learns your voice from writing samples, generates 5 posts per week using Claude, quality-checks each one, and delivers them via email. $49/mo. Ghostwriter quality at tool price.

## Problem

LinkedIn is the highest-ROI organic channel for consultants, founders, and thought leaders. But writing consistently takes 5-10 hours/week. Self-serve AI tools ($19-65/mo) produce generic output that sounds like everyone else. Human ghostwriters ($1,000-5,000/mo) are effective but unaffordable for most. The gap between "do it yourself with AI" and "hire a human" is where BylineAgent lives.

## Users

**Primary:** Consultants, founders, agency owners, and thought leaders who know LinkedIn matters but can't commit 5-10 hours/week to writing. They've tried ChatGPT or Jasper and been disappointed by generic output. Budget: willing to spend $49/mo if it actually sounds like them.

**Secondary:** Small marketing agencies who want to offer LinkedIn ghostwriting to clients without hiring writers. White-label potential (v2).

## Product

### What It Does
1. Customer signs up via Stripe Checkout ($49/mo)
2. Onboarding form captures: name, email, LinkedIn URL, 3-5 writing samples, expertise, audience, topics to cover, topics to avoid
3. Claude analyzes samples → builds a structured Voice Profile document
4. Every Monday at 6am CT, pipeline generates 5 posts:
   - Topic research (across customer's content lanes)
   - Draft generation (voice profile injected as system prompt)
   - Quality gate (score < 7/10 triggers regeneration)
   - Delivery via email with all 5 posts formatted for copy-paste
5. Customer reviews, optionally edits, copy-pastes to LinkedIn

### What It Doesn't Do (v1)
- No direct LinkedIn API posting (compliance risk, authentication complexity)
- No analytics/engagement tracking
- No multi-platform support
- No team/agency dashboard
- No content calendar UI (email delivery only)

## Architecture

```
Customer Journey:
bylineagent.com → "Start Free Trial" → Stripe Checkout → /welcome (onboarding form)
                                                              ↓
                                              /api/onboard → Claude builds Voice Profile
                                                              ↓
                                              Supabase (customer: active) + Notion sync
                                                              ↓
                                    Every Monday 6am CT: /api/generate-weekly
                                              ↓
                        Claude generates 5 posts → quality gate → Resend email delivery
```

## Stack

- **Frontend**: Next.js 16 App Router (static marketing page + dynamic /welcome)
- **Hosting**: Vercel (free tier → Pro when needed)
- **Database**: Supabase (customers + posts tables)
- **Payments**: Stripe Checkout (subscription, $49/mo) — existing LINCHPIN Stripe account
- **Email**: Resend (welcome, confirmation, weekly delivery)
- **AI**: Anthropic Claude API via Vercel AI Gateway (voice profiles + post generation)
- **CRM**: Notion databases (Customers + Posts) synced from Supabase
- **Cron**: Vercel cron job (Monday 11:00 UTC = 6am CT)
- **Domain**: bylineagent.com (already purchased)

## Business Model

- Price: $49/mo per customer
- Compute cost: ~$1.37/customer/month (topic research + 5 drafts + 5 quality checks + ~1-2 regenerations)
- Gross margin: ~97%
- Breakeven: 3 customers covers Vercel Pro ($20/mo) + Supabase ($25/mo) + Resend ($20/mo)

## Competitive Positioning

| Tier | Examples | Price | You Do | They Do |
|------|----------|-------|--------|---------|
| Self-serve tools | Jasper, Copy.ai, Taplio | $19-65/mo | Everything | Generate generic text |
| **BylineAgent** | — | **$49/mo** | **Review + paste** | **Voice-matched posts, delivered weekly** |
| Human ghostwriters | Agencies, freelancers | $1K-5K/mo | Interviews | Full-service writing |

## Design Direction

- Dark navy background: `#0A0C14`
- Gold accent: `#C9A227`
- Text: `#F1F0ED` (primary), `#9CA3AF` (muted)
- Fonts: DM Sans (headings/body), DM Mono (labels/metadata)
- Anti-AI aesthetic: no purple gradients, no 3-column icon grids, no generic hero copy
- Left-aligned by default, varied section heights, at least one asymmetric moment
- Mobile works at 375px without horizontal scroll

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Separate product from LINCHPIN | Clean brand, separate LLC potential, standalone Vercel project | BylineAgent.com |
| Email delivery, not dashboard | Simplest UX (review in inbox), no auth needed for reading, fastest to ship | Weekly email with 5 posts |
| Existing LINCHPIN Stripe | No new Stripe account needed, add as separate product | Same Stripe, different Price ID |
| Supabase over raw SQLite | Production-grade, auth-ready, real-time potential | Supabase Postgres |
| Vercel AI Gateway | OIDC auth, failover, cost tracking, no manual API keys | Gateway model strings |
| Notion CRM sync | Damon already lives in Notion, lightweight CRM without building UI | Notion databases via API |
| Source materials are reference | Assembled 10+ days ago, cherry-pick best ideas | Adapt, don't follow rigidly |

## Constraints

- Damon is sole operator — everything must be automatable or take < 10 min/week
- Vercel Hobby cron timeout is 10s — use `waitUntil()` for background processing
- Must serve double duty as live demo for "AI for the Real World" seminar
- Domain already purchased, LINCHPIN Stripe account already exists

## Requirements

### Validated

(None yet — ship to validate)

### Active

See REQUIREMENTS.md for full list with REQ-IDs.

### Out of Scope

- LinkedIn API direct posting — compliance risk, auth complexity
- Analytics dashboard — v2 feature
- Multi-platform support — v2 feature
- Team/agency dashboard — v2 feature
- Content calendar UI — email delivery only for v1
- White-label — v2 feature

---
*Last updated: 2026-03-20 after initialization*

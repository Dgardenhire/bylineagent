---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: planning
stopped_at: Completed 01-marketing-site-01-PLAN.md
last_updated: "2026-03-20T22:43:20.163Z"
last_activity: 2026-03-20 — Requirements and roadmap finalized (38 requirements, 4 phases)
progress:
  total_phases: 4
  completed_phases: 0
  total_plans: 3
  completed_plans: 1
  percent: 33
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-20)

**Core value:** Voice-matched LinkedIn ghostwriting at tool price — $49/mo, 5 posts/week, delivered to inbox.
**Current focus:** Phase 1 — Marketing Site

## Current Position

Phase: 1 of 4 (Marketing Site)
Plan: 0 of TBD in current phase
Status: Ready to plan
Last activity: 2026-03-20 — Requirements and roadmap finalized (38 requirements, 4 phases)

Progress: [███░░░░░░░] 33%

## Performance Metrics

**Velocity:**
- Total plans completed: 0
- Average duration: —
- Total execution time: 0 hours

*Updated after each plan completion*

## Accumulated Context

### Decisions

- [Init]: Next.js 16 + Tailwind CSS + TypeScript + Vercel
- [Init]: DM Sans + DM Mono fonts (Google Fonts via next/font)
- [Init]: Dark navy #0A0C14 background, gold #C9A227 accent
- [Init]: Anti-AI aesthetic (Perplexity Computer guide standards)
- [Init]: Email delivery only for v1 (no content calendar UI)
- [Init]: Existing LINCHPIN Stripe account, separate product/price
- [Init]: Vercel AI Gateway for Claude API access (OIDC auth)
- [Init]: "By LINCHPIN" attribution on site for trust signal
- [Init]: Automate everything possible — Stripe, Supabase, Notion, Vercel env vars via CLI/MCP
- [Init]: All marketing copy extracted into src/lib/content.ts as typed constants (single source of truth)
- [Init]: Topic deduplication within 90 days to prevent content decay
- [Init]: waitUntil() pattern for cron to handle Hobby tier timeout
- [Init]: /welcome verifies Stripe session directly to handle webhook race condition
- [Phase 01-marketing-site]: Tailwind v4 uses CSS @theme block — no tailwind.config.ts, design tokens in globals.css
- [Phase 01-marketing-site]: GitHub repo created as public: github.com/Dgardenhire/bylineagent

### Known Challenges + Mitigations

1. **Vercel Hobby cron timeout (10s)**: Weekly generation exceeds this with multiple customers.
   → Mitigation: `waitUntil()` for background processing. Upgrade to Pro ($20/mo, 60s) at 10+ customers.

2. **Race condition**: User reaches /welcome before Stripe webhook fires.
   → Mitigation: /welcome verifies Stripe session directly via API, creates customer row if webhook hasn't yet.

3. **Voice Profile quality**: Core differentiator. Garbage samples → garbage profile.
   → Mitigation: Clear guidance on onboarding form about what "good" writing samples are. Damon is Customer #1 test.

4. **Email deliverability**: New domain needs SPF, DKIM, DMARC records.
   → Mitigation: Resend provides these — Damon adds DNS records before first send.

5. **Content quality decay**: 6 topic lanes × 5 posts/week = repetitive by month 3.
   → Mitigation: Topic deduplication (PIPE-08). v2: customer feedback loop, external signal ingestion.

6. **Conversion without trial**: Prospects can't see voice-matched output before paying.
   → Mitigation: Strong sample posts on marketing site. v2: free voice sample before payment.

### Damon Must Do Manually (with step-by-step instructions)

| Step | When | Automated? |
|------|------|-----------|
| Create Resend account + verify domain | Before Phase 2 testing | No — signup + DNS records |
| Create Supabase project | Before Phase 2 | Partial — project creation manual, schema automated |
| Point bylineagent.com to Vercel | Before Phase 4 go-live | No — CNAME at registrar |
| Switch Stripe to live mode | Phase 4 go-live | No — Stripe dashboard |
| (Optional) Meta Pixel + Facebook Page | Post-launch ads | No — Facebook Business Manager |
| Phase 01-marketing-site P01 | 6 | 3 tasks | 7 files |

### Pending Todos

None yet.

### Blockers/Concerns

- [Phase 2]: Resend account needed (Damon creates, DNS verification)
- [Phase 2]: Supabase project needed (Damon picks region/org, Claude runs schema)
- [Phase 4]: Domain CNAME record (Damon at registrar)
- [Strategic]: No free trial/sample mechanism in v1 — conversion risk. Monitor and add if needed.
- [Strategic]: Tagline "Zero effort" is slightly dishonest — customer still copy-pastes 5 posts. Consider "10 minutes/week instead of 10 hours."

## Session Continuity

Last session: 2026-03-20T22:43:20.160Z
Stopped at: Completed 01-marketing-site-01-PLAN.md
Resume file: None

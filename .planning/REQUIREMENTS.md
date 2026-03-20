# Requirements: BylineAgent v1

## v1 Requirements

### Marketing Site
- [ ] **SITE-01**: Visitor sees a compelling hero with tagline, price, and single CTA ("Start Free Trial")
- [ ] **SITE-02**: Visitor understands how it works in 4 steps (Sign up → Share samples → AI learns voice → Posts delivered)
- [ ] **SITE-03**: Visitor can read 3 sample LinkedIn posts that demonstrate voice-matched output quality
- [ ] **SITE-04**: Visitor can compare BylineAgent to self-serve tools and human ghostwriters in a side-by-side table
- [ ] **SITE-05**: Visitor sees pricing ($49/mo) with feature list and clear CTA
- [ ] **SITE-06**: Visitor can expand/collapse 7 FAQ items addressing common objections
- [ ] **SITE-07**: Site passes anti-AI aesthetic checklist (no purple gradients, no icon grids, no generic copy)
- [ ] **SITE-08**: Site is responsive at 375px, 768px, and 1024px without horizontal scroll
- [ ] **SITE-09**: Navigation is sticky with smooth-scroll to sections
- [ ] **SITE-10**: "By LINCHPIN" or Damon Gardenhire attribution visible as trust signal (footer or about line)

### Payments
- [ ] **PAY-01**: Visitor can click CTA → Stripe Checkout session opens for $49/mo subscription
- [ ] **PAY-02**: Stripe webhook handles `checkout.session.completed` → creates customer in Supabase
- [ ] **PAY-03**: Stripe webhook handles `customer.subscription.deleted` → marks customer as churned
- [ ] **PAY-04**: After successful checkout, customer is redirected to /welcome onboarding page
- [ ] **PAY-05**: Race condition handled — /welcome verifies Stripe session directly if webhook hasn't fired yet

### Onboarding
- [ ] **ONBOARD-01**: Customer fills 8-field form: name, email, LinkedIn URL, writing samples (3-5 posts), expertise, audience, topics to cover, topics to avoid
- [ ] **ONBOARD-02**: Form submission triggers Claude to build a structured Voice Profile from writing samples
- [ ] **ONBOARD-03**: Customer record created/updated in Supabase with voice profile stored
- [ ] **ONBOARD-04**: Confirmation email sent via Resend ("Welcome, your first posts arrive Monday")
- [ ] **ONBOARD-05**: Customer synced to Notion Customers database

### Pipeline
- [ ] **PIPE-01**: Weekly cron (Monday 6am CT) triggers generation for all active customers
- [ ] **PIPE-02**: Topic research generates 5 timely topics across customer's content lanes
- [ ] **PIPE-03**: Each topic drafted as 150-300 word LinkedIn post with voice profile as system prompt
- [ ] **PIPE-04**: Quality gate scores each post 1-10; posts scoring < 7 are regenerated once
- [ ] **PIPE-05**: All 5 posts delivered via branded HTML email matching BylineAgent design, formatted for copy-paste
- [ ] **PIPE-06**: Posts stored in Supabase with quality scores and batch date
- [ ] **PIPE-07**: Posts synced to Notion Posts database
- [ ] **PIPE-08**: Topic deduplication — no repeat topics for same customer within 90 days
- [ ] **PIPE-09**: Pipeline uses `waitUntil()` for background processing (Vercel Hobby cron timeout is 10s)

### Infrastructure
- [x] **INFRA-01**: Next.js 16 App Router project deployed on Vercel
- [ ] **INFRA-02**: Supabase database with customers and posts tables (schema applied via MCP)
- [ ] **INFRA-03**: Environment variables configured in Vercel via CLI (`vercel env add`)
- [ ] **INFRA-04**: Domain bylineagent.com pointed to Vercel deployment
- [ ] **INFRA-05**: OG metadata and branded OG image on all pages
- [ ] **INFRA-06**: Notion Customers + Posts databases created via MCP with correct property schemas
- [x] **INFRA-07**: GitHub repo created via `gh repo create`
- [ ] **INFRA-08**: Stripe product + price created via Stripe API/CLI (automated)
- [ ] **INFRA-09**: Stripe webhook endpoint registered via Stripe API/CLI (automated)
- [ ] **INFRA-10**: `.env.example` with all 12 required environment variables documented

## v2 Requirements (Deferred)

- Analytics dashboard (engagement tracking per post)
- Multi-platform support (Twitter/X, newsletter)
- Team/agency dashboard with client management
- White-label option for agencies
- Content calendar UI (replace email delivery)
- LinkedIn API direct posting
- Customer self-service portal (edit voice profile, pause subscription)
- A/B testing different voice profile variations
- Meta Pixel + Facebook ad campaign integration
- Free voice sample (1 post before payment) for conversion optimization
- Customer feedback loop on generated posts (improve voice profile over time)
- Voice calibration step (review first batch before it "counts")

## Out of Scope

- LinkedIn API integration — compliance risk, authentication complexity, not needed for v1 (copy-paste is fine)
- Mobile app — web-only product
- Free tier — $49/mo only, no freemium (compute costs make free unsustainable)
- Custom AI model fine-tuning — prompt engineering with Claude is sufficient for v1
- Real-time editing/collaboration — this is a delivery service, not a writing tool

## Traceability

| REQ-ID | Phase | Plan |
|--------|-------|------|
| SITE-01 through SITE-10 | Phase 1 | TBD |
| PAY-01 through PAY-05 | Phase 2 | TBD |
| ONBOARD-01 through ONBOARD-05 | Phase 2 | TBD |
| PIPE-01 through PIPE-09 | Phase 3 | TBD |
| INFRA-01, INFRA-07 | Phase 1 | TBD |
| INFRA-02, INFRA-03, INFRA-06, INFRA-08, INFRA-09, INFRA-10 | Phase 2 | TBD |
| INFRA-04, INFRA-05 | Phase 4 | TBD |

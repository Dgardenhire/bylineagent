import type {
  Brand,
  HeroContent,
  Step,
  SampleOutputContent,
  CompareContent,
  PricingContent,
  FaqItem,
  FooterContent,
  NavLink,
} from "./types";

export const BRAND: Brand = {
  name: "BylineAgent",
  tagline: "Ghostwriter quality. Tool price. Zero effort.",
  price: 49,
  postsPerWeek: 5,
};

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Sample", href: "#sample" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
];

export const HERO: HeroContent = {
  badge: "AI-POWERED LINKEDIN GHOSTWRITER",
  headline: ["Your LinkedIn.", "On autopilot."],
  goldLine: "$49/month.",
  subtext:
    "Our AI studies your best writing, learns your voice, and delivers 20 ready-to-publish LinkedIn posts every month. You review, you publish, your pipeline grows.",
  primaryCta: "See a Sample",
  secondaryCta: "How It Works",
  stats: [
    { value: "20", label: "Posts delivered monthly" },
    { value: "< 2 min", label: "Your time per week" },
    { value: "Your voice", label: "Not generic AI slop" },
  ],
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    num: "01",
    title: "Share your voice",
    description:
      "Paste 3-5 of your best LinkedIn posts. Our AI analyzes your tone, sentence patterns, vocabulary, and rhetorical style to build a Voice Profile unique to you.",
    icon: "Mic",
  },
  {
    num: "02",
    title: "Tell us your focus",
    description:
      "Answer 5 quick questions about your expertise, audience, and what you want to be known for. Takes under 3 minutes.",
    icon: "Target",
  },
  {
    num: "03",
    title: "We write, you review",
    description:
      "Every Monday, a fresh batch of ready-to-publish LinkedIn posts lands in your inbox. Written in your voice, tuned to your audience, sourced from real-time trends in your industry.",
    icon: "PenTool",
  },
  {
    num: "04",
    title: "Copy, paste, grow",
    description:
      "Review the posts, make any tweaks you want, and publish throughout the week. Watch your engagement and pipeline grow.",
    icon: "TrendingUp",
  },
];

export const SAMPLE_OUTPUT: SampleOutputContent = {
  sectionLabel: "SAMPLE OUTPUT",
  heading: "Real posts. Real voice matching.",
  subtext:
    "These are actual outputs from our agent pipeline, generated from a consultant's voice profile.",
  authorName: "Jordan Rivera",
  authorTitle: "Management Consultant | Sample Profile",
  authorInitials: "JR",
  posts: [
    {
      title: "On hiring senior talent",
      content: `I've made 200+ hires in my career. The worst ones all had something in common.

They interviewed beautifully.

The best hires? They asked me uncomfortable questions in the interview. They pushed back on my assumptions. One even told me my job description was wrong.

Here's what 20 years of building teams taught me:

The people who challenge you before they're hired will challenge the status quo after.

The people who tell you what you want to hear in the interview will tell you what you want to hear when the building is on fire.

Hire the person who makes you slightly nervous. That discomfort is signal, not noise.

What's the most unconventional hire you've ever made?`,
      voiceTag: "Voice: Direct, confident, experience-anchored",
    },
    {
      title: "On AI adoption",
      content: `Everyone's talking about AI strategy.

Almost nobody is talking about AI habits.

Strategy is a document. Habits are what people do at 9am on a Tuesday when nobody is watching.

I watched a team spend 6 months on an AI roadmap. Workshops. Consultants. Executive alignment sessions. Beautiful deck.

Know what actually changed their business? One operations manager who started using Claude to draft her weekly reports. Saved 3 hours a week. Her boss noticed. Asked her to show the team.

Within a month, 14 people had adopted it. No strategy deck required.

The organizations winning at AI aren't the ones with the best plans. They're the ones where one person started doing it and the results were undeniable.

What's one AI habit you've built into your actual daily work?`,
      voiceTag: "Voice: Observational, pattern-recognition, narrative",
    },
    {
      title: "On pricing confidence",
      content: `A prospect told me my rates were too high.

I said "You're probably right. For what you need, there are cheaper options."

Then I shut up.

Silence is the most underrated pricing tool in consulting. Most people panic and start discounting. The silence gives the prospect space to reconsider what "too high" actually means.

She called back two days later. Full rate. No negotiation.

What changed? Nothing. She just had time to compare what "cheaper" actually looks like versus what she actually needs.

If you're a consultant reading this: your rate isn't too high. Your prospect's understanding of the problem just isn't deep enough yet.

Price is a function of perceived consequence, not hours.`,
      voiceTag: "Voice: Story-driven, authoritative, conversational",
    },
  ],
};

export const COMPARE: CompareContent = {
  sectionLabel: "WHY BYLINEAGENT",
  heading: "Tools make you work. Ghostwriters cost a fortune.",
  subtext:
    "BylineAgent sits in the gap: done-for-you content at self-serve prices.",
  footnote:
    "*Tools like Taplio, EasyGen, and Supergrow offer AI content generation starting at $65/mo — and you still do the work yourself. BylineAgent delivers the finished product at a lower price than the competition\u2019s AI tier.",
  rows: [
    {
      feature: "Who does the writing?",
      selfServe: "You, with AI suggestions",
      bylineAgent: "The AI agent, fully autonomous",
      ghostwriter: "A human ghostwriter",
    },
    {
      feature: "Voice matching",
      selfServe: "Generic templates",
      bylineAgent: "Custom Voice Profile from your writing",
      ghostwriter: "Learned over weeks of working together",
    },
    {
      feature: "Posts per month",
      selfServe: "Unlimited (you write them)",
      bylineAgent: "20 ready-to-publish posts",
      ghostwriter: "8\u201312 posts typical",
    },
    {
      feature: "Your time investment",
      selfServe: "3\u20135 hours/week",
      bylineAgent: "< 10 minutes/week",
      ghostwriter: "30\u201360 min/week for review calls",
    },
    {
      feature: "Topic research included",
      selfServe: "Some tools offer it",
      bylineAgent: "Yes \u2014 real-time industry research",
      ghostwriter: "Depends on the writer",
    },
    {
      feature: "Monthly cost",
      selfServe: "$65/mo and up for AI features*",
      bylineAgent: "$49/mo",
      ghostwriter: "$1,000\u2013$5,000/mo",
    },
  ],
};

export const PRICING: PricingContent = {
  sectionLabel: "PRICING",
  heading: "One plan. One price.",
  subtext: "No tiers. No upsells. No token limits. Just content that sounds like you.",
  priceNote: "Cancel anytime. 7-day free trial.",
  ctaText: "Start My Free Trial",
  ctaSubtext: "Takes 5 minutes to set up. First posts delivered within 48 hours.",
  features: [
    "20 ready-to-publish LinkedIn posts every month",
    "Custom Voice Profile built from your writing",
    "Real-time topic research in your industry",
    "Quality-checked by a second AI review pass",
    "Delivered in weekly batches every Monday",
    "Edit freely \u2014 posts are yours to tweak before publishing",
  ],
  comparisons: [
    { label: "vs. Ghostwriter", value: "Save $950+/mo" },
    { label: "vs. Content tools", value: "We write it for you" },
    { label: "vs. Doing it yourself", value: "Save 4+ hours/week" },
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Will the posts actually sound like me?",
    answer:
      "That's the whole point. During onboarding, you submit your best LinkedIn writing. Our AI builds a Voice Profile that captures your tone, sentence structure, vocabulary, and rhetorical patterns. Every post is generated against that profile and checked by a second AI pass for voice consistency. If a post doesn't sound like you, flag it and we regenerate it.",
  },
  {
    question: "What if I don't like a post?",
    answer:
      "Edit it. The posts are delivered as plain text \u2014 add a line, cut a paragraph, change the angle, rewrite the hook. They're raw material written in your voice. You're the final editor, and you publish what you want.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT or Claude can write LinkedIn posts. So can you. The question is whether you actually will \u2014 every week, consistently, with voice-matched quality. BylineAgent isn\u2019t a writing tool. It\u2019s a done-for-you system: voice profiling, real-time industry research, multi-step drafting, quality checking, and weekly delivery. You could build all of that yourself with a Claude subscription and four hours of prompt engineering. Most people try, do it once, and never touch it again. We deliver whether you feel like it or not. That consistency is the product.",
  },
  {
    question: "What topics will you write about?",
    answer:
      "During onboarding, you tell us your expertise areas, your audience, and what you want to be known for. Our agent researches real-time trends and news in your field every week and selects topics that are timely and relevant. You can also submit specific topics or upcoming events you want covered.",
  },
  {
    question: "Can I edit the posts before publishing?",
    answer:
      "Absolutely. The posts are delivered as plain text ready to copy into LinkedIn. Add your own spin, cut a line, swap an example. They\u2019re yours. Most customers publish 80% as-is and tweak the rest.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You keep every post we\u2019ve ever delivered. No lock-in, no penalties, no export fees. Cancel from your account settings anytime and your subscription ends at the close of the billing cycle.",
  },
  {
    question: "Am I responsible for reviewing posts before publishing?",
    answer:
      "Yes. BylineAgent delivers draft content for your review and approval. You are responsible for reviewing, editing, and approving all posts before publishing them to LinkedIn. We generate the content; you own the final decision on what goes live under your name.",
  },
];

export const FOOTER: FooterContent = {
  tagline: "Your voice. Your byline. Our agent.",
  disclaimer:
    "All content is delivered as drafts for your review. You are responsible for reviewing and approving posts before publishing.",
  attribution: "By LINCHPIN",
};

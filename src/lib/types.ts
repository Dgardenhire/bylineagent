export interface Brand {
  name: string;
  tagline: string;
  price: number;
  postsPerWeek: number;
}

export interface HeroContent {
  badge: string;
  headline: string[];
  goldLine: string;
  subtext: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { value: string; label: string }[];
}

export interface Step {
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface SamplePost {
  title: string;
  content: string;
  voiceTag: string;
}

export interface SampleOutputContent {
  sectionLabel: string;
  heading: string;
  subtext: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string;
  posts: SamplePost[];
}

export interface CompareRow {
  feature: string;
  selfServe: string;
  bylineAgent: string;
  ghostwriter: string;
}

export interface CompareContent {
  sectionLabel: string;
  heading: string;
  subtext: string;
  footnote: string;
  rows: CompareRow[];
}

export interface PricingContent {
  sectionLabel: string;
  heading: string;
  subtext: string;
  priceNote: string;
  ctaText: string;
  ctaSubtext: string;
  features: string[];
  comparisons: { label: string; value: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterContent {
  tagline: string;
  disclaimer: string;
  attribution: string;
}

export interface NavLink {
  label: string;
  href: string;
}

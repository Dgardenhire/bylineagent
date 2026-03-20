import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-navy pt-32 pb-20 px-6 md:px-12"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, rgba(201,162,39,0.08) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="inline-block rounded-full px-3.5 py-1.5 mb-6 border border-gold/25 bg-gold/[0.12]">
          <span className="font-mono text-[11px] font-medium text-gold tracking-[0.06em]">
            {HERO.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08] mb-5">
          {HERO.headline.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <span className="text-gold">{HERO.goldLine}</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-9">
          {HERO.subtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#sample"
            className="inline-block rounded-[10px] px-8 py-3.5 text-base font-bold text-navy transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C9A227, #B8911F)",
              boxShadow: "0 4px 24px rgba(201,162,39,0.25)",
            }}
          >
            {HERO.primaryCta}
          </a>
          <a
            href="#how-it-works"
            className="inline-block rounded-[10px] px-7 py-3.5 text-base font-semibold text-text-primary border border-white/20 hover:border-gold/50 transition-colors duration-200"
          >
            {HERO.secondaryCta}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-12">
          {HERO.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-extrabold text-gold">{stat.value}</div>
              <div className="text-sm text-text-dim mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

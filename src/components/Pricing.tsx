import { BRAND, PRICING } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-navy-light">
      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <span className="font-mono text-[11px] font-medium text-gold tracking-[0.08em]">
          {PRICING.sectionLabel}
        </span>
        <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mt-3 mb-2">
          {PRICING.heading}
        </h2>
        <p className="text-base text-text-muted mb-10">{PRICING.subtext}</p>

        {/* Pricing card */}
        <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-12 text-left">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-6xl font-extrabold text-text-primary tracking-tight">
              ${BRAND.price}
            </span>
            <span className="text-lg text-text-dim">/month</span>
          </div>
          <p className="text-sm text-text-muted mb-8">{PRICING.priceNote}</p>

          {/* Feature list */}
          <div className="flex flex-col gap-3.5 mb-9">
            {PRICING.features.map((feature) => (
              <div key={feature} className="flex gap-3 items-start">
                <span className="text-gold text-base leading-6 shrink-0">&#10003;</span>
                <span className="text-sm text-gray-300 leading-6">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="block w-full text-center rounded-xl py-4 text-lg font-bold text-navy transition-shadow duration-200 hover:shadow-[0_8px_36px_rgba(201,162,39,0.4)]"
            style={{
              background: "linear-gradient(135deg, #C9A227, #B8911F)",
              boxShadow: "0 4px 24px rgba(201,162,39,0.25)",
            }}
          >
            {PRICING.ctaText}
          </a>

          {/* CTA subtext */}
          <p className="text-sm text-text-dim text-center mt-4">
            {PRICING.ctaSubtext}
          </p>
        </div>

        {/* Comparison row */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {PRICING.comparisons.map((c) => (
            <div key={c.label} className="text-center">
              <div className="text-sm font-bold text-gold">{c.value}</div>
              <div className="text-xs text-text-dim mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

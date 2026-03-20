import { Mic, Target, PenTool, TrendingUp, LucideIcon } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Target,
  PenTool,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] font-medium text-gold tracking-[0.08em]">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mt-3">
            Four steps. Five minutes of setup.
          </h2>
        </div>

        {/* Steps grid — 2 columns on md+, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.num}
                className="rounded-xl border border-border-subtle bg-white/[0.03] p-8 hover:border-gold/30 hover:bg-gold/[0.04] transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[13px] font-semibold text-gold">
                    {step.num}
                  </span>
                  {Icon && <Icon size={22} color="#C9A227" strokeWidth={1.75} />}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

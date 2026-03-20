import { BRAND, FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-navy-footer border-t border-border-subtle">
      {/* Top row */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-[5px] flex items-center justify-center text-xs font-extrabold text-navy"
            style={{ background: "linear-gradient(135deg, #C9A227, #E8D48B)" }}
          >
            B
          </div>
          <span className="font-semibold text-[15px] text-text-dim">
            {BRAND.name}
          </span>
        </div>

        {/* Tagline */}
        <span className="text-sm text-text-faint">{FOOTER.tagline}</span>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-text-faint/70 mb-4">{FOOTER.disclaimer}</p>

      {/* LINCHPIN attribution */}
      <p className="text-xs text-text-dim text-right">
        {FOOTER.attribution} —{" "}
        <a
          href="https://linchpin.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light transition-colors duration-200"
        >
          LINCHPIN
        </a>
      </p>
    </footer>
  );
}

import { BRAND, NAV_LINKS } from "@/lib/content";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-navy/92 backdrop-blur-lg border-b border-border-gold">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-extrabold text-navy"
          style={{ background: "linear-gradient(135deg, #C9A227, #E8D48B)" }}
        >
          B
        </div>
        <span className="font-bold text-[18px] text-text-primary tracking-tight">
          {BRAND.name}
        </span>
      </div>

      {/* Nav links — hidden on mobile */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-text-muted hover:text-gold transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#pricing"
        className="inline-block rounded-lg px-5 py-2 text-sm font-semibold text-navy transition-transform duration-150 hover:-translate-y-px"
        style={{ background: "linear-gradient(135deg, #C9A227, #B8911F)" }}
      >
        Start Free Trial
      </a>
    </nav>
  );
}

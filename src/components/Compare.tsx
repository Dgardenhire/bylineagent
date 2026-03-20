import { COMPARE } from "@/lib/content";

export function Compare() {
  return (
    <section id="compare" className="py-24 px-6 md:px-12 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] font-medium text-gold tracking-[0.08em]">
            {COMPARE.sectionLabel}
          </span>
          <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mt-3 mb-2">
            {COMPARE.heading}
          </h2>
          <p className="text-base text-text-muted max-w-xl mx-auto">
            {COMPARE.subtext}
          </p>
        </div>

        {/* Table — overflow-x-auto for mobile */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-[13px] font-semibold text-text-dim border-b border-border-subtle" />
                <th className="p-4 text-center text-[13px] font-semibold text-text-muted tracking-wide border-b border-border-subtle">
                  SELF-SERVE TOOLS
                </th>
                <th className="p-4 text-center text-[13px] font-bold text-gold border-b-2 border-gold bg-gold/[0.06] rounded-t-lg">
                  BYLINEAGENT
                </th>
                <th className="p-4 text-center text-[13px] font-semibold text-text-muted tracking-wide border-b border-border-subtle">
                  HUMAN GHOSTWRITER
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((row) => (
                <tr key={row.feature}>
                  <td className="p-4 text-sm font-semibold text-text-primary border-b border-border-subtle/60">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-sm text-text-muted border-b border-border-subtle/60">
                    {row.selfServe}
                  </td>
                  <td className="p-4 text-center text-sm font-semibold text-text-primary bg-gold/[0.04] border-b border-gold/10">
                    {row.bylineAgent}
                  </td>
                  <td className="p-4 text-center text-sm text-text-muted border-b border-border-subtle/60">
                    {row.ghostwriter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="text-sm italic text-text-muted max-w-xl mx-auto text-center mt-10">
          {COMPARE.footnote}
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] font-medium text-gold tracking-[0.08em]">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mt-3">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-0.5">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className={`w-full text-left py-5 flex justify-between items-center border-b border-border-subtle transition-colors duration-200 ${
                  openIndex === i ? "bg-gold/[0.06]" : ""
                }`}
              >
                <span className="text-base font-semibold text-text-primary pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-gold text-[22px] leading-none shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="py-3 pb-5 border-b border-border-subtle">
                  <p className="text-sm leading-7 text-text-muted">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

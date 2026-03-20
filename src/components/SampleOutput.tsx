"use client";

import { useState } from "react";
import { SAMPLE_OUTPUT } from "@/lib/content";

export function SampleOutput() {
  const [active, setActive] = useState(0);
  const post = SAMPLE_OUTPUT.posts[active];

  return (
    <section id="sample" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] font-medium text-gold tracking-[0.08em]">
            {SAMPLE_OUTPUT.sectionLabel}
          </span>
          <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mt-3 mb-2">
            {SAMPLE_OUTPUT.heading}
          </h2>
          <p className="text-base text-text-muted">{SAMPLE_OUTPUT.subtext}</p>
        </div>

        {/* Tab row */}
        <div className="flex gap-2 mb-6">
          {SAMPLE_OUTPUT.posts.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 rounded-lg px-4 py-3 text-[13px] font-semibold border transition-all duration-200 ${
                active === i
                  ? "bg-gold/15 border-gold/40 text-gold"
                  : "bg-white/[0.04] border-border-subtle text-text-muted hover:text-text-primary"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Post card */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-9">
          {/* Author header */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-[18px] font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #1E3A5F, #2563EB)" }}
            >
              {SAMPLE_OUTPUT.authorInitials}
            </div>
            <div>
              <div className="text-[15px] font-bold text-text-primary">
                {SAMPLE_OUTPUT.authorName}
              </div>
              <div className="text-xs text-text-dim">
                {SAMPLE_OUTPUT.authorTitle}
              </div>
            </div>
          </div>

          {/* Post content */}
          <p className="text-sm leading-7 text-gray-300 whitespace-pre-line mb-5">
            {post.content}
          </p>

          {/* Voice tag */}
          <span className="inline-block bg-gold/[0.08] border border-gold/15 rounded-lg px-4 py-2.5 font-mono text-xs text-gold">
            {post.voiceTag}
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

export function Future({ content }: { content: SiteContent }) {
  return (
    <section id="future" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.future.eyebrow} title={content.future.title} description={content.future.description} />
      <motion.div {...fadeInUp} className="glass-card mt-10 rounded-3xl p-6 md:p-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {content.future.phases.map((phase) => (
            <span key={phase} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-emerald-50/85">
              {phase}
            </span>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {content.future.comparisons.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-emerald-50/80">{item.label}</p>
              <div className="mt-4 flex items-end gap-4">
                <div>
                  <p className="text-xs text-emerald-50/60">Current</p>
                  <p className="text-xl font-semibold text-rose-300">{item.baseline}</p>
                </div>
                <ArrowRight className="mb-1 h-4 w-4 text-[#00FFB2]" />
                <div>
                  <p className="text-xs text-emerald-50/60">Target</p>
                  <p className="text-xl font-semibold text-[#00FFB2]">{item.improved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


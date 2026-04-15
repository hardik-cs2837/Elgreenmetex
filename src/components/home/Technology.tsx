"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

export function Technology({ content }: { content: SiteContent }) {
  return (
    <section id="technology" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.technology.eyebrow} title={content.technology.title} description={content.technology.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#00FFB2]">{content.technology.stageOneTitle}</p>
          <div className="mt-4 space-y-3">
            {content.technology.stageOneSteps.map((step) => (
              <div key={step} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-emerald-50/85">
                {step}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#00FFB2]">{content.technology.stageTwoTitle}</p>
          <div className="mt-4 space-y-3">
            {content.technology.stageTwoSteps.map((step) => (
              <div key={step} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-emerald-50/85">
                {step}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div {...fadeInUp} className="glass-card mt-6 rounded-3xl p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">Animated pipeline flow</p>
        <div className="mt-4 h-2 w-full rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full highlight-line"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {content.technology.highlights.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-emerald-50/80">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


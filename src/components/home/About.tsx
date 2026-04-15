"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

export function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.about.eyebrow} title={content.about.title} description={content.about.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">Animated timeline</p>
          <div className="mt-5 space-y-4">
            {content.about.timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#00FFB2]">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-emerald-50/75">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">Circular infinity loop</p>
          <div className="relative mt-5 flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-black/25">
            <motion.div
              className="absolute h-44 w-72 rounded-[999px] border-[16px] border-[#00FFB2]/70 border-r-[#007BFF]/70"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            />
            <motion.div
              className="absolute h-44 w-72 rotate-180 rounded-[999px] border-[16px] border-[#007BFF]/70 border-r-[#00FFB2]/70"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            />
            <div className="rounded-xl border border-white/15 bg-black/50 px-4 py-2 text-sm text-emerald-50/85">Battery Circular Economy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


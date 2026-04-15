"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, BadgeIndianRupee, Cog, ShieldCheck } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

const iconMap = { ArrowDownToLine, ShieldCheck, Cog, BadgeIndianRupee };

export function Business({ content }: { content: SiteContent }) {
  return (
    <section id="business" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.business.eyebrow} title={content.business.title} description={content.business.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          {content.business.pillars.map((pillar) => (
            <motion.div key={pillar} {...fadeInUp} className="glass-card rounded-2xl p-5 text-sm text-emerald-50/80">
              {pillar}
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {content.business.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] ?? Cog;
              return (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Icon className="h-5 w-5 text-[#00FFB2]" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-50/60">Step {index + 1}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-emerald-50/75">{step.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


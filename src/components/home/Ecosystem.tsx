"use client";

import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Factory, FlaskConical, Pickaxe, Recycle, RefreshCcw, ScanSearch, Truck } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

const iconMap = { Pickaxe, FlaskConical, Factory, BatteryCharging, Truck, ScanSearch, Recycle, RefreshCcw };

export function Ecosystem({ content }: { content: SiteContent }) {
  return (
    <section id="ecosystem" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.ecosystem.eyebrow} title={content.ecosystem.title} description={content.ecosystem.description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.ecosystem.steps.map((step, idx) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap] ?? RefreshCcw;
          return (
            <motion.div
              key={step.title}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: idx * 0.06 }}
              className="group glass-card relative rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[#00FFB2]/40"
            >
              <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-black/25 p-2">
                <Icon className="h-5 w-5 text-[#00FFB2]" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">0{idx + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-[#00FFB2]">{step.subtitle}</p>
              <p className="mt-2 text-sm text-emerald-50/75">{step.text}</p>
              {idx < content.ecosystem.steps.length - 1 ? (
                <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-emerald-100/40 transition-colors group-hover:text-[#00FFB2]" />
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


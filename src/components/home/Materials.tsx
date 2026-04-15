"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

const MaterialsDonut = dynamic(() => import("@/components/home/charts/MaterialsDonut").then((module) => module.MaterialsDonut), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />,
});

export function Materials({ content }: { content: SiteContent }) {
  return (
    <section id="materials" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.materials.eyebrow} title={content.materials.title} description={content.materials.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">{content.materials.chartLabel}</p>
          <div className="mt-4 h-[330px]">
            <MaterialsDonut data={content.materials.donut} />
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">Animated bars</p>
          <div className="mt-4 space-y-3">
            {content.materials.donut.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex justify-between text-sm text-emerald-50/85">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#00FFB2] to-[#007BFF]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(item.value, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-emerald-50/75">
            Black Mass: {content.materials.blackMass}% • Others (plastics, electrolyte, etc.): {content.materials.others}%
          </div>
        </motion.div>
      </div>
    </section>
  );
}


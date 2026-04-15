"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { CountUp, fadeInUp } from "@/components/home/shared";

const particles = [
  { x: "8%", y: "14%", size: 4, delay: 0 },
  { x: "22%", y: "20%", size: 3, delay: 0.3 },
  { x: "36%", y: "12%", size: 5, delay: 0.5 },
  { x: "52%", y: "24%", size: 4, delay: 0.7 },
  { x: "66%", y: "16%", size: 3, delay: 0.9 },
  { x: "80%", y: "18%", size: 4, delay: 1.2 },
  { x: "90%", y: "28%", size: 5, delay: 1.5 },
];

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section id="hero" className="section-anchor mesh-bg relative overflow-hidden px-4 pb-20 pt-[7.5rem] md:px-8 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full bg-[#00FFB2]/75"
            style={{ left: particle.x, top: particle.y, width: particle.size, height: particle.size }}
            animate={{ y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4 + idx * 0.2, repeat: Infinity, delay: particle.delay }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-28 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-[#00FFB2]/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-28 h-[33rem] w-[33rem] -translate-x-1/2 rounded-full border border-[#007BFF]/30"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div {...fadeInUp} className="space-y-8">
          <p className="inline-flex rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#00FFB2]">
            {content.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">{content.hero.title}</h1>
          <p className="max-w-2xl text-lg text-emerald-50/75 md:text-xl">{content.hero.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={content.hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[#00FFB2] px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,255,178,0.35)]"
            >
              {content.hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={content.hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-emerald-50 transition-all hover:-translate-y-0.5 hover:border-[#00FFB2]"
            >
              {content.hero.ctaSecondary.label}
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="animated-border glass-card rounded-3xl p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/60">Impact Snapshot</p>
          <div className="mt-6 grid gap-4">
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all hover:border-[#00FFB2]/60">
                <p className="text-sm text-emerald-100/70">{stat.label}</p>
                <div className="mt-2">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


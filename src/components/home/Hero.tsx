"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Leaf } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { CountUp, fadeInUp } from "@/components/home/shared";
import { MetexLogo } from "@/components/home/MetexLogo";

const particles = [
  { x: "8%", y: "14%", size: 4, delay: 0 },
  { x: "22%", y: "20%", size: 3, delay: 0.3 },
  { x: "36%", y: "12%", size: 5, delay: 0.5 },
  { x: "52%", y: "24%", size: 4, delay: 0.7 },
  { x: "66%", y: "16%", size: 3, delay: 0.9 },
  { x: "80%", y: "18%", size: 4, delay: 1.2 },
  { x: "90%", y: "28%", size: 5, delay: 1.5 },
];

const statIcons = [Zap, Droplets, Leaf];

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section
      id="hero"
      className="section-anchor mesh-bg relative overflow-hidden px-4 pb-24 pt-[7.5rem] md:px-8 md:pt-36"
    >
      {/* Background particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full bg-[#00FFB2]/70"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4 + idx * 0.2, repeat: Infinity, delay: p.delay }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-28 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-[#00FFB2]/20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-28 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-[#007BFF]/15"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        {/* Left — copy */}
        <motion.div {...fadeInUp} className="space-y-8">
          {/* METEX logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex"
          >
            <MetexLogo size={56} showText={true} />
          </motion.div>

          {/* Eyebrow pill */}
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#00FFB2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
            {content.hero.eyebrow}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-[3.5rem]">
            {content.hero.title}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-emerald-50/70 md:text-xl">
            {content.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={content.hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[#00FFB2] px-7 py-3.5 font-semibold text-black transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,255,178,0.4)]"
            >
              {content.hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={content.hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-emerald-50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#00FFB2]/60 hover:bg-white/10"
            >
              {content.hero.ctaSecondary.label}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-emerald-50/50">
            <span className="flex items-center gap-1.5">
              <span className="h-px w-4 bg-emerald-50/30" />
              EPR Certified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-px w-4 bg-emerald-50/30" />
              Govt. Approved
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-px w-4 bg-emerald-50/30" />
              Patent Filed
            </span>
          </div>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          {...fadeInUp}
          className="animated-border glass-card rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <MetexLogo size={24} />
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/60">
              Impact Snapshot
            </p>
          </div>
          <div className="grid gap-4">
            {content.hero.stats.map((stat, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-white/8 bg-black/30 p-4 transition-all hover:border-[#00FFB2]/50 hover:bg-black/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-emerald-100/65">{stat.label}</p>
                    <Icon className="h-4 w-4 text-[#00FFB2]/50 group-hover:text-[#00FFB2] transition-colors" />
                  </div>
                  <div className="mt-2">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Bottom micro-label */}
          <p className="mt-5 text-center text-[10px] uppercase tracking-widest text-emerald-50/30">
            vs. conventional mining & refining
          </p>
        </motion.div>
      </div>
    </section>
  );
}

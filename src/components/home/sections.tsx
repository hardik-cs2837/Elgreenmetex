"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Circle, Sparkles } from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { siteContent } from "@/data/content";

type SiteContent = typeof siteContent;
type Props = {
  content: SiteContent;
};

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55 },
};

const mineralColors = ["#00FFB2", "#00D7B3", "#00B3D9", "#007BFF", "#6F7FFF"];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const decimals = Number.isInteger(value) ? 0 : 1;

  useEffect(() => {
    const duration = 1250;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(progress * value);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  return (
    <span className="text-3xl font-semibold tracking-tight text-[#00FFB2]">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div {...fadeInUp} className="max-w-3xl space-y-4">
      <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#00FFB2] sm:text-sm">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-relaxed text-emerald-50/75 md:text-lg">{description}</p>
    </motion.div>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <motion.div
        className="flex items-center gap-3 rounded-full border border-emerald-200/20 bg-emerald-500/10 px-6 py-4 text-sm uppercase tracking-[0.24em] text-[#00FFB2]"
        initial={{ scale: 0.94, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
      >
        <Circle className="h-3 w-3 fill-[#00FFB2]" />
        Initializing Circular Energy Stack
      </motion.div>
    </motion.div>
  );
}

export function NavBar({ content }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-white md:text-xl">
          {content.brand.name.split(" ")[0]} <span className="text-[#00FFB2]">{content.brand.name.split(" ")[1]}</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-emerald-50/80 lg:flex">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-all hover:text-[#00FFB2]">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-[#00FFB2] transition-all hover:-translate-y-0.5 hover:border-[#00FFB2]"
        >
          Partner
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

export function HeroSection({ content }: Props) {
  return (
    <section id="hero" className="section-anchor mesh-bg relative px-4 pb-20 pt-[7.5rem] md:px-8 md:pt-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-24 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-[#00FFB2]/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-[#007BFF]/30"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div {...fadeInUp} className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#00FFB2]">
            <Sparkles className="h-4 w-4" />
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
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/60">Performance Snapshot</p>
          <div className="mt-7 space-y-5">
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
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

export function EcosystemSection({ content }: Props) {
  return (
    <section id="ecosystem" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle
        eyebrow={content.ecosystem.eyebrow}
        title={content.ecosystem.title}
        description={content.ecosystem.description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/60">{content.ecosystem.flowLabel}</p>
          <div className="relative mt-5 flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-6">
            <motion.div
              className="absolute h-44 w-72 rounded-[999px] border-[18px] border-[#00FFB2]/70 border-r-[#007BFF]/70"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            />
            <motion.div
              className="absolute h-44 w-72 rotate-180 rounded-[999px] border-[18px] border-[#007BFF]/70 border-r-[#00FFB2]/70"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            />
            <div className="z-10 rounded-xl border border-white/15 bg-black/55 px-4 py-2 text-sm text-emerald-50/85">
              Circular Supply Chain
            </div>
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.ecosystem.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.06 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-black/30 p-2">
                  <Icon className="h-5 w-5 text-[#00FFB2]" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Stage 0{idx + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-[#00FFB2]">{step.subtitle}</p>
                <p className="mt-2 text-sm text-emerald-50/70">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MaterialsSection({ content }: Props) {
  

  return (
    <section id="materials" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle
        eyebrow={content.materials.eyebrow}
        title={content.materials.title}
        description={content.materials.description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-50/60">{content.materials.chartLabel}</p>
          <div className="mt-4 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
  <PieChart>
    <Pie
      data={content.materials.minerals}
      dataKey="value"
      nameKey="name"
      innerRadius={72}
      outerRadius={120}
    >
      {content.materials.minerals.map((mineral, index) => (
        <Cell
          key={mineral.name}
          fill={mineralColors[index % mineralColors.length]}
        />
      ))}
    </Pie>
    <Tooltip
      contentStyle={{
        background: "#04150f",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 12,
      }}
    />
  </PieChart>
</ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-50/60">Percentages breakdown</p>
          <ul className="mt-4 space-y-3">
            {content.materials.minerals.map((item) => (
              <li key={item.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3">
                <span className="text-sm text-emerald-50/80">{item.name}</span>
                <span className="font-semibold text-[#00FFB2]">{item.value}%</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Additional cell material data</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.materials.additionalComposition.map((item) => (
                <span key={item.name} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-emerald-50/80">
                  {item.name} {item.value}%
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TechnologySection({ content }: Props) {
  return (
    <section id="technology" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle
        eyebrow={content.technology.eyebrow}
        title={content.technology.title}
        description={content.technology.description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {content.technology.stages.map((stage, idx) => (
              <motion.div
                key={stage}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.06 }}
                className="rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-50/60">Stage {idx + 1}</p>
                <p className="mt-2 text-sm font-semibold text-white">{stage}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 h-2 w-full rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full highlight-line"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <ul className="space-y-4">
            {content.technology.highlights.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-emerald-50/80">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function BusinessSection({ content }: Props) {
  return (
    <section id="business" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle eyebrow={content.business.eyebrow} title={content.business.title} description={content.business.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeInUp} className="grid gap-4">
          {content.business.sidePillars.map((pillar) => (
            <div key={pillar} className="glass-card rounded-2xl p-5 text-sm text-emerald-50/80">
              {pillar}
            </div>
          ))}
        </motion.div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.business.steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Icon className="h-5 w-5 text-[#00FFB2]" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-50/60">{step.title}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{step.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ImpactSection({ content }: Props) {


  return (
    <section id="impact" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle eyebrow={content.impact.eyebrow} title={content.impact.title} description={content.impact.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-4">
          {content.impact.metrics.map((metric) => (
            <motion.div key={metric.label} {...fadeInUp} className="glass-card rounded-2xl p-5">
              <p className="text-sm text-emerald-50/70">{metric.label}</p>
              <div className="mt-2">
                <CountUp value={metric.value} suffix={` ${metric.suffix}`} />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-50/60">GHG comparison charts</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[content.impact.ghgComparison, content.impact.reuseComparison].map((dataset, index) => {
              const chartData = dataset.map((entry) => ({ name: entry.name, value: entry.value }));
              return (
                <div key={index} className="h-[240px] rounded-2xl border border-white/10 bg-black/25 p-3">
                  <ResponsiveContainer width="100%" height="100%">
  <BarChart data={chartData}>
    <XAxis dataKey="name" tick={{ fill: "#b5d8cf", fontSize: 11 }} />
    <YAxis tick={{ fill: "#b5d8cf", fontSize: 11 }} />
    <Tooltip
      contentStyle={{
        background: "#04150f",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 12,
      }}
    />
    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
      {chartData.map((entry, idx) => (
        <Cell
          key={entry.name}
          fill={idx === 0 ? "#007BFF" : "#00FFB2"}
        />
      ))}
    </Bar>
  </BarChart>
</ResponsiveContainer>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FutureSection({ content }: Props) {
  return (
    <section id="future" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle eyebrow={content.future.eyebrow} title={content.future.title} description={content.future.description} />
      <motion.div {...fadeInUp} className="glass-card mt-10 rounded-3xl p-6 md:p-8">
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
                  <p className="text-xs text-emerald-50/60">Recycled pathway</p>
                  <p className="text-xl font-semibold text-[#00FFB2]">{item.improved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {content.future.processLabels.map((label) => (
            <span key={label} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-emerald-50/85">
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function TeamSection({ content }: Props) {
  return (
    <section id="team" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle eyebrow={content.team.eyebrow} title={content.team.title} description={content.team.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {content.team.members.map((member, idx) => (
          <motion.article
            key={member.name}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: idx * 0.07 }}
            className="glass-card rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/55">{member.role}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{member.name}</h3>
            <p className="mt-2 text-sm text-emerald-50/75">{member.bio}</p>
          </motion.article>
        ))}
      </div>
      <motion.div {...fadeInUp} className="glass-card mt-5 rounded-2xl p-4 text-center text-xl font-semibold text-[#00FFB2]">
        {content.team.teammates}
      </motion.div>
    </section>
  );
}

export function LegalSection({ content }: Props) {
  return (
    <section id="legal" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionTitle eyebrow={content.legal.eyebrow} title={content.legal.title} description={content.legal.company} />
      <motion.div {...fadeInUp} className="glass-card mt-10 rounded-3xl p-6 md:p-8">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Incorporated</dt>
            <dd className="mt-1 text-white">{content.legal.incorporated}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Location</dt>
            <dd className="mt-1 text-white">{content.legal.location}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Authorized Capital</dt>
            <dd className="mt-1 text-white">{content.legal.authorizedCapital}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Paid-up Capital</dt>
            <dd className="mt-1 text-white">{content.legal.paidUpCapital}</dd>
          </div>
        </dl>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Directors</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-emerald-50/85">
            {content.legal.directors.map((director) => (
              <li key={director}>{director}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

type ContactSectionProps = Props & {
  onSubmitted: () => void;
};

export function ContactSection({ content, onSubmitted }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      onSubmitted();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-anchor mx-auto max-w-5xl px-4 pb-[4.5rem] pt-[5.5rem] md:px-8">
      <motion.div {...fadeInUp} className="animated-border glass-card rounded-3xl p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#00FFB2]">{content.contact.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{content.contact.title}</h2>
        <p className="mt-3 max-w-2xl text-emerald-50/75">{content.contact.description}</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            required
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Name"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2]"
          />
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Email"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2]"
          />
          <input
            value={formData.company}
            onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
            placeholder="Company"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2] md:col-span-2"
          />
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Message"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2] md:col-span-2"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00FFB2] px-5 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(0,255,178,0.35)] disabled:cursor-not-allowed disabled:opacity-70 md:w-fit"
          >
            {status === "loading" ? "Sending..." : content.contact.buttonLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          {status === "success" && <p className="text-sm text-emerald-200 md:col-span-2">{content.contact.successMessage}</p>}
          {status === "error" && <p className="text-sm text-rose-300 md:col-span-2">{content.contact.errorMessage}</p>}
        </form>
      </motion.div>
    </section>
  );
}

export function Footer({ content }: Props) {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="border-t border-white/10 px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-emerald-50/65 md:flex-row">
        <p>
          © {year} {content.brand.legalName}. {content.footer.statement}
        </p>
        <p>{content.footer.sdg.join(" • ")}</p>
      </div>
    </footer>
  );
}

export function HomeFrame({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative overflow-x-clip text-emerald-50">
      {isLoading && <LoadingScreen />}
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left highlight-line" />
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB2]/10 blur-3xl md:block"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: "spring", damping: 30, stiffness: 140 }}
      />
      {children}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[6%] top-[15%] h-60 w-60 rounded-full bg-[#00FFB2]/8 blur-3xl" />
        <div className="absolute right-[8%] top-[38%] h-80 w-80 rounded-full bg-[#007BFF]/10 blur-3xl" />
      </div>
    </div>
  );
}


"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Circle,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import {
  businessFlow,
  ecosystemSteps,
  heroStats,
  impactMetrics,
  impactTrend,
  materialComposition,
  navItems,
  processPipeline,
  teamMembers,
  timelineData,
} from "@/data/elgreen";

const chartColors = ["#00FFB2", "#00DDA8", "#00B6E6", "#007BFF", "#3D8AFF", "#8CB5FF"];

const fadeInUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.55 },
};

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  return (
    <span className="text-3xl font-semibold tracking-tight text-[#00FFB2]">
      {count}
      {suffix}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div {...fadeInUp} className="max-w-3xl space-y-4">
      <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#00FFB2]">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-relaxed text-emerald-50/70 md:text-lg">{description}</p>
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
        Initializing Circular Intelligence
      </motion.div>
    </motion.div>
  );
}

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative overflow-x-clip text-emerald-50">
      {isLoading && <LoadingScreen />}

      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left highlight-line" />
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB2]/10 blur-3xl md:block"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: "spring", damping: 30, stiffness: 140 }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-white md:text-xl">
            Elgreen <span className="text-[#00FFB2]">Metex</span>
          </a>
          <div className="hidden items-center gap-5 text-sm text-emerald-50/80 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-all hover:text-[#00FFB2]">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-[#00FFB2] transition-all hover:-translate-y-0.5 hover:border-[#00FFB2]"
          >
            Investor Deck
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="hero" className="section-anchor relative grid-bg px-4 pb-20 pt-[7.5rem] md:px-8 md:pt-36">
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
                <Leaf className="h-4 w-4" /> Circular Battery Intelligence
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Powering the Future with Circular Battery Intelligence
              </h1>
              <p className="max-w-2xl text-lg text-emerald-50/75 md:text-xl">
                Recovering critical materials. Redefining energy sustainability. Elgreen Metex closes the gap between
                battery demand and responsible resource recovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#technology"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00FFB2] px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,255,178,0.35)]"
                >
                  Explore Technology
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-emerald-50 transition-all hover:-translate-y-0.5 hover:border-[#00FFB2]"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="animated-border glass-card rounded-3xl p-6 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/60">Performance Snapshot</p>
              <div className="mt-8 space-y-6">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="group rounded-2xl border border-white/10 bg-black/30 p-4 transition-all hover:border-[#00FFB2]/60">
                    <p className="text-sm text-emerald-100/70">{stat.label}</p>
                    <div className="mt-2 flex items-end gap-2">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Why Elgreen Exists"
            title="From Battery Waste Crisis to Circular Value Creation"
            description="As EV adoption scales, battery waste and mineral volatility threaten energy security. Elgreen Metex was built to transform spent batteries into strategic resources—restoring lithium, nickel, cobalt, manganese, and graphite back into the supply chain."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-5 transition-all hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#00FFB2]">{item.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-emerald-50/70">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="ecosystem" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Ecosystem Flow"
            title="One Continuous Loop. Eight Critical Stages."
            description="Our circular model is engineered as a systems pipeline—capturing value from each transition across extraction, usage, collection, and regeneration."
          />
          <div className="mt-12 overflow-x-auto pb-2">
            <div className="flex w-max gap-5 pr-4">
              {ecosystemSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: idx * 0.06 }}
                    className="glass-card group relative w-[290px] rounded-2xl p-5 transition-all hover:-translate-y-1"
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-2">
                      <Icon className="h-5 w-5 text-[#00FFB2]" />
                    </div>
                    <p className="text-sm text-emerald-50/60">0{idx + 1}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-emerald-50/70">{step.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="technology" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Core Technology"
            title="Proprietary Process Architecture for High-Purity Recovery"
            description="Elgreen Metex blends process control and chemistry precision to deliver up to 99%+ purity extraction while avoiding harmful emissions."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-4">
                {processPipeline.map((step, idx) => (
                  <motion.div
                    key={step}
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: idx * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center transition-all hover:border-[#00FFB2]/50"
                  >
                    <p className="text-xs text-emerald-50/55">Stage {idx + 1}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{step}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-7 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full highlight-line"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                />
              </div>
            </div>
            <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
              <ul className="space-y-5">
                {[
                  "Closed-loop chemistry control for stable metal recovery yields.",
                  "Low-emission treatment chain aligned with ESG-first operations.",
                  "Intelligent material tracking across lifecycle touchpoints.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-[#00FFB2]" />
                    <span className="text-sm text-emerald-50/75">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="materials" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Material Breakdown"
            title="Critical Minerals Recovered for the Next Battery Cycle"
            description="A visual profile of key battery constituents that drive circular value—from lithium and nickel to cobalt, manganese, and graphite."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <motion.div {...fadeInUp} className="glass-card rounded-3xl p-4 md:p-8">
              <div className="h-[320px]">
                {isMounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={materialComposition} dataKey="value" nameKey="name" innerRadius={75} outerRadius={120} paddingAngle={3}>
                        {materialComposition.map((entry, index) => (
                          <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ background: "#04150f", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />
                )}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
              <ul className="space-y-3">
                {materialComposition.map((item) => (
                  <li key={item.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3">
                    <span className="text-sm text-emerald-50/80">{item.name}</span>
                    <span className="font-semibold text-[#00FFB2]">{item.value}%</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="impact" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Impact / ESG"
            title="Measured Sustainability at Industrial Scale"
            description="Our operating model protects resources and cuts emissions while building strategic material security for clean energy manufacturing."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {impactMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: idx * 0.07 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <p className="text-sm text-emerald-50/70">{metric.label}</p>
                  <div className="mt-2">
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeInUp} className="glass-card rounded-3xl p-5 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-50/55">Carbon Savings Progression</p>
              <div className="mt-4 h-[280px]">
                {isMounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={impactTrend}>
                      <defs>
                        <linearGradient id="impactFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00FFB2" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="#00FFB2" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="savings" stroke="#00FFB2" strokeWidth={2.5} fill="url(#impactFill)" />
                      <Tooltip contentStyle={{ background: "#04150f", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="business" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Business Model"
            title="Hub & Spoke Network for National Scale"
            description="Regional collection spokes feed centralized processing hubs, enabling cost-efficient throughput and consistent quality of recovered materials."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4">
              {businessFlow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: idx * 0.06 }}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 text-[#00FFB2]" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-emerald-50/70">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
              <div className="relative h-full min-h-[280px] rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-50/60">India Scalability Map</p>
                <MapPinned className="mt-6 h-8 w-8 text-[#00FFB2]" />
                <div className="mt-6 space-y-3">
                  {["North Hub", "West Hub", "South Hub", "East Collection Corridor"].map((node, index) => (
                    <div key={node} className="flex items-center gap-3 text-sm text-emerald-50/80">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#00FFB2]" />
                      {node}
                      {index < 3 && <span className="ml-auto text-xs text-emerald-50/50">Active rollout</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="future" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Future Vision"
            title="From Recycling to Re-Manufacturing Leadership"
            description="Elgreen Metex is building towards cathode manufacturing from recovered feedstock, compressing raw material cost dependency from legacy levels toward resilient circular economics."
          />
          <motion.div {...fadeInUp} className="glass-card mt-10 rounded-3xl p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-50/60">Cost Dependency</p>
                <div className="mt-6 flex items-end gap-4">
                  <div>
                    <p className="text-xs text-emerald-50/60">Traditional</p>
                    <p className="text-3xl font-bold text-rose-300">61%</p>
                  </div>
                  <ArrowRight className="mb-1 h-5 w-5 text-[#00FFB2]" />
                  <div>
                    <p className="text-xs text-emerald-50/60">Circular Target</p>
                    <p className="text-3xl font-bold text-[#00FFB2]">17%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-emerald-50/75">
                  Strategic roadmap includes advanced precursor and cathode material pathways powered by recovered lithium, nickel, and cobalt streams.
                </p>
                <div className="mt-4 flex gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Recycled Feedstock</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Battery-Grade Output</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="team" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
          <SectionTitle
            eyebrow="Leadership"
            title="Execution-Focused Team for Industrial Scale-Up"
            description="A multidisciplinary operating team combining clean-tech execution, process engineering, supply chain strategy, and disciplined financial governance."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.role}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.08 }}
                className="glass-card group rounded-2xl p-5 transition-all hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/55">{member.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-emerald-50/70">{member.focus}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-anchor mx-auto max-w-5xl px-4 pb-[4.5rem] pt-[5.5rem] md:px-8">
          <motion.div {...fadeInUp} className="animated-border glass-card rounded-3xl p-6 md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Join the Circular Energy Revolution</h2>
            <p className="mt-3 max-w-2xl text-emerald-50/70">
              Whether you are an EV OEM, battery manufacturer, strategic investor, or sustainability partner, Elgreen
              Metex is ready to build the future of closed-loop energy materials with you.
            </p>
            <form className="mt-8 grid gap-4 md:grid-cols-2">
              {["Name", "Email", "Company"].map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "email" : "text"}
                  placeholder={field}
                  className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2]"
                />
              ))}
              <textarea
                placeholder="Message"
                rows={5}
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2] md:col-span-2"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00FFB2] px-5 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(0,255,178,0.35)] md:w-fit"
              >
                Submit Inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-emerald-50/60 md:px-8">
        © {year} Elgreen Metex Private Limited. Built for a circular energy future.
      </footer>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[6%] top-[15%] h-60 w-60 rounded-full bg-[#00FFB2]/8 blur-3xl" />
        <div className="absolute right-[8%] top-[38%] h-80 w-80 rounded-full bg-[#007BFF]/10 blur-3xl" />
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { SiteContent } from "@/components/home/types";
import { CountUp, SectionHeading, fadeInUp } from "@/components/home/shared";

const ESGComparison = dynamic(() => import("@/components/home/charts/ESGComparison").then((module) => module.ESGComparison), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />,
});

export function ESG({ content }: { content: SiteContent }) {
  const [doc, setDoc] = useState("battery");
  const [open, setOpen] = useState(false);
  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);
  return (
    <section id="impact" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.esg.eyebrow} title={content.esg.title} description={content.esg.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {content.esg.metrics.map((metric) => (
            <motion.div key={metric.label} {...fadeInUp} className="glass-card rounded-2xl p-4">
              <p className="text-sm text-emerald-50/75">{metric.label}</p>
              <div className="mt-2">
                <CountUp value={metric.value} suffix={metric.suffix ? ` ${metric.suffix}` : ""} />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">GHG / CO2 comparison</p>
          <div className="mt-4 h-[290px] rounded-xl border border-white/10 bg-black/20 p-2">
            <ESGComparison data={content.esg.comparisonBars} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.esg.sdgBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-emerald-50/80">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
  {...fadeInUp}
  className="mt-16 text-center"
>
  <h3 className="text-2xl font-semibold mb-8">
    Compliance & Certifications
  </h3>

 {/* Buttons */}
<div className="flex justify-center gap-4 mb-6 flex-wrap">
  <button
    onClick={() => setDoc("battery")}
    className={`px-5 py-2 rounded-xl transition ${
      doc === "battery"
        ? "bg-[#00FFB2] text-black"
        : "border border-white/20 hover:border-[#00FFB2]/40"
    }`}
  >
    Battery Authorization
  </button>

  <button
    onClick={() => setDoc("noc")}
    className={`px-5 py-2 rounded-xl transition ${
      doc === "noc"
        ? "bg-[#00FFB2] text-black"
        : "border border-white/20 hover:border-[#00FFB2]/40"
    }`}
  >
    Transformer NOC
  </button>
</div>

<div className="w-full mt-8">
  <motion.div
    key={doc}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-center mt-8">
  <motion.div
    className="glass-card p-6 rounded-2xl max-w-md w-full text-left"
  >
    <h4 className="text-lg font-semibold">
      {doc === "battery" ? "Battery Authorization" : "Transformer NOC"}
    </h4>

    <p className="text-sm text-emerald-100/70 mt-1">
      Issued by UP Pollution Control Board
    </p>

    <div className="mt-5 flex gap-3">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-[#00FFB2] text-black rounded-lg"
      >
        View Certificate
      </button>

      <a
        href={
          doc === "battery"
            ? "/assets/pdf/Battery.pdf"
            : "/assets/pdf/NOC.pdf"
        }
        target="_blank"
        className="px-4 py-2 border border-white/20 rounded-lg"
      >
        Download
      </a>
        
  
      
    </div>
  </motion.div>
</div>
  </motion.div>
</div>
  
</motion.div>

    
    {open && (
  <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
    
    <div className="relative w-full max-w-5xl h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10">
      
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/10 rounded-lg"
      >
        Close
      </button>

      <iframe
        src={
          doc === "battery"
            ? "/assets/pdf/Battery.pdf"
            : "/assets/pdf/NOC.pdf"
        }
        className="w-full h-full"
      />
    </div>
  </div>
)}
 
    </section>
  );
}


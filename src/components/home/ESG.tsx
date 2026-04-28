"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  FileText,
  CheckCircle,
  Download,
  Eye,
  X,
  ExternalLink,
  Award,
  Droplets,
  Wind,
  Leaf,
  Zap,
  Activity,
  Ban,
} from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { CountUp, SectionHeading, fadeInUp } from "@/components/home/shared";

const ESGComparison = dynamic(
  () =>
    import("@/components/home/charts/ESGComparison").then((m) => m.ESGComparison),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />
    ),
  }
);

/* ─── Certificate data ─────────────────────────────────────── */
const CERTIFICATES = [
  {
    id: "battery",
    title: "Registration For Recycling Of Waste Battery",
    subtitle: "EPR-BWM Authorization",
    issuer: "UP Pollution Control Board",
    issuedBy: "Government of Uttar Pradesh",
    highlight: "Valid for 5 Years · Till 2029",
    rule: "Battery Waste Management Rules, 2022",
    badge: "Gov. Certified",
    pdfPath: "/assets/pdf/Battery.pdf",
    icon: "shield" as const,
    tags: ["EPR Compliant", "BWM 2022"],
  },
  {
    id: "noc",
    title: "Transformer NOC",
    subtitle: "Electrical Safety Inspection",
    issuer: "Electrical Safety Inspectorate, UP",
    issuedBy: "Government of Uttar Pradesh",
    highlight: "630 KVA, 11 kV — Approved",
    rule: "Transformer Capacity Clearance",
    badge: "Gov. Approved",
    pdfPath: "/assets/pdf/NOC.pdf",
    icon: "file" as const,
    tags: ["Electrical Safety", "Transformer Cert."],
  },
] as const;

type Certificate = (typeof CERTIFICATES)[number];

/* ─── Metric icon map ───────────────────────────────────────── */
const metricIcons = [Droplets, Wind, Leaf, Activity, Zap, Ban];

/* ─── Certificate Card ─────────────────────────────────────── */
function CertificateCard({
  cert,
  onView,
}: {
  cert: Certificate;
  onView: (c: Certificate) => void;
}) {
  return (
    <div className="p-4 border rounded-xl">
      <p>{cert.title}</p>
      <button onClick={() => onView(cert)}>View</button>
    </div>
  );
}



/* ─── Certificate Modal ─────────────────────────────────────── */
function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certificate | null;
  onClose: () => void;
}) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (cert) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [cert]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#020d0a]/95 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">
              <div className="flex items-center gap-3">
                {cert.icon === "shield" ? (
                  <Shield className="h-5 w-5 text-[#00FFB2]" />
                ) : (
                  <FileText className="h-5 w-5 text-[#00FFB2]" />
                )}
                <div>
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <p className="text-xs text-emerald-50/55">{cert.issuer}</p>
                </div>
                <span className="ml-2 rounded-full border border-[#00FFB2]/30 bg-[#00FFB2]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#00FFB2]">
                  {cert.badge}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cert.pdfPath}
                  download
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-emerald-50/75 transition-all hover:border-white/30"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-emerald-50/75 transition-all hover:border-white/30"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open
                </a>
                <button
                  onClick={onClose}
                  id="close-certificate-modal"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-emerald-50/70 transition-all hover:border-white/30 hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-black/50" style={{ minHeight: "58vh" }}>
              <iframe
                src={`${cert.pdfPath}#toolbar=0&navpanes=0`}
                className="h-full w-full"
                style={{ minHeight: "58vh", border: "none" }}
                title={cert.title}
              />
            </div>

            {/* Modal footer */}
            <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-5 py-3">
              <CheckCircle className="h-3.5 w-3.5 text-[#00FFB2]" />
              <span className="text-xs text-emerald-50/50">
                {cert.badge} · {cert.issuer} · {cert.highlight}
              </span>
              {/* Mobile download */}
              <div className="ml-auto flex gap-2 sm:hidden">
                <a href={cert.pdfPath} download className="flex items-center gap-1 text-xs text-[#00FFB2]">
                  <Download className="h-3.5 w-3.5" /> Download
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main ESG section ──────────────────────────────────────── */

export function ESG({ content }: { content: SiteContent }) {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const [doc, setDoc] = useState("battery");
  const [open, setOpen] = useState(false);

  return (
    <section
      id="impact"
      className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8"
    >
      <SectionHeading
        eyebrow={content.esg.eyebrow}
        title={content.esg.title}
        description={content.esg.description}
      />

      {/* ── Main 2-col grid ── */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">

        {/* Left — metrics + chart */}
        <div className="space-y-6">
          {/* Metrics grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {content.esg.metrics.map((metric, i) => {
              const Icon = metricIcons[i % metricIcons.length];
              return (
                <motion.div
                  key={metric.label}
                  {...fadeInUp}
                  whileHover={{ y: -2 }}
                  className="glass-card group rounded-2xl p-5 transition-all duration-200 hover:border-[#00FFB2]/30 hover:shadow-[0_4px_24px_rgba(0,255,178,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.16em] text-emerald-50/65">
                      {metric.label}
                    </p>
                    <Icon className="h-4 w-4 text-[#00FFB2]/50 group-hover:text-[#00FFB2] transition-colors" />
                  </div>
                  <div className="mt-3">
                    <CountUp
                      value={metric.value}
                      suffix={metric.suffix ? ` ${metric.suffix}` : ""}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GHG chart */}
          <motion.div {...fadeInUp} className="glass-card rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/55">
              GHG / CO₂ Comparison
            </p>
            <div className="mt-4 h-[270px] rounded-xl border border-white/8 bg-black/20 p-2">
              <ESGComparison data={content.esg.comparisonBars} />
            </div>
          </motion.div>

          {/* SDG Badges */}
          <motion.div {...fadeInUp} className="flex flex-wrap gap-2">
            {content.esg.sdgBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-emerald-50/75 transition-colors hover:border-[#00FFB2]/40 hover:text-emerald-50"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Compliance & Certifications */}
        <div className="space-y-5 lg:sticky lg:top-[88px]">
          {/* Panel header */}
          <motion.div {...fadeInUp} className="space-y-1">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#00FFB2]">
              <Shield className="h-3.5 w-3.5" />
              Compliance & Certifications
            </p>
            <p className="text-sm text-emerald-50/55">
              Government-issued credentials validating our operations.
            </p>
          </motion.div>

          {/* Certificate cards */}
          {CERTIFICATES.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onView={setActiveCert} />
          ))}

          {/* Bottom trust note */}
          <motion.div
            {...fadeInUp}
            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-xs text-emerald-50/50"
          >
            <CheckCircle className="mb-1.5 h-4 w-4 text-[#00FFB2]" />
            All certifications are government-issued and verifiable. Elgreen Metex
            operates in full compliance with Indian environmental and electrical
            regulations.
          </motion.div>
        </div>
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
    Registration For Recycling Of Waste Battery
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
      {doc === "battery" ? "Registration For Recycling Of Waste Battery" : "Transformer NOC"}
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
<div
  className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
  onClick={() => setOpen(false)}  // 👈 ADD THIS
>
    
   <div
  className="relative w-full max-w-5xl h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10"
  onClick={(e) => e.stopPropagation()}  // 👈 ADD THIS
>
      
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 z-50 px-3 py-1 bg-black/60 text-white rounded-lg backdrop-blur"
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
 <CertificateModal
  cert={activeCert}
  onClose={() => setActiveCert(null)}
/>
    </section>
  );
}

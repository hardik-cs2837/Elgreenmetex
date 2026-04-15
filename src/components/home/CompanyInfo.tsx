"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

export function CompanyInfo({ content }: { content: SiteContent }) {
  return (
    <section id="company-info" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading
        eyebrow={content.companyInfo.eyebrow}
        title={content.companyInfo.title}
        description="Verified legal details for investor trust and governance confidence."
      />
      <motion.div {...fadeInUp} className="glass-card mt-10 rounded-3xl p-6 md:p-8">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Incorporated</dt>
            <dd className="mt-1 text-white">{content.companyInfo.incorporated}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Location</dt>
            <dd className="mt-1 text-white">{content.companyInfo.location}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Authorized Capital</dt>
            <dd className="mt-1 text-white">{content.companyInfo.authorizedCapital}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Paid-up Capital</dt>
            <dd className="mt-1 text-white">{content.companyInfo.paidUpCapital}</dd>
          </div>
        </dl>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/60">Directors</p>
          <ul className="mt-2 space-y-2 text-sm text-emerald-50/85">
            {content.companyInfo.directors.map((director) => (
              <li key={director.din} className="rounded-lg border border-white/10 bg-black/20 p-3">
                {director.name} (DIN: {director.din})
              </li>
            ))}
          </ul>
        </div>
        <a
          href={content.companyInfo.downloadFile}
          download
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#00FFB2]/40 bg-[#00FFB2]/15 px-5 py-2.5 text-sm font-medium text-[#00FFB2] transition-all hover:-translate-y-0.5 hover:border-[#00FFB2]"
        >
          <Download className="h-4 w-4" />
          {content.companyInfo.downloadLabel}
        </a>
      </motion.div>
    </section>
  );
}


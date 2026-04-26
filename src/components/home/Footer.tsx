"use client";

import type { SiteContent } from "@/components/home/types";
import { MetexLogo } from "@/components/home/MetexLogo";

export function Footer({ content }: { content: SiteContent }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/8 bg-black/20 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <MetexLogo size={28} showText={false} />
            <div>
              <p className="text-sm font-semibold text-white">{content.brand.legalName}</p>
              <p className="text-xs text-emerald-50/45">{content.brand.tagline}</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-emerald-50/50">
            {content.navigation.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#00FFB2]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-rule my-6" />

        {/* Bottom row */}
        <div className="flex flex-col justify-between gap-3 text-xs text-emerald-50/40 md:flex-row">
          <p>
            © {year} {content.brand.legalName}. {content.footer.statement}
          </p>
          <p className="leading-relaxed">{content.footer.sdg.join(" • ")}</p>
        </div>
      </div>
    </footer>
  );
}

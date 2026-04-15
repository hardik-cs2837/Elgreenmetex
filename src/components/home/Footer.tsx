"use client";

import type { SiteContent } from "@/components/home/types";

export function Footer({ content }: { content: SiteContent }) {
  const year = new Date().getFullYear();
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


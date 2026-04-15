"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import type { SiteContent } from "@/components/home/types";

export function Navbar({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-white md:text-xl">
          {content.brand.name.split(" ")[0]} <span className="text-[#00FFB2]">{content.brand.name.split(" ")[1]}</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-emerald-50/80 lg:flex">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-[#00FFB2]">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-[#00FFB2] transition-all hover:-translate-y-0.5 hover:border-[#00FFB2] md:inline-flex"
        >
          Partner
          <ArrowRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-black/75 px-4 py-4 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {content.navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-emerald-50/85" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { MetexLogo } from "@/components/home/MetexLogo";

export function Navbar({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <MetexLogo size={32} showText={false} />
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-[#00FFB2] transition-colors">
              {content.brand.name.split(" ")[0]}{" "}
              <span className="text-[#00FFB2]">{content.brand.name.split(" ")[1]}</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-50/40 mt-0.5">
              Circular Intelligence
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 text-sm text-emerald-50/75 lg:flex">
          {content.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-[#00FFB2]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-[#00FFB2]/40 bg-[#00FFB2]/10 px-4 py-2 text-sm font-medium text-[#00FFB2] transition-all hover:-translate-y-0.5 hover:border-[#00FFB2] hover:bg-[#00FFB2]/20 hover:shadow-[0_4px_20px_rgba(0,255,178,0.2)] md:inline-flex"
        >
          Partner With Us
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-white lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black/85 backdrop-blur-xl px-4 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {content.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm text-emerald-50/80 transition-colors hover:bg-white/5 hover:text-[#00FFB2]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[#00FFB2]/40 bg-[#00FFB2]/10 py-3 text-sm font-medium text-[#00FFB2]"
                onClick={() => setOpen(false)}
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

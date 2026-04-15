"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Circle } from "lucide-react";
import { siteContent } from "@/data/content";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Technology } from "@/components/home/Technology";
import { Materials } from "@/components/home/Materials";
import { ESG } from "@/components/home/ESG";
import { Business } from "@/components/home/Business";
import { Future } from "@/components/home/Future";
import { Team } from "@/components/home/Team";
import { CompanyInfo } from "@/components/home/CompanyInfo";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24 });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative overflow-x-clip text-emerald-50">
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
      ) : null}
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left highlight-line" />
      <motion.div
        className="custom-cursor pointer-events-none fixed z-0 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00FFB2]/60 bg-[#00FFB2]/15 md:block"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: "spring", damping: 30, stiffness: 160 }}
      />
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB2]/10 blur-3xl md:block"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: "spring", damping: 35, stiffness: 120 }}
      />
      <Navbar content={siteContent} />
      <main className="relative z-10">
        <Hero content={siteContent} />
        <About content={siteContent} />
        <Ecosystem content={siteContent} />
        <Technology content={siteContent} />
        <Materials content={siteContent} />
        <ESG content={siteContent} />
        <Business content={siteContent} />
        <Future content={siteContent} />
        <Team content={siteContent} />
        <CompanyInfo content={siteContent} />
        <Contact content={siteContent} />
      </main>
      <Footer content={siteContent} />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[6%] top-[15%] h-60 w-60 rounded-full bg-[#00FFB2]/8 blur-3xl" />
        <div className="absolute right-[8%] top-[38%] h-80 w-80 rounded-full bg-[#007BFF]/10 blur-3xl" />
      </div>
    </div>
  );
}


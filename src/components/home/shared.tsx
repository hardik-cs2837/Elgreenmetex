"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
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

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
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


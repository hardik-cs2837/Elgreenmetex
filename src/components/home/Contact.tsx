"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { fadeInUp } from "@/components/home/shared";

export function Contact({ content }: { content: SiteContent }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-anchor mx-auto max-w-5xl px-4 pb-[4.5rem] pt-[5.5rem] md:px-8">
      <motion.div {...fadeInUp} className="animated-border glass-card rounded-3xl p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#00FFB2]">{content.contact.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{content.contact.title}</h2>
        <p className="mt-3 max-w-2xl text-emerald-50/75">{content.contact.description}</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            required
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Name"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2]"
          />
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Email"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2]"
          />
          <input
            value={formData.company}
            onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
            placeholder="Company"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2] md:col-span-2"
          />
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Message"
            className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-emerald-50/40 focus:border-[#00FFB2] md:col-span-2"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00FFB2] px-5 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(0,255,178,0.35)] disabled:cursor-not-allowed disabled:opacity-70 md:w-fit"
          >
            {status === "loading" ? "Sending..." : content.contact.buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
          {status === "success" ? <p className="text-sm text-emerald-200 md:col-span-2">{content.contact.successMessage}</p> : null}
          {status === "error" ? <p className="text-sm text-rose-300 md:col-span-2">{content.contact.errorMessage}</p> : null}
        </form>
      </motion.div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { SiteContent } from "@/components/home/types";
import { SectionHeading, fadeInUp } from "@/components/home/shared";

export function Team({ content }: { content: SiteContent }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="team" className="section-anchor mx-auto max-w-7xl px-4 py-[5.5rem] md:px-8">
      <SectionHeading eyebrow={content.team.eyebrow} title={content.team.title} description={content.team.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {content.team.members.map((member, idx) => {
          const isOpen = expanded === member.name;
          return (
            <motion.article
              key={member.name}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: idx * 0.07 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-50/55">{member.role}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-emerald-50/80">{member.shortBio}</p>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-2 text-sm text-[#00FFB2]"
                onClick={() => setExpanded((prev) => (prev === member.name ? null : member.name))}
              >
                {isOpen ? "Hide details" : "Read full profile"}
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {isOpen ? (
                <div className="mt-4 space-y-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-emerald-50/75">
                  {member.longBio.split("\n\n").map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </motion.article>
          );
        })}
      </div>
      <motion.div {...fadeInUp} className="glass-card mt-5 rounded-2xl p-4 text-center text-xl font-semibold text-[#00FFB2]">
        {content.team.teammates}
      </motion.div>
    </section>
  );
}


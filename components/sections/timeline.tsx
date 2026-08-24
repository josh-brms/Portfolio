"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { TIMELINE } from "@/lib/data";
import type { AccentToken } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";

const DOT_BG: Record<AccentToken, string> = {
  accent: "bg-accent shadow-[0_0_0_4px_var(--accent)]",
  accent2: "bg-accent2 shadow-[0_0_0_4px_var(--accent2)]",
  gold: "bg-gold shadow-[0_0_0_4px_var(--gold)]",
  teal: "bg-teal shadow-[0_0_0_4px_var(--teal)]",
  coral: "bg-coral shadow-[0_0_0_4px_var(--coral)]",
  green: "bg-green shadow-[0_0_0_4px_var(--green)]",
  orchid: "bg-orchid shadow-[0_0_0_4px_var(--orchid)]",
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="center"
          eyebrow="My Journey"
          titleLines={["How I got here."]}
          sub="A timeline of learning, building, and growing as a developer."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-line md:left-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[22px] top-0 w-px origin-top bg-gradient-to-b from-accent via-orchid to-teal md:left-1/2"
          />

          {TIMELINE.map((entry, i) => {
            const leftSide = i % 2 === 0;
            return (
              <div key={entry.year} className="relative mb-12 last:mb-0">
                <span
                  className={`absolute left-[22px] top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-background md:left-1/2 ${
                    DOT_BG[entry.token]
                  }`}
                />
                <div
                  className={`flex ${leftSide ? "md:justify-start" : "md:justify-end"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: leftSide ? -28 : 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2.75rem)] ${
                      leftSide ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <SpotlightCard className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent2">
                        {entry.year}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold">
                        {entry.title}
                      </h3>
                      <p className="mt-0.5 text-sm italic text-muted">
                        {entry.sub}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {entry.desc}
                      </p>
                    </SpotlightCard>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

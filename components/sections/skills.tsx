"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index={3}
          eyebrow="Technical Skills"
          titleLines={["The tools I use", "to build with."]}
          sub="A growing stack built through real project experience — not just tutorials."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.title} delay={0.1 * ci}>
              <SpotlightCard className="h-full rounded-lg border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-background3">
                    <cat.icon size={17} strokeWidth={1.5} className="text-muted" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 mb-6 font-display text-lg font-bold">
                  {cat.title}
                </h3>

                <div className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-mono text-[11px] text-faint">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-[3px] overflow-hidden rounded-full bg-background3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1.2,
                            delay: 0.15 + ii * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`h-full rounded-full ${BAR_BG[item.token]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const BAR_BG = {
  accent: "bg-foreground",
  accent2: "bg-accent2",
  gold: "bg-gold",
  teal: "bg-teal",
  coral: "bg-coral",
  green: "bg-green",
  orchid: "bg-orchid",
} as const;

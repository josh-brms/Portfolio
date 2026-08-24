"use client";

import { SKILL_CATEGORIES, PILL_STYLES } from "@/lib/data";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative bg-background2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Technical Skills"
          titleLines={["The tools I use", "to build with."]}
          sub="A growing stack built through real project experience — not just tutorials."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.title} delay={0.1 * ci}>
              <SpotlightCard className="h-full rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="mb-6 flex items-center gap-3.5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl border ${PILL_STYLES.accent}`}
                  >
                    <cat.icon size={19} />
                  </span>
                  <h3 className="font-display text-lg font-bold">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-display text-xs font-bold text-faint">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-background3">
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
  accent: "bg-accent",
  accent2: "bg-accent2",
  gold: "bg-gold",
  teal: "bg-teal",
  coral: "bg-coral",
  green: "bg-green",
  orchid: "bg-orchid",
} as const;

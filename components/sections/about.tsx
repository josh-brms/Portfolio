"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";
import {
  ABOUT_ITEMS,
  EDUCATION,
  QUOTE,
} from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";

const ICON_TOKEN: Record<string, string> = {
  accent: "bg-accent/12 text-accent3",
  teal: "bg-teal/12 text-teal",
  gold: "bg-gold/10 text-gold",
  orchid: "bg-orchid/10 text-orchid",
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRight = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section id="about" className="relative bg-background2 py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-2"
      >
        <div>
          <SectionHeading
            eyebrow="About me"
            titleLines={["Builder by nature.", "Passionate by code."]}
            sub="I'm a detail-oriented developer from Albay, Philippines — passionate about creating systems that are technically sound and genuinely delightful to use."
          />
          <div className="mt-9 flex flex-col gap-4">
            {ABOUT_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * (i + 1)}>
                <SpotlightCard className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${ICON_TOKEN[item.token]}`}
                  >
                    <item.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-medium">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.desc}
                    </span>
                  </span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div style={{ y: yRight }} className="flex flex-col gap-6">
          <Reveal delay={0.15}>
            <figure className="relative overflow-hidden rounded-2xl border border-line border-l-[3px] border-l-accent bg-surface p-8 pt-12">
              <Quote
                size={64}
                strokeWidth={1}
                className="absolute right-6 top-4 rotate-180 text-accent/15"
              />
              <blockquote className="relative font-light italic leading-relaxed">
                “{QUOTE.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-accent3">
                — {QUOTE.author}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <p className="mb-1 font-display text-lg font-bold">
                {EDUCATION.school}
              </p>
              <p className="text-[15px] text-muted">{EDUCATION.degree}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {EDUCATION.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-background3 px-2.5 py-1 text-xs text-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="rounded-2xl border border-dashed border-line bg-transparent p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                Currently
              </p>
              <ul className="space-y-2.5 text-sm text-muted">
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-green" />
                  Finishing my final year of BS Computer Science
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  Iterating on HotelRex & exploring new tooling
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Open to entry-level web development roles
                </li>
              </ul>
            </div>
          </Reveal>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-line to-transparent" />
    </section>
  );
}

"use client";

import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="border-y border-line bg-background2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index={4}
          eyebrow="What I Offer"
          titleLines={["How I can help", "your team."]}
          sub="From database schema to deployed product — I bring a full-stack perspective to every role."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={0.1 * i}>
              <SpotlightCard className="group relative h-full overflow-hidden rounded-lg border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
                <span className="pointer-events-none absolute right-6 top-5 font-mono text-4xl font-bold text-line-strong/60 transition-colors duration-300 group-hover:text-muted/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mb-6 grid h-11 w-11 place-items-center rounded-md border border-line bg-background3 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <svc.icon size={19} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-bold">{svc.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {svc.desc}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

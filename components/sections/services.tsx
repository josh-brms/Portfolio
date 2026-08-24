"use client";

import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I Offer"
          titleLines={["How I can help", "your team."]}
          sub="From database schema to deployed product — I bring a full-stack perspective to every role."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={0.1 * i}>
              <SpotlightCard className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <span className="pointer-events-none absolute right-6 top-5 font-display text-5xl font-extrabold text-faint/15 transition-colors duration-300 group-hover:text-accent/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-orchid/10 text-accent2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svc.icon size={22} />
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

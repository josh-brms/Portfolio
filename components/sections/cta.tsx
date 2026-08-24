"use client";

import { ArrowRight, Download } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

export function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-grid-fade opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
            Let&apos;s build something
            <span className="text-gradient block">great together.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-lg font-light leading-relaxed text-muted">
            I&apos;m actively looking for entry-level web developer roles. If
            you&apos;re building something exciting, I&apos;d love to be part
            of it.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a href="#contact" className="btn-primary">
                Get in Touch <ArrowRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SITE.resume}
                download="Joshua_Bermas_Resume.pdf"
                className="btn-ghost"
              >
                <Download size={16} /> Download Resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { ArrowRight, Download } from "lucide-react";
import {
  HERO_SKILLS,
  HERO_SKILL_TOKENS,
  HERO_STATS,
  PILL_STYLES,
  SITE,
} from "@/lib/data";
import { TypingText } from "@/components/typing-text";
import { AnimatedNumber } from "@/components/animated-number";
import { Magnetic } from "@/components/magnetic";
import { TiltCard } from "@/components/tilt-card";
import { SpotlightCard } from "@/components/spotlight-card";

const HeroScene = dynamic(() => import("@/components/canvas/hero-scene"), {
  ssr: false,
});

export function Hero() {
  const reduce = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sceneOk, setSceneOk] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const ok = Boolean(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
      setSceneOk(ok);
    } catch {
      setSceneOk(false);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[480px] w-[480px] rounded-full bg-foreground/[0.04] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-[-140px] h-[420px] w-[420px] rounded-full bg-foreground/[0.03] blur-[110px]" />
      <div className="absolute inset-0 bg-grid-fade opacity-60" />

      {!reduce && sceneOk && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {mounted && (
            <HeroScene
              theme={resolvedTheme === "light" ? "light" : "dark"}
            />
          )}
        </div>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-md border border-line bg-background2 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-foreground" />
            Open to opportunities — Albay, PH
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight">
            Joshua
            <span className="text-gradient block">Bermas</span>
          </h1>

          <p className="mt-5 flex h-8 items-center gap-2.5 font-mono text-lg text-muted md:text-xl">
            <span className="text-faint select-none">&gt;</span>
            <TypingText />
            <span className="inline-block h-5 w-[2px] animate-blink bg-foreground" />
          </p>

          <p className="mt-5 max-w-xl font-light leading-relaxed text-muted">
            I build fast, intuitive, and user-centered digital experiences.
            Currently seeking entry-level web development roles where I can
            ship clean code and delightful products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SITE.resume}
                download="Joshua_Bermas_Resume.pdf"
                className="btn-ghost"
              >
                <Download size={15} /> Download Resume
              </a>
            </Magnetic>
          </div>

          <div className="mt-12 flex gap-10 border-t border-line pt-8">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-3xl font-extrabold tracking-tight"
                />
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TiltCard maxAngle={6}>
          <SpotlightCard className="rounded-lg border border-line bg-surface/80 p-8 backdrop-blur-md">
            <div className="mx-auto mb-5 flex h-24 w-20 items-center justify-center rounded-lg border border-line-strong bg-background3 font-display text-2xl font-extrabold tracking-tight relative group">
              <img
                src="/profile.jpg"
                alt="JoshStudio"
                className="h-full w-full rounded-lg object-cover transition-all duration-500 ease-out group-hover:scale-[2.2] group-hover:rounded-none group-hover:z-10 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:rotate-[-2deg]"
              />
            </div>
            <p className="text-center font-display text-lg font-bold">
              Joshua Bermas
            </p>
            <p className="mt-0.5 text-center font-mono text-xs text-muted">
              full-stack developer · albay, ph
            </p>
            <div className="mb-6 mt-6 flex flex-wrap justify-center gap-2">
              {HERO_SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[11px] ${
                    PILL_STYLES[
                      HERO_SKILL_TOKENS[i % HERO_SKILL_TOKENS.length]
                    ]
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 rounded-md border border-line bg-background3 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent3">
              <span className="h-[6px] w-[6px] animate-pulse-dot rounded-full bg-foreground" />
              Available for work · 2026
            </div>
          </SpotlightCard>
        </TiltCard>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-foreground md:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-current pt-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
      </a>
    </section>
  );
}

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
      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-[-140px] h-[420px] w-[420px] rounded-full bg-orchid/[0.07] blur-[110px]" />
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-[13px] text-accent3">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green" />
            Open to opportunities · Albay, Philippines
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight">
            Joshua
            <span className="text-gradient block">Bermas</span>
          </h1>

          <p className="mt-4 flex h-9 items-center gap-1 font-display text-xl text-muted md:text-2xl">
            <TypingText />
            <span className="inline-block h-6 w-[2px] animate-blink bg-accent2" />
          </p>

          <p className="mt-4 max-w-xl font-light leading-relaxed text-muted">
            I build fast, intuitive, and user-centered digital experiences.
            Currently seeking entry-level web development roles where I can
            ship clean code and delightful products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
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

          <div className="mt-12 flex gap-9">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-3xl font-extrabold tracking-tight"
                />
                <div className="mt-1 text-xs uppercase tracking-wider text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TiltCard maxAngle={6}>
          <SpotlightCard className="rounded-3xl border border-line bg-surface/75 p-8 backdrop-blur-md">
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent via-orchid to-teal p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-surface font-display text-3xl font-extrabold text-accent2">
                JB
              </div>
            </div>
            <p className="text-center font-display text-lg font-bold">
              Joshua Bermas
            </p>
            <p className="mb-6 text-center text-sm text-muted">
              Full-Stack Developer · Albay, PH
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {HERO_SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                    PILL_STYLES[
                      HERO_SKILL_TOKENS[i % HERO_SKILL_TOKENS.length]
                    ]
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-green/15 bg-green/[0.07] px-4 py-3 text-sm text-green">
              <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-green" />
              Available for work · 2026
            </div>
          </SpotlightCard>
        </TiltCard>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-accent2 md:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent2" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </a>
    </section>
  );
}

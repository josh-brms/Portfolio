"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import {
  FEATURED_PROJECT,
  PILL_STYLES,
  SMALL_PROJECTS,
} from "@/lib/data";
import type { AccentToken } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

function MockBrowser() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-line-strong bg-[#0c0c0e] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-line bg-[#111114] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#52525b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#71717a]" />
        </div>
        <div className="flex-1 rounded-sm bg-[#0c0c0e] px-3 py-1 font-mono text-[10px] text-faint">
          {FEATURED_PROJECT.mockUrl}
        </div>
      </div>
      <div className="p-4 text-left">
        <div className="mb-3 flex items-center justify-between border-b border-line pb-2.5">
          <span className="font-display text-sm font-extrabold text-foreground">
            HotelRex
          </span>
          <div className="hidden gap-4 font-mono text-[9px] text-faint sm:flex">
            <span>Dashboard</span>
            <span>Rooms</span>
            <span>Guests</span>
            <span>Reports</span>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-4 gap-1.5">
          {[
            { v: "142", l: "Rooms", c: "#e4e4e7" },
            { v: "89%", l: "Occupied", c: "#d4d4d8" },
            { v: "48K", l: "Revenue", c: "#a1a1aa" },
            { v: "07", l: "Pending", c: "#71717a" },
          ].map((s) => (
            <div key={s.l} className="rounded-md bg-[#131316] p-2 text-center">
              <div
                className="font-mono text-sm font-bold"
                style={{ color: s.c }}
              >
                {s.v}
              </div>
              <div className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-faint">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        {[
          ["RM 101 · Deluxe", "Santos, M.", "Apr 12–15", "Confirmed", false],
          ["RM 204 · Suite", "Reyes, A.", "Apr 13–18", "Confirmed", false],
          ["RM 315 · Standard", "Cruz, L.", "Apr 14", "Pending", true],
        ].map(([room, guest, dates, status, warn], i) => (
          <div
            key={i}
            className="mb-1.5 flex items-center gap-2 rounded-md bg-[#131316] px-2.5 py-2"
          >
            <span className="flex-1 truncate font-mono text-[9px] text-muted">
              {room}
            </span>
            <span className="hidden flex-1 font-mono text-[9px] text-muted sm:block">
              {guest}
            </span>
            <span className="hidden font-mono text-[9px] text-faint sm:block">
              {dates}
            </span>
            <span
              className={`rounded-sm px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider ${
                warn
                  ? "bg-[#27272a] text-[#a1a1aa]"
                  : "bg-[#1c1c1f] text-[#e4e4e7]"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const fp = FEATURED_PROJECT;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index={2}
          align="center"
          eyebrow="Featured Work"
          titleLines={["Built with purpose,", "shipped with care."]}
          sub="Real-world systems designed to solve real problems — every line written with performance and user experience in mind."
        />

        <Reveal delay={0.1} className="mt-14">
          <SpotlightCard className="group overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="relative flex items-center justify-center border-b border-line bg-background2 p-6 transition-transform duration-500 group-hover:scale-[1.01] sm:p-8 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.045),transparent_60%)]" />
                <MockBrowser />
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-background3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  <Star size={10} /> Featured Project
                </div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  {fp.title}
                </h3>
                <p className="mt-3 font-light leading-relaxed text-muted">
                  {fp.desc}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {fp.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-md border border-line bg-background3 p-3 text-center"
                    >
                      <div className="font-mono text-base font-bold text-foreground">
                        {m.value}
                      </div>
                      <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {fp.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md border px-2.5 py-1 font-mono text-[11px] ${PILL_STYLES[fp.techTokens[i] as AccentToken]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Magnetic strength={0.25}>
                    <a
                      href={fp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary !px-6 !py-2.5 text-sm"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a
                      href={fp.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost !px-6 !py-2.5 text-sm"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {SMALL_PROJECTS.map((p, idx) => (
            <Reveal key={p.title} delay={0.12 * (idx + 1)}>
              <SpotlightCard className="flex h-full flex-col rounded-lg border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-md border border-line bg-background3 text-muted">
                  <p.icon size={19} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md border px-2.5 py-1 font-mono text-[11px] ${PILL_STYLES[p.techTokens[i]]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-2 pt-6">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-foreground"
                    >
                      {l.label} <ExternalLink size={11} />
                    </a>
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

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
    <div className="w-full overflow-hidden rounded-xl border border-[#2a2a44] bg-[#0b0b15] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-[#22223a] bg-[#14141f] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-[#0d0d17] px-3 py-1 font-mono text-[10px] text-[#5060a0]">
          {FEATURED_PROJECT.mockUrl}
        </div>
      </div>
      <div className="p-4 text-left">
        <div className="mb-3 flex items-center justify-between border-b border-[#1c1c30] pb-2.5">
          <span className="font-display text-sm font-extrabold text-accent2">
            HotelRex
          </span>
          <div className="hidden gap-4 font-mono text-[9px] text-[#4050a0] sm:flex">
            <span>Dashboard</span>
            <span>Rooms</span>
            <span>Guests</span>
            <span>Reports</span>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-4 gap-1.5">
          {[
            { v: "142", l: "Rooms", c: "#a594ff" },
            { v: "89%", l: "Occupied", c: "#4ade80" },
            { v: "₱48K", l: "Revenue", c: "#f5c842" },
            { v: "7", l: "Pending", c: "#ff6b6b" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-lg bg-[#12121e] p-2 text-center"
            >
              <div
                className="font-display text-sm font-bold"
                style={{ color: s.c }}
              >
                {s.v}
              </div>
              <div className="mt-0.5 text-[8px] text-[#4050a0]">{s.l}</div>
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
            className="mb-1.5 flex items-center gap-2 rounded-md bg-[#12121e] px-2.5 py-2"
          >
            <span className="flex-1 truncate font-mono text-[9px] text-[#8080b0]">
              {room}
            </span>
            <span className="hidden flex-1 font-mono text-[9px] text-[#8080b0] sm:block">
              {guest}
            </span>
            <span className="hidden font-mono text-[9px] text-[#8080b0] sm:block">
              {dates}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[8px] ${
                warn
                  ? "bg-[#f5c842]/10 text-[#f5c842]"
                  : "bg-[#4ade80]/10 text-[#4ade80]"
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
          align="center"
          eyebrow="Featured Work"
          titleLines={["Built with purpose,", "shipped with care."]}
          sub="Real-world systems designed to solve real problems — every line written with performance and user experience in mind."
        />

        <Reveal delay={0.1} className="mt-14">
          <SpotlightCard className="group overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-accent/50">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="relative flex items-center justify-center border-b border-line bg-gradient-to-br from-[#0f0f1a] via-[#16162800] to-[#16213e] p-6 transition-transform duration-500 group-hover:scale-[1.01] sm:p-8 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(124,106,247,0.16),transparent_60%),radial-gradient(ellipse_at_70%_50%,rgba(62,207,176,0.08),transparent_60%)]" />
                <MockBrowser />
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  <Star size={11} /> Featured Project
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
                      className="rounded-xl border border-line bg-background3 p-3 text-center"
                    >
                      <div className="font-display text-lg font-extrabold text-accent2">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-faint">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {fp.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${PILL_STYLES[fp.techTokens[i] as AccentToken]}`}
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
              <SpotlightCard className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-orchid/10 text-2xl">
                  {p.icon}
                </span>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${PILL_STYLES[p.techTokens[i]]}`}
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 px-3 py-1.5 text-xs font-medium text-accent2 transition-colors hover:bg-accent/10"
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

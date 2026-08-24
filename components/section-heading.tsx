"use client";

import { Reveal } from "@/components/reveal";
import { ScrambleText } from "@/components/scramble-text";

export function SectionHeading({
  eyebrow,
  titleLines,
  sub,
  align = "left",
}: {
  eyebrow: string;
  titleLines: string[];
  sub?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent2">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,4.2vw,3.1rem)] font-extrabold leading-[1.08] tracking-tight">
        {titleLines.map((line, i) => (
          <span key={i} className="block">
            <ScrambleText text={line} />
          </span>
        ))}
      </h2>
      {sub && (
        <p
          className={`mt-4 max-w-xl font-light leading-relaxed text-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

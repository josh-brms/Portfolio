"use client";

import { Reveal } from "@/components/reveal";
import { ScrambleText } from "@/components/scramble-text";

export function SectionHeading({
  index,
  eyebrow,
  titleLines,
  sub,
  align = "left",
}: {
  index?: number;
  eyebrow: string;
  titleLines: string[];
  sub?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
        {typeof index === "number" && (
          <span className="text-foreground">
            {String(index).padStart(2, "0")}{" "}
          </span>
        )}
        <span className="text-line-strong">/</span>
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

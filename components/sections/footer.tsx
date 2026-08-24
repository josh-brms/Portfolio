"use client";

import { ChevronUp, Github } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-9 md:flex-row">
        <p className="font-mono text-xs text-faint">
          © 2026 Joshua Bermas — BS Computer Science, DWCL
        </p>

        <div className="flex items-center gap-6 font-mono text-xs text-faint">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            Back to top <ChevronUp size={13} />
          </button>
          <a
            href={SITE.resume}
            download="Joshua_Bermas_Resume.pdf"
            className="transition-colors hover:text-foreground"
          >
            Resume.pdf
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github size={13} /> GitHub
          </a>
        </div>

        <p className="font-mono text-[11px] text-faint">
          13.1391° N, 123.7436° E — Albay, PH
        </p>
      </div>
    </footer>
  );
}

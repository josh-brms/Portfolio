"use client";

import { ChevronUp, Github } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-9 md:flex-row">
        <p className="text-sm text-faint">
          © 2026 Joshua Bermas · BS Computer Science · Divine Word College of
          Legazpi
        </p>

        <div className="flex items-center gap-6 text-sm text-faint">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-1 transition-colors hover:text-accent3"
          >
            Back to top <ChevronUp size={14} />
          </button>
          <a
            href={SITE.resume}
            download="Joshua_Bermas_Resume.pdf"
            className="transition-colors hover:text-accent3"
          >
            Resume (PDF)
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent3"
          >
            <Github size={14} /> GitHub
          </a>
        </div>

        <p className="text-xs text-faint">
          Next.js 15 · Three.js · Motion · Tailwind v4
        </p>
      </div>
    </footer>
  );
}

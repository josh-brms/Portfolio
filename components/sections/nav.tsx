"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Command, Menu, X, Github } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Magnetic } from "@/components/magnetic";
import { openCommandPalette } from "@/components/command-palette";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[800] transition-all duration-300 ${
          scrolled ? "glass-nav border-b border-line/70" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"
            aria-label="Back to top"
          >
            <img
              src="/logo.png"
              alt="JoshStudio"
              className="h-10 w-10 object-contain"
            />
            <span className="text-accent2">.</span>
            <span>JoshStudio</span>
          </button>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`group relative text-[13px] font-medium uppercase tracking-wide transition-colors ${
                    activeId === l.id
                      ? "text-accent3"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent2 transition-all duration-300 ${
                      activeId === l.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              aria-label="Open command palette"
              title="Command palette (⌘K)"
              className="hidden items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs text-faint transition-colors hover:border-accent hover:text-accent3 sm:flex"
            >
              <Command size={12} />
              <span>K</span>
            </button>
            <ThemeToggle />
            <Magnetic>
              <a
                href={SITE.resume}
                download="Joshua_Bermas_Resume.pdf"
                className="btn-primary hidden !px-5 !py-2 text-[13px] md:inline-flex"
              >
                Hire me
              </a>
            </Magnetic>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted md:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8500] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-xl font-extrabold">
                JB<span className="text-accent2">.</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted"
              >
                <X size={17} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  onClick={() => go(l.id)}
                  className="border-b border-line py-4 text-left font-display text-3xl font-bold tracking-tight text-muted transition-colors hover:text-accent3"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                href={SITE.resume}
                download="Joshua_Bermas_Resume.pdf"
                className="btn-primary mt-8 self-start"
              >
                Hire me — Resume (PDF)
              </motion.a>
            </nav>
            <div className="flex items-center justify-between px-8 pb-10">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-faint"
              >
                <Github size={16} /> {SITE.githubHandle}
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

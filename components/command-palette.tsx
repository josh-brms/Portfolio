"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  Github,
  Home,
  Mail,
  Moon,
  Search,
  Sun,
  User,
  Briefcase,
  Wrench,
  Route,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data";

interface Action {
  id: string;
  label: string;
  hint?: string;
  icon: LucideIcon;
  run: () => void;
}

const OPEN_EVENT = "open-command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const downloadResume = useCallback(() => {
    const a = document.createElement("a");
    a.href = SITE.resume;
    a.download = "Joshua_Bermas_Resume.pdf";
    a.click();
  }, []);

  const actions = useMemo<Action[]>(() => {
    const navIcons: Record<string, LucideIcon> = {
      about: User,
      projects: Briefcase,
      skills: Wrench,
      services: Route,
      journey: Route,
      contact: MessageSquare,
    };
    const navActions: Action[] = NAV_LINKS.map((l) => ({
      id: `nav-${l.id}`,
      label: `Go to ${l.label}`,
      icon: navIcons[l.id] ?? ArrowRight,
      run: () => scrollTo(l.id),
    }));

    return [
      {
        id: "home",
        label: "Back to top",
        icon: Home,
        run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
      ...navActions,
      {
        id: "resume",
        label: "Download resume",
        hint: "PDF",
        icon: Download,
        run: downloadResume,
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        icon: resolvedTheme === "dark" ? Sun : Moon,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      {
        id: "email",
        label: copied ? "Email copied!" : "Copy email address",
        icon: copied ? Check : Copy,
        run: () => {
          navigator.clipboard?.writeText(SITE.email).catch(() => {});
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        },
      },
      {
        id: "github",
        label: "Open GitHub profile",
        hint: SITE.githubHandle,
        icon: Github,
        run: () => window.open(SITE.github, "_blank"),
      },
      {
        id: "mailto",
        label: "Send an email",
        icon: Mail,
        run: () => window.open(`mailto:${SITE.email}`, "_self"),
      },
    ];
  }, [resolvedTheme, setTheme, scrollTo, downloadResume, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const onOpenEvent = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpenEvent);
    };
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => inputRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const action = filtered[active];
      if (action) {
        action.run();
        if (action.id !== "email") close();
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9000] flex items-start justify-center px-4 pt-[16vh]"
        >
          <button
            aria-label="Close palette"
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={17} className="shrink-0 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-faint"
              />
              <kbd className="shrink-0 rounded-md border border-line bg-background3 px-1.5 py-0.5 text-[10px] font-medium text-faint">
                ESC
              </kbd>
            </div>

            <div className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">
                  No results for “{query}”
                </p>
              )}
              {filtered.map((a, i) => (
                <button
                  key={a.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    a.run();
                    if (a.id !== "email") close();
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    i === active
                      ? "bg-accent/12 text-foreground"
                      : "text-muted"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                      i === active
                        ? "bg-accent/20 text-accent3"
                        : "bg-background3 text-faint"
                    }`}
                  >
                    <a.icon size={14} />
                  </span>
                  <span className="flex-1">{a.label}</span>
                  {a.hint && (
                    <span className="text-xs text-faint">{a.hint}</span>
                  )}
                  {i === active && (
                    <ArrowRight size={13} className="shrink-0 text-accent2" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-[11px] text-faint">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
              <span className="ml-auto hidden sm:block">⌘K anywhere</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

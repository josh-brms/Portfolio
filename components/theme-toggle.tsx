"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
      className="relative flex h-7 w-[52px] shrink-0 items-center rounded-full border border-line-strong bg-surface transition-colors hover:border-muted"
    >
      <span className="absolute left-[7px] text-faint opacity-60">
        <Moon size={10} />
      </span>
      <span className="absolute right-[7px] text-faint opacity-60">
        <Sun size={10} />
      </span>
      <motion.span
        animate={{ x: dark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="relative z-10 mx-[3px] grid h-5 w-5 place-items-center rounded-full bg-foreground shadow"
      >
        <Moon
          size={10}
          className={`text-background ${dark ? "" : "hidden"}`}
        />
        <Sun size={10} className={`text-background ${dark ? "hidden" : ""}`} />
      </motion.span>
    </button>
  );
}

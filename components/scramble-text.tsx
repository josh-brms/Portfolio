"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#@$%&";

export function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    let frame = 0;

    const queue = text.split("").map((ch, i) => ({
      ch,
      start: Math.floor(i * 1.6 + Math.random() * 4),
      end: Math.floor(i * 1.6 + 8 + Math.random() * 6),
    }));

    const tick = () => {
      let done = 0;
      let result = "";
      for (const q of queue) {
        if (frame >= q.end || q.ch === " ") {
          result += q.ch;
          done++;
        } else if (frame >= q.start) {
          result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        } else {
          result += q.ch;
        }
      }
      setOut(result);
      if (done < queue.length) {
        frame++;
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, reduce]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {out}
    </span>
  );
}

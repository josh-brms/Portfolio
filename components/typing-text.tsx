"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { TYPING_PHRASES } from "@/lib/data";

export function TypingText() {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduce) {
      setText(TYPING_PHRASES[0]);
      return;
    }
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = TYPING_PHRASES[phrase];
      char = deleting ? char - 1 : char + 1;
      setText(word.slice(0, char));

      let delay = deleting ? 50 : 95;
      if (!deleting && char === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % TYPING_PHRASES.length;
        delay = 350;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <span aria-live="polite">
      {text}
      <span className="sr-only">{TYPING_PHRASES.join(", ")}</span>
    </span>
  );
}

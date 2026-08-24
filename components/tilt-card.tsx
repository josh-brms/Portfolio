"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function TiltCard({
  children,
  className = "",
  maxAngle = 7,
}: {
  children: ReactNode;
  className?: string;
  maxAngle?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });
  const ry = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * maxAngle);
    rx.set(-py * maxAngle);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

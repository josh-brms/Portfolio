"use client";

import type { ReactNode, MouseEvent } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}

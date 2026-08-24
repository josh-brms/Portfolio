"use client";

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-8 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.18em] text-faint"
        >
          {item}
          <span className="text-line-strong select-none">{"//"}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="group relative flex overflow-hidden border-b border-line bg-background2 py-4 select-none">
      <div className="flex min-w-full shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background2 to-transparent" />
    </div>
  );
}

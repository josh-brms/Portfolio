"use client";

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-faint"
        >
          {item}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"
              className="fill-accent/40"
            />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="group relative flex overflow-hidden border-y border-line bg-background2 py-5 select-none">
      <div className="flex min-w-full shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background2 to-transparent" />
    </div>
  );
}

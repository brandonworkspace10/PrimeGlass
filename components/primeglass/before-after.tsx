"use client";

import { useCallback, useRef, useState } from "react";
import { FadeIn } from "./fade-in";

interface Pair {
  label: string;
  businessType: string;
  borough: string;
}

const PAIRS: Pair[] = [
  { label: "Corner Restaurant", businessType: "Restaurant storefront", borough: "Brooklyn" },
  { label: "Downtown Salon", businessType: "Retail storefront", borough: "Manhattan" },
  { label: "Neighborhood Bodega", businessType: "Bodega storefront", borough: "The Bronx" },
];

function BeforeAfterSlider({ pair }: { pair: Pair }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging) return;
      updatePosition(e.clientX);
    },
    [dragging, updatePosition],
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updatePosition(touch.clientX);
    },
    [updatePosition],
  );

  const safePosition = Math.max(0.01, Math.min(99.99, position));

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <article
      aria-label={`Before and after comparison of ${pair.label} glass cleaning`}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-md"
    >
      <div
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(safePosition)}
        aria-valuetext={`Showing ${Math.round(safePosition)}% before, ${Math.round(100 - safePosition)}% after`}
        className="pg-clean relative aspect-video w-full cursor-col-resize select-none overflow-hidden outline-none focus:ring-2 focus:ring-pg-primary"
        onKeyDown={onKeyDown}
        onMouseDown={() => setDragging(true)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={onMouseMove}
        onMouseUp={() => setDragging(false)}
        onTouchMove={onTouchMove}
        ref={containerRef}
        role="slider"
        tabIndex={0}
      >
        <div className="pg-grime absolute inset-0" style={{ width: `${safePosition}%` }} />

        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${safePosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg">
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-2.5 py-1 font-bold text-white text-xs uppercase tracking-wide backdrop-blur-sm"
        >
          Before
        </div>
        <div
          aria-hidden="true"
          className="absolute top-3 right-3 z-10 rounded-full bg-pg-cta/90 px-2.5 py-1 font-bold text-white text-xs uppercase tracking-wide backdrop-blur-sm"
        >
          After
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-white text-xs backdrop-blur-sm"
        >
          drag to compare
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-slate-100 border-t bg-white px-4 py-3">
        <div>
          <p className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
            {pair.label}
          </p>
          <p className="text-slate-400 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            {pair.businessType} &bull; {pair.borough}
          </p>
        </div>
        <span className="flex-shrink-0 rounded-full border border-pg-primary/15 bg-pg-bg px-2.5 py-1 font-semibold text-pg-primary text-xs">
          PrimeGlass Cleaned
        </span>
      </div>
    </article>
  );
}

export function BeforeAfterGallery() {
  return (
    <section aria-label="Before and after cleaning results" className="bg-white py-20 sm:py-28" id="results">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              Real results
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              See the difference
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Drag the slider to compare. Illustrative examples — swap in your own jobsite photos anytime.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map((pair, i) => (
            <FadeIn delay={i * 0.12} key={pair.label}>
              <BeforeAfterSlider pair={pair} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-pg-cta px-8 py-4 font-semibold text-base text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pg-cta-hover hover:shadow-xl active:translate-y-0"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get your free glass evaluation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

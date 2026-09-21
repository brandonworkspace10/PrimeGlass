"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { FadeIn } from "./fade-in";

interface Pair {
  label: string;
  businessType: string;
  borough: string;
  src: string;
  alt: string;
}

const PAIRS: Pair[] = [
  {
    label: "Restaurant Storefront",
    businessType: "Street-level display glass",
    borough: "Brooklyn-style streetscape",
    src: "/images/primeglass-storefront-clean.png",
    alt: "Restaurant storefront with large, clear display windows",
  },
  {
    label: "Office Building",
    businessType: "Floor-to-ceiling commercial glass",
    borough: "Manhattan-style streetscape",
    src: "/images/primeglass-office-clean.png",
    alt: "Modern office lobby behind clean floor-to-ceiling windows",
  },
  {
    label: "Specialty Glass",
    businessType: "Arched & segmented windows",
    borough: "Queens-style streetscape",
    src: "/images/primeglass-specialty-glass-clean.png",
    alt: "Retail storefront with clean custom-shaped arched windows",
  },
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

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging) return;
      updatePosition(event.clientX);
    },
    [dragging, updatePosition],
  );

  const safePosition = Math.max(0.01, Math.min(99.99, position));

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <article
      aria-label={`AI-generated before and after visualization of ${pair.label} glass cleaning`}
      className="pg-card flex h-full flex-col overflow-hidden"
    >
      <div
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(safePosition)}
        aria-valuetext={`Showing ${Math.round(safePosition)}% before, ${Math.round(100 - safePosition)}% after`}
        aria-label={`Before and after slider for ${pair.label}`}
        aria-orientation="horizontal"
        className="pg-clean relative aspect-video w-full touch-none cursor-col-resize select-none overflow-hidden bg-slate-200 focus-visible:ring-2 focus-visible:ring-pg-primary"
        onKeyDown={onKeyDown}
        onPointerCancel={() => setDragging(false)}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
          updatePosition(event.clientX);
        }}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => {
          event.currentTarget.releasePointerCapture(event.pointerId);
          setDragging(false);
        }}
        ref={containerRef}
        role="slider"
        tabIndex={0}
      >
        <Image
          alt={pair.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1280px) 31vw, (min-width: 640px) 48vw, 100vw"
          src={pair.src}
        />
        <div
          aria-hidden="true"
          className="pg-grime absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - safePosition}% 0 0)` }}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1280px) 31vw, (min-width: 640px) 48vw, 100vw"
            src={pair.src}
          />
        </div>

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
          Drag or use arrow keys
        </div>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-3 border-slate-100 border-t bg-white px-4 py-3.5">
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
            {pair.label}
          </p>
          <p className="truncate text-slate-500 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            {pair.businessType} &bull; {pair.borough}
          </p>
        </div>
        <span className="flex-shrink-0 rounded-full border border-pg-primary/15 bg-pg-bg px-2.5 py-1 font-bold text-[0.65rem] text-pg-primary uppercase tracking-wide">
          AI visualization
        </span>
      </div>
    </article>
  );
}

export function BeforeAfterGallery() {
  return (
    <section aria-label="Before and after cleaning results" className="pg-section bg-white" id="results">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">
              See the difference
            </span>
            <h2 className="pg-heading">
              The difference customers notice from the sidewalk
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Use the sliders to explore AI-generated clean and dirty glass visualizations. They
              represent property types, not completed PrimeGlass jobs.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {PAIRS.map((pair, i) => (
            <FadeIn
              className={i === 2 ? "sm:col-span-2 xl:col-span-1" : ""}
              delay={i * 0.12}
              key={pair.label}
            >
              <BeforeAfterSlider pair={pair} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              className="pg-button-primary w-full sm:w-auto"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get My Free Cleaning Plan
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const TRUST_POINTS = [
  "Weekly, biweekly, or monthly",
  "Interior & exterior glass",
  "All five boroughs",
];

const BUSINESS_TYPES = [
  "Storefronts",
  "Restaurants",
  "Retail",
  "Offices",
  "Commercial Buildings",
  "Managed Properties",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Hero section"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #0e7490 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect x='1' y='1' width='58' height='58' rx='10' ry='10' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="pg-container relative pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-12">
        <div className="max-w-3xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-bold text-white/90 text-xs tracking-wide backdrop-blur-sm sm:px-4 sm:text-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
          >
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-pg-secondary" />
            Recurring window cleaning across NYC
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-[clamp(2.75rem,11vw,5.75rem)] text-white leading-[0.98] tracking-[-0.055em]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Storefront window
            <br />
            cleaning you <span className="text-pg-secondary">never</span>
            <br />
            have to rebook.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-2xl text-base text-cyan-50/90 leading-7 sm:text-lg sm:leading-8 xl:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            style={{ fontFamily: "var(--font-body)" }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            PrimeGlass puts NYC storefronts, restaurants, and offices on a recurring cleaning
            schedule, so the first thing your customers see is always clear glass. Every size and
            shape, inside and out.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.45 }}
          >
            <a
              className="pg-button-primary sm:text-base"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get My Free Cleaning Plan
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="pg-button-secondary text-sm sm:text-base"
              href="#visit-plan"
            >
              How often do my windows need it?
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="grid gap-3 sm:grid-cols-3 sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.6 }}
          >
            {TRUST_POINTS.map((point) => (
              <div className="flex items-start gap-2 text-sm text-white/80" key={point}>
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 text-pg-secondary"
                />
                <span style={{ fontFamily: "var(--font-body)" }}>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 border-white/10 border-t pt-7 lg:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.75 }}
        >
          <p className="mb-4 font-medium text-white/50 text-xs uppercase tracking-widest">
            Properties we serve
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_TYPES.map((type) => (
              <span
                className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 font-semibold text-white/75 text-xs sm:text-sm"
                key={type}
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06))",
        }}
      />
    </section>
  );
}

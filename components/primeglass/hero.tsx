"use client";

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = ["Fully insured & bonded", "100% streak-free guarantee", "Same crew, every visit"];

const BUSINESS_TYPES = [
  "Storefronts",
  "Restaurants",
  "Retail",
  "Office Buildings",
  "High-Rises",
  "Real Estate",
];

export function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
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

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-sm text-white/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MapPin className="h-3.5 w-3.5 text-pg-secondary" />
            NYC's premier glass cleaning crew
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl text-white leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Streak-free glass,
            <br />
            <span className="text-pg-secondary">every</span> window,
            <br />
            every visit.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-xl text-cyan-100 text-lg leading-relaxed sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            style={{ fontFamily: "var(--font-body)" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Window cleaning, graffiti removal, glass replacement, and sticker removal for NYC
            storefronts — on a fixed weekly schedule that keeps your glass spotless.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-pg-cta px-6 py-3.5 font-semibold text-base text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pg-cta-hover hover:shadow-xl active:translate-y-0 sm:text-lg"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-medium text-sm text-white/90 transition-all duration-200 hover:border-white/50 hover:bg-white/10 hover:text-white sm:text-base"
              href="#pricing"
            >
              See Pricing
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {TRUST_POINTS.map((point) => (
              <div className="flex items-center gap-2 text-sm text-white/80" key={point}>
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
          className="mt-16 border-white/10 border-t pt-8"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <p className="mb-4 font-medium text-white/50 text-xs uppercase tracking-widest">
            We serve
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_TYPES.map((type) => (
              <span
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/75"
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

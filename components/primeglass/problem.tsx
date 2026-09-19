import { AlertTriangle, Eye, ShieldAlert } from "lucide-react";
import { FadeIn } from "./fade-in";

const PAIN_POINTS = [
  {
    icon: Eye,
    title: "Grimy glass kills first impressions",
    body: "Customers judge a storefront in seconds. Smudged, hazy windows read as neglected — even when everything inside is spotless.",
  },
  {
    icon: AlertTriangle,
    title: "Hard water spots & mineral buildup",
    body: "NYC's hard water leaves etching and cloudy residue that a spray bottle and paper towel will never fully clear.",
  },
  {
    icon: ShieldAlert,
    title: "DIY high-window cleaning is risky",
    body: "Ladders on uneven sidewalks, second-story sills, awning glass — one slip is an injury and a liability you don't need.",
  },
];

export function Problem() {
  return (
    <section aria-label="Problem section" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#0f172a" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(8,145,178,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-4">
            <span className="inline-block rounded-full border border-red-700/30 bg-red-900/40 px-3 py-1 font-semibold text-red-400 text-xs uppercase tracking-widest">
              The problem
            </span>
          </div>
          <h2
            className="mb-4 max-w-2xl text-3xl text-white leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            Dirty glass is
            <span className="text-red-400"> costing you</span> more than you think
          </h2>
          <p className="mb-14 max-w-xl text-lg text-slate-400" style={{ fontFamily: "var(--font-body)" }}>
            Windows are the largest surface people actually look through. When they're dirty, everything behind them looks worse.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn delay={i * 0.12} key={point.title}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-red-700/20 bg-red-900/40">
                  <point.icon aria-hidden="true" className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-base text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {point.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-pg-primary/20 bg-pg-primary/5 p-6 sm:flex-row sm:items-center">
            <p className="text-base text-slate-300" style={{ fontFamily: "var(--font-body)" }}>
              <span className="font-semibold text-pg-secondary">The fix is simple.</span>{" "}
              Put your glass on a recurring PrimeGlass schedule and never think about it again.
            </p>
            <a
              className="inline-flex flex-shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap font-medium text-pg-secondary text-sm transition-colors hover:text-white"
              href="#how-it-works"
            >
              See how it works →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

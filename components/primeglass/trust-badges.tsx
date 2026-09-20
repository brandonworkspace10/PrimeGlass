import { Building2, CalendarDays, PanelsTopLeft, Ruler, Route, Shapes } from "lucide-react";
import { FadeIn } from "./fade-in";

const BADGES = [
  {
    icon: Ruler,
    color: "bg-blue-50 border-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    title: "Windows of every size",
    body: "From individual storefront panes to broad commercial window systems.",
  },
  {
    icon: Shapes,
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-100",
    title: "Standard & custom shapes",
    body: "A cleaning plan tailored to rectangular, divided, angled, and specialty glass.",
  },
  {
    icon: PanelsTopLeft,
    color: "bg-violet-50 border-violet-100 text-violet-700",
    iconBg: "bg-violet-100",
    title: "Interior & exterior cleaning",
    body: "Scope both sides of the glass, plus frames, sills, and doors when requested.",
  },
  {
    icon: Route,
    color: "bg-amber-50 border-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    title: "Access-aware planning",
    body: "We account for height, obstructions, entry points, and operating hours before scheduling.",
  },
  {
    icon: CalendarDays,
    color: "bg-pg-bg border-cyan-100 text-pg-primary",
    iconBg: "bg-pg-primary/10",
    title: "Flexible service frequency",
    body: "Choose a one-time cleaning or a recurring plan based on traffic and exposure.",
  },
  {
    icon: Building2,
    color: "bg-slate-50 border-slate-200 text-slate-700",
    iconBg: "bg-slate-100",
    title: "Built for commercial properties",
    body: "Window cleaning for storefronts, restaurants, offices, and managed buildings.",
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Why trust PrimeGlass" className="pg-section border-slate-100 border-b bg-pg-surface">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">
              Why PrimeGlass
            </span>
            <h2 className="pg-heading">
              One window cleaning partner
              <br className="hidden sm:block" /> for the whole property
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Size, shape, access, and frequency all belong in the plan—not in the fine print.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {BADGES.map((badge, i) => (
            <FadeIn delay={i * 0.08} key={badge.title}>
              <article className={`flex h-full items-start gap-4 rounded-2xl border p-5 shadow-[0_8px_28px_rgb(15_23_42/0.04)] sm:p-6 ${badge.color}`}>
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${badge.iconBg}`}>
                  <badge.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    {badge.title}
                  </h3>
                  <p className="text-sm leading-6 opacity-85" style={{ fontFamily: "var(--font-body)" }}>
                    {badge.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award, Clock, MapPin, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import { FadeIn } from "./fade-in";

const BADGES = [
  {
    icon: ShieldCheck,
    color: "bg-blue-50 border-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    title: "Fully insured & bonded",
    body: "Every technician is covered — no liability risk to your business.",
  },
  {
    icon: ThumbsUp,
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-100",
    title: "100% streak-free guarantee",
    body: "Not happy with a spot? We come back and fix it, free of charge.",
  },
  {
    icon: Clock,
    color: "bg-violet-50 border-violet-100 text-violet-700",
    iconBg: "bg-violet-100",
    title: "On-time, every time",
    body: "Recurring visits land on the same day and window, month after month.",
  },
  {
    icon: Award,
    color: "bg-amber-50 border-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    title: "Trained, uniformed crews",
    body: "The same background-checked techs handle your property visit to visit.",
  },
  {
    icon: Users,
    color: "bg-pg-bg border-cyan-100 text-pg-primary",
    iconBg: "bg-pg-primary/10",
    title: "Trusted by hundreds of NYC properties",
    body: "Storefronts, restaurants, and office buildings across all five boroughs.",
  },
  {
    icon: MapPin,
    color: "bg-slate-50 border-slate-200 text-slate-700",
    iconBg: "bg-slate-100",
    title: "All 5 boroughs covered",
    body: "Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.",
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Why trust PrimeGlass" className="border-slate-100 border-b bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              Why PrimeGlass
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Built for glass that
              <br className="hidden sm:block" /> stays clean
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              The details that make property managers and owners switch to PrimeGlass and stay.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((badge, i) => (
            <FadeIn delay={i * 0.08} key={badge.title}>
              <div className={`flex items-start gap-4 rounded-2xl border p-5 ${badge.color}`}>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${badge.iconBg}`}>
                  <badge.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    {badge.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-80" style={{ fontFamily: "var(--font-body)" }}>
                    {badge.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

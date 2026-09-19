import { CheckCircle2, MapPin } from "lucide-react";
import { FadeIn } from "./fade-in";

const BOROUGHS = [
  { name: "Manhattan", neighborhoods: "Midtown, FiDi, Upper East & West Side, Harlem", clients: "150+", color: "border-blue-200 bg-blue-50 hover:border-blue-300", dot: "bg-blue-500" },
  { name: "Brooklyn", neighborhoods: "Williamsburg, DUMBO, Park Slope, Bushwick", clients: "130+", color: "border-violet-200 bg-violet-50 hover:border-violet-300", dot: "bg-violet-500" },
  { name: "Queens", neighborhoods: "Long Island City, Astoria, Flushing, Forest Hills", clients: "90+", color: "border-emerald-200 bg-emerald-50 hover:border-emerald-300", dot: "bg-emerald-500" },
  { name: "The Bronx", neighborhoods: "Riverdale, Fordham, Mott Haven, Pelham Bay", clients: "60+", color: "border-orange-200 bg-orange-50 hover:border-orange-300", dot: "bg-orange-500" },
  { name: "Staten Island", neighborhoods: "St. George, Tottenville, New Dorp", clients: "40+", color: "border-rose-200 bg-rose-50 hover:border-rose-300", dot: "bg-rose-500" },
];

const GUARANTEES = [
  "Free re-clean within 48 hours if you're not satisfied",
  "Same crew assigned to your property for consistency",
  "Fully insured and bonded on every job",
  "Flexible scheduling around your business hours",
];

export function Coverage() {
  return (
    <section aria-label="NYC borough coverage" className="py-20 sm:py-28" id="coverage" style={{ background: "#0f172a" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/20 px-3 py-1 font-semibold text-pg-secondary text-xs uppercase tracking-widest">
              Coverage
            </span>
            <h2
              className="mb-4 text-3xl text-white leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Serving all five boroughs
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-400" style={{ fontFamily: "var(--font-body)" }}>
              Wherever your glass is in NYC, we can reach it.
            </p>
          </div>
        </FadeIn>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BOROUGHS.map((borough, i) => (
            <FadeIn className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""} delay={i * 0.1} key={borough.name}>
              <article className={`cursor-default rounded-2xl border p-5 transition-colors duration-200 ${borough.color}`}>
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div aria-hidden="true" className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${borough.dot}`} />
                    <h3 className="font-bold text-base text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      {borough.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/60 px-2 py-0.5 font-semibold text-slate-500 text-xs">
                    {borough.clients} clients
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  <MapPin aria-hidden="true" className="mr-1 inline h-3 w-3 text-slate-400" />
                  {borough.neighborhoods}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 text-center font-bold text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Our commitment to you
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {GUARANTEES.map((g) => (
                <div className="flex items-start gap-3" key={g}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pg-secondary" />
                  <p className="text-slate-300 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {g}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

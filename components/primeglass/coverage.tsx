import { CheckCircle2, MapPin } from "lucide-react";
import { FadeIn } from "./fade-in";

const BOROUGHS = [
  { name: "Manhattan", neighborhoods: "Midtown, FiDi, Upper East & West Side, Harlem", color: "border-blue-200 bg-blue-50 hover:border-blue-300", dot: "bg-blue-500" },
  { name: "Brooklyn", neighborhoods: "Williamsburg, DUMBO, Park Slope, Bushwick", color: "border-violet-200 bg-violet-50 hover:border-violet-300", dot: "bg-violet-500" },
  { name: "Queens", neighborhoods: "Long Island City, Astoria, Flushing, Forest Hills", color: "border-emerald-200 bg-emerald-50 hover:border-emerald-300", dot: "bg-emerald-500" },
  { name: "The Bronx", neighborhoods: "Riverdale, Fordham, Mott Haven, Pelham Bay", color: "border-orange-200 bg-orange-50 hover:border-orange-300", dot: "bg-orange-500" },
  { name: "Staten Island", neighborhoods: "St. George, Tottenville, New Dorp", color: "border-rose-200 bg-rose-50 hover:border-rose-300", dot: "bg-rose-500" },
];

const QUOTE_PRINCIPLES = [
  "Window size, shape, height, and access are reflected in the scope",
  "Interior and exterior work are defined before scheduling",
  "One-time and recurring service options can be discussed",
  "Property photos help clarify unusual glass and access conditions",
];

export function Coverage() {
  return (
    <section aria-label="NYC borough coverage" className="pg-dark-grid pg-section" id="coverage">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow border-pg-secondary/20 bg-pg-primary/20 text-pg-secondary">
              Coverage
            </span>
            <h2 className="pg-heading text-white">
              Commercial window cleaning across all five boroughs
            </h2>
            <p className="pg-lede text-slate-300" style={{ fontFamily: "var(--font-body)" }}>
              Tell us where the property is and what kind of windows you need cleaned.
            </p>
          </div>
        </FadeIn>

        <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {BOROUGHS.map((borough, i) => (
            <FadeIn
              className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${
                i === 4 ? "md:col-span-2" : ""
              }`}
              delay={i * 0.1}
              key={borough.name}
            >
              <article className={`h-full cursor-default rounded-2xl border p-5 shadow-[0_12px_30px_rgb(0_0_0/0.12)] transition-colors duration-200 sm:p-6 ${borough.color}`}>
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div aria-hidden="true" className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${borough.dot}`} />
                    <h3 className="font-bold text-base text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      {borough.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/60 px-2 py-0.5 font-semibold text-slate-500 text-xs">
                    Service area
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-6" style={{ fontFamily: "var(--font-body)" }}>
                  <MapPin aria-hidden="true" className="mr-1 inline h-3 w-3 text-slate-400" />
                  {borough.neighborhoods}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] sm:p-8">
            <h3 className="mb-6 text-center font-bold text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
              What to expect from your quote
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-8">
              {QUOTE_PRINCIPLES.map((principle) => (
                <div className="flex items-start gap-3" key={principle}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pg-secondary" />
                  <p className="text-slate-300 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {principle}
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

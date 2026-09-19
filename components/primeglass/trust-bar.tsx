import { Building2 } from "lucide-react";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const STATS = [
  { value: "1,200+", label: "Windows cleaned monthly" },
  { value: "4.9★", label: "Average client rating" },
  { value: "5", label: "Boroughs covered" },
  { value: "100%", label: "Streak-free guarantee" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-slate-100 border-b bg-white">
      <div className="border-cyan-100 border-b bg-pg-bg">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-1.5 whitespace-nowrap font-semibold text-pg-primary text-sm">
              <Building2 aria-hidden="true" className="h-4 w-4" />
              All 5 boroughs
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {BOROUGHS.map((borough) => (
                <span
                  className="rounded-full border border-pg-primary/20 bg-white px-3 py-1 font-medium text-pg-primary-dark text-sm shadow-sm"
                  key={borough}
                >
                  {borough}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div className="text-center" key={stat.label}>
              <div
                className="mb-1 font-extrabold text-3xl text-pg-primary"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

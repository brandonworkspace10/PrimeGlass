import { Building2 } from "lucide-react";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const CADENCES = [
  { value: "2x weekly", label: "Busy corners, outdoor dining, heavy traffic" },
  { value: "Weekly", label: "Most storefronts, restaurants, and food service" },
  { value: "Biweekly", label: "Retail, offices, and professional spaces" },
  { value: "Monthly", label: "Sheltered entrances and low-traffic glass" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-slate-100 border-b bg-white">
      <div className="border-cyan-100 border-b bg-pg-bg">
        <div className="pg-container py-3.5">
          <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-5">
            <div className="flex items-center gap-1.5 whitespace-nowrap font-semibold text-pg-primary text-sm">
              <Building2 aria-hidden="true" className="h-4 w-4" />
              Recurring window cleaning across NYC
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:justify-start">
              {BOROUGHS.map((borough) => (
                <span
                  className="rounded-full border border-pg-primary/20 bg-white px-2.5 py-1 font-bold text-[0.7rem] text-pg-primary-dark shadow-sm sm:px-3 sm:text-xs"
                  key={borough}
                >
                  {borough}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pg-container py-8 sm:py-10">
        <p className="mb-6 text-center font-bold text-[0.65rem] text-slate-400 uppercase tracking-[0.18em]">
          Plans start at the rhythm your property needs
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {CADENCES.map((cadence) => (
            <div
              className="border-slate-100 px-3 py-5 text-center [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r md:border-r md:border-b-0 md:py-0 md:last:border-r-0"
              key={cadence.label}
            >
              <div
                className="mb-1 font-extrabold text-2xl text-pg-primary tracking-tight tabular-nums sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cadence.value}
              </div>
              <div className="mx-auto max-w-36 text-slate-500 text-xs leading-5 sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {cadence.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Building2 } from "lucide-react";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const CAPABILITIES = [
  { value: "Any size", label: "From single panes to large façades" },
  { value: "Any shape", label: "Standard and custom-shaped glass" },
  { value: "Inside + out", label: "Interior and exterior service options" },
  { value: "5 boroughs", label: "Commercial service across NYC" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-slate-100 border-b bg-white">
      <div className="border-cyan-100 border-b bg-pg-bg">
        <div className="pg-container py-3.5">
          <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-5">
            <div className="flex items-center gap-1.5 whitespace-nowrap font-semibold text-pg-primary text-sm">
              <Building2 aria-hidden="true" className="h-4 w-4" />
              Commercial window cleaning across NYC
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
        <div className="grid grid-cols-2 md:grid-cols-4">
          {CAPABILITIES.map((capability) => (
            <div
              className="border-slate-100 px-3 py-5 text-center [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r md:border-r md:border-b-0 md:py-0 md:last:border-r-0"
              key={capability.label}
            >
              <div
                className="mb-1 font-extrabold text-2xl text-pg-primary tracking-tight tabular-nums sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capability.value}
              </div>
              <div className="mx-auto max-w-32 text-slate-500 text-xs leading-5 sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {capability.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

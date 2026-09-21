import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "./fade-in";

function getPlanCtaClass(highlight: boolean) {
  if (highlight) return "bg-pg-primary text-white shadow-md hover:bg-pg-primary-dark";
  return "border border-pg-primary/20 bg-pg-bg text-pg-primary hover:bg-pg-primary hover:text-white";
}

const BASE_PLANS = [
  {
    name: "Every Other Week",
    visits: "2",
    description: "Retail shops, offices, salons, and professional spaces on quieter blocks.",
    highlight: false,
    features: [
      "Interior and exterior glass",
      "Doors, frames, and sills by scope",
      "Same scope every visit",
      "Scheduled around your hours",
      "Re-scoped if the property changes",
    ],
    note: "Best when glass stays presentable for about two weeks.",
  },
  {
    name: "Weekly",
    visits: "4",
    description: "Restaurants, cafés, delis, clinics, and storefronts with steady daily traffic.",
    highlight: true,
    features: [
      "Interior and exterior glass",
      "Doors, frames, and sills by scope",
      "Same scope every visit",
      "Scheduled around your hours",
      "Re-scoped if the property changes",
    ],
    note: "Best when handprints and street grime return within days.",
  },
  {
    name: "Twice a Week",
    visits: "8",
    description: "Busy corners, outdoor dining, and high-volume food service with constant traffic.",
    highlight: false,
    features: [
      "Interior and exterior glass",
      "Doors, frames, and sills by scope",
      "Same scope every visit",
      "Scheduled around your hours",
      "Re-scoped if the property changes",
    ],
    note: "Best when the glass has to look clean at every service.",
  },
];

export function Pricing() {
  return (
    <section
      aria-label="Pricing"
      className="pg-section"
      id="pricing"
      style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #fff 60%)" }}
    >
      <div className="pg-container">
        <FadeIn>
          <div className="mb-8 text-center">
            <span className="pg-eyebrow">
              Recurring plans
            </span>
            <h2 className="pg-heading">
              Pick the rhythm your storefront needs
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Every plan covers the same scope. The only thing that changes is how often we
              visit. Pricing depends on window count, size, shape, and access, so each plan is
              quoted for your property.
            </p>
          </div>
        </FadeIn>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BASE_PLANS.map((plan, i) => {
            return (
              <FadeIn
                className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                delay={i * 0.1}
                key={plan.name}
              >
                <article
                  className={`relative flex h-full flex-col rounded-2xl border transition-shadow duration-200 ${
                    plan.highlight
                      ? "border-pg-primary bg-white shadow-pg-primary/10 shadow-xl lg:scale-[1.025]"
                      : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pg-primary px-3 py-1 font-bold text-white text-xs">
                      Most NYC Storefronts
                    </div>
                  )}

                  <div className="p-5 pb-0 sm:p-6 sm:pb-0">
                    <h3 className="mb-1 font-bold text-xl text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      {plan.name}
                    </h3>
                    <p className="mb-5 text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {plan.description}
                    </p>

                    <p className="mb-1 font-bold text-[0.65rem] text-slate-400 uppercase tracking-[0.16em]">
                      Visits per month
                    </p>
                    <p
                      className={`mb-1 flex items-baseline gap-2 font-extrabold text-4xl tabular-nums ${plan.highlight ? "text-pg-primary" : "text-slate-900"}`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {plan.visits}
                      <span className="font-bold text-base text-slate-400">
                        quoted for your property
                      </span>
                    </p>
                    <div className="mb-6" />
                  </div>

                  <div className="flex flex-1 flex-col gap-6 px-6 pb-6">
                    <ul className="flex flex-1 flex-col gap-2.5">
                      {plan.features.map((feature) => (
                        <li className="flex items-start gap-2 text-slate-600 text-sm" key={feature}>
                          <Check
                            aria-hidden="true"
                            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-pg-primary" : "text-emerald-500"}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-2">
                      <a
                        className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-sm transition-[background-color,border-color,color,box-shadow,transform] duration-200 ${getPlanCtaClass(plan.highlight)}`}
                        href="#quote"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Quote This Plan
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                      <p className="text-center text-slate-400 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        {plan.note}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Not sure which rhythm fits?{" "}
              <a
                className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark"
                href="#visit-plan"
              >
                Use the visit planner
              </a>
            </p>
            <p className="max-w-2xl text-slate-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Need a single cleaning instead? We also quote one-time visits for move-ins, events,
              and post-construction cleanups. Every quote defines the windows included, interior
              and exterior work, access requirements, and service frequency.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

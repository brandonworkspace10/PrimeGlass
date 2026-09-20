import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "./fade-in";

function getPlanCtaClass(highlight: boolean) {
  if (highlight) return "bg-pg-primary text-white shadow-md hover:bg-pg-primary-dark";
  return "border border-pg-primary/20 bg-pg-bg text-pg-primary hover:bg-pg-primary hover:text-white";
}

const BASE_PLANS = [
  {
    name: "Storefront & Small Business",
    description: "For storefronts, restaurants, salons, retail spaces, and small offices.",
    highlight: false,
    features: [
      "Street-level windows & doors",
      "Interior and exterior options",
      "One-time or recurring service",
      "Frames and sills by scope",
      "Scheduling around business hours",
    ],
    note: "Best for individual locations with straightforward access.",
  },
  {
    name: "Commercial Property",
    description: "For larger offices, retail locations, restaurants, and managed properties.",
    highlight: true,
    features: [
      "Multi-window service scopes",
      "Lobbies and common-area glass",
      "Interior and exterior options",
      "Property-specific access planning",
      "Recurring schedule options",
    ],
    note: "Best for properties with multiple window areas or service zones.",
  },
  {
    name: "Large, High & Custom Glass",
    description: "For oversized panes, elevated windows, façades, and non-standard shapes.",
    highlight: false,
    features: [
      "Oversized and multi-panel glass",
      "High or hard-to-reach windows",
      "Custom-shaped and specialty glass",
      "Access review before scheduling",
      "Scope based on site conditions",
    ],
    note: "Best for glass that needs additional access or planning.",
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
              Service options
            </span>
            <h2 className="pg-heading">
              Window cleaning scoped to your property
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Commercial window cleaning prices depend on size, shape, access, condition, and
              frequency. Choose the property type closest to yours to start the quote.
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
                      Most Commercial Properties
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
                      Pricing
                    </p>
                    <p
                      className={`mb-6 font-extrabold text-2xl ${plan.highlight ? "text-pg-primary" : "text-slate-900"}`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Property-specific quote
                    </p>
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
                        Get My Quote
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
          <p className="mt-8 text-center text-slate-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Every quote should define the windows included, interior and exterior work, access
            requirements, service frequency, and any property-specific constraints.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

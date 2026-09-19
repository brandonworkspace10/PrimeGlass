"use client";

import { ArrowRight, Check, Phone } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./fade-in";

type FrequencyKey = "1x" | "2x";

interface FreqPrice {
  price: string;
  sub: string;
  period: string;
  badge: string | null;
}

// Index 0 = Storefront, 1 = Business, 2 = High-Rise / Enterprise
// Figures are illustrative starting rates for interior + exterior window cleaning
// on a fixed weekly schedule — always confirmed after a walkthrough or photos.
const FREQ_PRICING: Record<FrequencyKey, [FreqPrice, FreqPrice, FreqPrice]> = {
  "1x": [
    { price: "$150", sub: "~4 visits/month, ~$35/visit", period: "/month", badge: null },
    { price: "$380", sub: "~4 visits/month, ~$88/visit", period: "/month", badge: "Most Popular" },
    { price: "Custom", sub: "Custom scope & frequency", period: "", badge: "Custom" },
  ],
  "2x": [
    { price: "$260", sub: "~9 visits/month, ~$30/visit", period: "/month", badge: null },
    { price: "$650", sub: "~9 visits/month, ~$75/visit", period: "/month", badge: "Most Popular" },
    { price: "Custom", sub: "Custom scope & frequency", period: "", badge: "Custom" },
  ],
};

function getPlanCtaClass(highlight: boolean, isLarge: boolean) {
  if (highlight) return "bg-pg-primary text-white shadow-md hover:bg-pg-primary-dark";
  if (isLarge) return "bg-slate-800 text-white hover:bg-pg-primary";
  return "border border-pg-primary/20 bg-pg-bg text-pg-primary hover:bg-pg-primary hover:text-white";
}

const BASE_PLANS = [
  {
    name: "Storefront",
    description: "For single storefronts & small retail (up to ~8 panes)",
    highlight: false,
    features: [
      "Interior & exterior glass",
      "Door glass & handprints",
      "Frames & sills wiped down",
      "Fixed weekly schedule",
      "100% streak-free guarantee",
    ],
    cta: "Get a Quote",
    note: "Most storefronts, up to 8 panes",
  },
  {
    name: "Business",
    description: "For offices, restaurants & multi-window retail (~15–20 panes)",
    highlight: true,
    features: [
      "Interior & exterior glass",
      "Door glass & handprints",
      "Frames & sills wiped down",
      "Fixed weekly schedule",
      "100% streak-free guarantee",
      "Priority scheduling",
    ],
    cta: "Get a Quote",
    note: "Up to 20 panes, priority scheduling",
  },
  {
    name: "High-Rise / Enterprise",
    description: "For office towers, property managers & multi-site accounts",
    highlight: false,
    features: [
      "Multi-story exterior glass",
      "Rope-access / OSHA-compliant crews",
      "Lobby & common-area glass",
      "Fixed weekly schedule",
      "Dedicated account manager",
      "Multi-property billing",
      "Custom SLA & reporting",
    ],
    cta: "Contact Us",
    note: "Billed per project after a site inspection",
  },
];

export function Pricing() {
  const [activeFreq, setActiveFreq] = useState<FrequencyKey>("1x");

  const FREQUENCIES: { key: FrequencyKey; label: string; note: string }[] = [
    { key: "1x", label: "1× Weekly", note: "Most storefronts start here — once a week keeps glass looking sharp." },
    { key: "2x", label: "2× Weekly", note: "For high-traffic corners and busy retail — the best rate per visit." },
  ];

  const activeNote = FREQUENCIES.find((f) => f.key === activeFreq)?.note;

  return (
    <section
      aria-label="Pricing"
      className="py-20 sm:py-28"
      id="pricing"
      style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #fff 60%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-6 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              Pricing
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Simple, transparent plans
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Window cleaning runs on a fixed weekly schedule — once or twice a week. Prices shown
              are illustrative starting rates, confirmed after a walkthrough or photos.
            </p>
          </div>

          <div aria-label="Cleaning frequency" className="mb-6 flex flex-wrap justify-center gap-2" role="group">
            {FREQUENCIES.map(({ key, label }) => {
              const isActive = activeFreq === key;
              return (
                <button
                  aria-pressed={isActive}
                  className={`cursor-pointer rounded-full px-4 py-1.5 font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-pg-primary text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-pg-primary/40 hover:text-pg-primary"
                  }`}
                  key={key}
                  onClick={() => setActiveFreq(key)}
                  style={{ fontFamily: "var(--font-heading)" }}
                  type="button"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {activeNote && (
            <div className="mb-8 mx-auto max-w-xl rounded-xl border border-pg-primary/20 bg-sky-50 px-5 py-3 text-center">
              <p className="font-semibold text-pg-primary-dark text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                {activeNote}
              </p>
            </div>
          )}
        </FadeIn>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BASE_PLANS.map((plan, i) => {
            const freq = FREQ_PRICING[activeFreq][i];
            const isLarge = i === 2;

            return (
              <FadeIn delay={i * 0.1} key={plan.name}>
                <article
                  className={`relative flex h-full flex-col rounded-2xl border transition-shadow duration-200 ${
                    plan.highlight
                      ? "scale-[1.02] border-pg-primary bg-white shadow-pg-primary/10 shadow-xl"
                      : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {freq.badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-bold text-xs ${
                        plan.highlight ? "bg-pg-primary text-white" : "bg-slate-800 text-white"
                      }`}
                    >
                      {freq.badge}
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <h3 className="mb-1 font-bold text-lg text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                      {plan.name}
                    </h3>
                    <p className="mb-5 text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {plan.description}
                    </p>

                    <div className="mb-1 flex items-end gap-1.5">
                      <span
                        className={`font-extrabold text-4xl leading-none ${plan.highlight ? "text-pg-primary" : "text-slate-900"}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {freq.price}
                      </span>
                      {freq.period && <span className="mb-1 text-slate-400 text-sm">{freq.period}</span>}
                    </div>

                    <p className="mb-6 text-slate-400 text-xs">{freq.sub}</p>
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
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-sm transition-all duration-200 ${getPlanCtaClass(plan.highlight, isLarge)}`}
                        href="#quote"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {isLarge ? (
                          <>
                            <Phone aria-hidden="true" className="h-4 w-4" />
                            {plan.cta}
                          </>
                        ) : (
                          <>
                            {plan.cta}
                            <ArrowRight aria-hidden="true" className="h-4 w-4" />
                          </>
                        )}
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
            Graffiti removal, broken glass replacement, and sticker/adhesive removal are quoted
            separately based on damage — see above or request a free assessment.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

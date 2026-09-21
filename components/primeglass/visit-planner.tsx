"use client";

import { ArrowRight, CalendarClock, Check } from "lucide-react";
import { useMemo, useState } from "react";
import {
  FOOT_TRAFFIC_OPTIONS,
  type FootTraffic,
  PROPERTY_PROFILES,
  recommendVisitPlan,
  STREET_EXPOSURE_OPTIONS,
  type StreetExposure,
  VISIT_PLAN_STORAGE_KEY,
} from "@/lib/visit-frequency";
import { FadeIn } from "./fade-in";

const CHOICE_BASE =
  "flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center font-bold text-sm transition-[background-color,border-color,color] duration-200";
const CHOICE_ON = "border-pg-primary bg-pg-primary text-white";
const CHOICE_OFF = "border-slate-200 bg-white text-slate-600 hover:border-pg-primary/40 hover:text-pg-primary";

function choiceClass(active: boolean) {
  return `${CHOICE_BASE} ${active ? CHOICE_ON : CHOICE_OFF}`;
}

export function VisitPlanner() {
  const [propertyId, setPropertyId] = useState(PROPERTY_PROFILES[0].id);
  const [footTraffic, setFootTraffic] = useState<FootTraffic>("medium");
  const [streetExposure, setStreetExposure] = useState<StreetExposure>("standard");
  const [highTouchEntry, setHighTouchEntry] = useState(false);

  const plan = useMemo(
    () => recommendVisitPlan({ propertyId, footTraffic, streetExposure, highTouchEntry }),
    [propertyId, footTraffic, streetExposure, highTouchEntry],
  );

  const propertyLabel =
    PROPERTY_PROFILES.find((entry) => entry.id === propertyId)?.label ?? PROPERTY_PROFILES[0].label;

  const handOffToQuote = () => {
    try {
      sessionStorage.setItem(
        VISIT_PLAN_STORAGE_KEY,
        JSON.stringify({
          propertyLabel,
          cadenceLabel: plan.cadenceLabel,
          visitsPerMonth: plan.visitsPerMonth,
        }),
      );
    } catch {
      // Private browsing or storage disabled: the quote form still works unprefilled.
    }
  };

  return (
    <section aria-label="Visit frequency planner" className="pg-section bg-pg-surface" id="visit-plan">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">Free visit planner</span>
            <h2 className="pg-heading">How often should your windows be cleaned?</h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Answer four questions about your property. We&rsquo;ll recommend a starting
              frequency based on how fast that kind of glass collects grime, then quote that
              exact plan.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_38px_rgb(15_23_42/0.05)] sm:p-7">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-bold text-slate-800 text-sm"
                    htmlFor="planner-property"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    1. What kind of property is it?
                  </label>
                  <select
                    className="pg-field cursor-pointer"
                    id="planner-property"
                    onChange={(event) => setPropertyId(event.target.value)}
                    value={propertyId}
                  >
                    {PROPERTY_PROFILES.map((profile) => (
                      <option key={profile.id} value={profile.id}>
                        {profile.label}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset className="flex flex-col gap-2 border-0 p-0">
                  <legend
                    className="mb-1 font-bold text-slate-800 text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    2. How much foot traffic do you get?
                  </legend>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {FOOT_TRAFFIC_OPTIONS.map((option) => (
                      <label className={choiceClass(footTraffic === option.value)} key={option.value}>
                        <input
                          checked={footTraffic === option.value}
                          className="sr-only"
                          name="planner-traffic"
                          onChange={() => setFootTraffic(option.value)}
                          type="radio"
                          value={option.value}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    {FOOT_TRAFFIC_OPTIONS.find((option) => option.value === footTraffic)?.hint}
                  </p>
                </fieldset>

                <fieldset className="flex flex-col gap-2 border-0 p-0">
                  <legend
                    className="mb-1 font-bold text-slate-800 text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    3. How exposed is the glass to the street?
                  </legend>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {STREET_EXPOSURE_OPTIONS.map((option) => (
                      <label
                        className={choiceClass(streetExposure === option.value)}
                        key={option.value}
                      >
                        <input
                          checked={streetExposure === option.value}
                          className="sr-only"
                          name="planner-exposure"
                          onChange={() => setStreetExposure(option.value)}
                          type="radio"
                          value={option.value}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    {STREET_EXPOSURE_OPTIONS.find((option) => option.value === streetExposure)?.hint}
                  </p>
                </fieldset>

                <fieldset className="flex flex-col gap-2 border-0 p-0">
                  <legend
                    className="mb-1 font-bold text-slate-800 text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    4. Sidewalk seating or a constantly handled entrance?
                  </legend>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" },
                    ].map((option) => (
                      <label
                        className={choiceClass(highTouchEntry === option.value)}
                        key={String(option.value)}
                      >
                        <input
                          checked={highTouchEntry === option.value}
                          className="sr-only"
                          name="planner-entry"
                          onChange={() => setHighTouchEntry(option.value)}
                          type="radio"
                          value={String(option.value)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-pg-primary/20 bg-white p-5 shadow-[0_16px_44px_rgb(8_145_178/0.12)] sm:p-7">
              <div aria-live="polite" role="status">
                <p className="font-bold text-[0.65rem] text-slate-400 uppercase tracking-[0.18em]">
                  Recommended starting plan
                </p>
                <p
                  className="mt-2 flex items-baseline gap-2 font-extrabold text-4xl text-pg-primary tabular-nums"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {plan.visitsPerMonth}
                  <span className="font-bold text-base text-slate-500">
                    {plan.visitsPerMonth === 1 ? "visit a month" : "visits a month"}
                  </span>
                </p>
                <p
                  className="mt-1 flex items-center gap-2 font-bold text-pg-primary-dark text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CalendarClock aria-hidden="true" className="h-4 w-4" />
                  {plan.cadenceLabel}
                  <span className="font-medium text-slate-400 text-sm">({plan.intervalLabel})</span>
                </p>
                <p
                  className="mt-3 text-slate-600 text-sm leading-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {plan.summary}
                </p>
              </div>

              <ul className="flex flex-col gap-2 border-slate-100 border-t pt-4">
                {plan.reasons.map((reason) => (
                  <li className="flex items-start gap-2 text-slate-600 text-sm leading-6" key={reason}>
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-shrink-0 text-pg-cta" />
                    <span style={{ fontFamily: "var(--font-body)" }}>{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2 pt-2">
                <a
                  className="pg-button-primary w-full"
                  href="#quote"
                  onClick={handOffToQuote}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Quote This Plan
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <p
                  className="text-center text-slate-400 text-xs leading-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  A starting recommendation, not a fixed rule. We confirm the final cadence after
                  reviewing your property.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

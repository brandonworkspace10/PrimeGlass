/**
 * Recommends a starting visit frequency for a recurring window cleaning plan.
 *
 * Scope is street-level business fronts in NYC, so every profile here is
 * ground-floor customer-facing glass. The model is a base cadence per property
 * type, adjusted by the three factors that drive how fast that glass stops
 * looking clean: how many people pass and touch it, how exposed it is to road
 * grime, and whether the entrance is handled constantly. The result is a
 * starting point for a quote, not a fixed rule — the final cadence is
 * confirmed after reviewing the property.
 */

export type FootTraffic = "high" | "medium" | "low";
export type StreetExposure = "busy" | "standard" | "sheltered";

export interface PropertyProfile {
  id: string;
  label: string;
  baseVisits: number;
  driver: string;
}

/** Base visits per month before traffic, exposure, and entry adjustments. */
export const PROPERTY_PROFILES: PropertyProfile[] = [
  {
    id: "restaurant",
    label: "Restaurant, café, or bar",
    baseVisits: 4,
    driver: "Food service glass picks up steam, grease film, and handprints faster than any other storefront.",
  },
  {
    id: "grocery",
    label: "Grocery, bodega, or deli",
    baseVisits: 4,
    driver: "Constant in-and-out traffic keeps door glass and lower panes marked all day.",
  },
  {
    id: "medical",
    label: "Medical, dental, or clinic",
    baseVisits: 4,
    driver: "Patients read clean glass as a hygiene signal, so the standard is higher than typical retail.",
  },
  {
    id: "retail",
    label: "Retail shop or boutique",
    baseVisits: 2,
    driver: "Display windows are the storefront's main selling surface and stay presentable between visits.",
  },
  {
    id: "salon",
    label: "Salon, barbershop, or gym",
    baseVisits: 2,
    driver: "Appointment traffic marks door glass steadily without the buildup of food service.",
  },
  {
    id: "office",
    label: "Office or building lobby",
    baseVisits: 2,
    driver: "Lobby glass is high-visibility but sees fewer daily touches than a retail entrance.",
  },
  {
    id: "showroom",
    label: "Showroom or gallery",
    baseVisits: 2,
    driver: "Large display glass shows streaks and dust clearly under showroom lighting.",
  },
];

const TRAFFIC_ADJUSTMENT: Record<FootTraffic, number> = {
  high: 2,
  medium: 0,
  low: -1,
};

const EXPOSURE_ADJUSTMENT: Record<StreetExposure, number> = {
  busy: 1,
  standard: 0,
  sheltered: -1,
};

export const FOOT_TRAFFIC_OPTIONS: { value: FootTraffic; label: string; hint: string }[] = [
  { value: "high", label: "High", hint: "Steady customers all day" },
  { value: "medium", label: "Moderate", hint: "Busy at peak hours" },
  { value: "low", label: "Low", hint: "Appointments or by request" },
];

export const STREET_EXPOSURE_OPTIONS: { value: StreetExposure; label: string; hint: string }[] = [
  { value: "busy", label: "Busy street", hint: "Avenue, bus route, or nearby construction" },
  { value: "standard", label: "Standard block", hint: "Ordinary neighborhood street" },
  { value: "sheltered", label: "Sheltered", hint: "Plaza, setback, arcade, or indoor mall" },
];

export interface VisitPlanInput {
  propertyId: string;
  footTraffic: FootTraffic;
  streetExposure: StreetExposure;
  highTouchEntry: boolean;
}

export interface VisitPlanResult {
  visitsPerMonth: number;
  cadenceLabel: string;
  intervalLabel: string;
  summary: string;
  reasons: string[];
}

interface CadenceTier {
  minScore: number;
  visitsPerMonth: number;
  cadenceLabel: string;
  intervalLabel: string;
  summary: string;
}

const CADENCE_TIERS: CadenceTier[] = [
  {
    minScore: 7,
    visitsPerMonth: 8,
    cadenceLabel: "Twice a week",
    intervalLabel: "about every 3 to 4 days",
    summary: "Your glass is handled and exposed constantly, so it stops looking clean within a few days.",
  },
  {
    minScore: 4,
    visitsPerMonth: 4,
    cadenceLabel: "Once a week",
    intervalLabel: "about every 7 days",
    summary: "Weekly visits keep street-level grime from building into the film that customers notice.",
  },
  {
    minScore: 2,
    visitsPerMonth: 2,
    cadenceLabel: "Every other week",
    intervalLabel: "about every 14 days",
    summary: "Your glass holds up between visits, so a two-week rhythm keeps it consistently presentable.",
  },
  {
    minScore: Number.NEGATIVE_INFINITY,
    visitsPerMonth: 1,
    cadenceLabel: "Once a month",
    intervalLabel: "about every 30 days",
    summary: "Lower traffic and limited exposure mean a monthly reset is usually enough.",
  },
];

export function recommendVisitPlan(input: VisitPlanInput): VisitPlanResult {
  const profile =
    PROPERTY_PROFILES.find((entry) => entry.id === input.propertyId) ?? PROPERTY_PROFILES[0];

  const score =
    profile.baseVisits +
    TRAFFIC_ADJUSTMENT[input.footTraffic] +
    EXPOSURE_ADJUSTMENT[input.streetExposure] +
    (input.highTouchEntry ? 1 : 0);

  const tier =
    CADENCE_TIERS.find((candidate) => score >= candidate.minScore) ??
    CADENCE_TIERS[CADENCE_TIERS.length - 1];

  const reasons = [profile.driver];

  if (input.footTraffic === "high") {
    reasons.push("High foot traffic means door glass and lower panes are touched throughout the day.");
  } else if (input.footTraffic === "low") {
    reasons.push("Lower foot traffic means fewer handprints between visits.");
  }

  if (input.streetExposure === "busy") {
    reasons.push("A busy street adds road dust, exhaust, and rain spray to the exterior glass.");
  } else if (input.streetExposure === "sheltered") {
    reasons.push("A sheltered entrance keeps most road grime off the glass.");
  }

  if (input.highTouchEntry) {
    reasons.push("Sidewalk seating or a constantly handled entrance leaves daily marks at eye level.");
  }

  return {
    visitsPerMonth: tier.visitsPerMonth,
    cadenceLabel: tier.cadenceLabel,
    intervalLabel: tier.intervalLabel,
    summary: tier.summary,
    reasons,
  };
}

/** Key used to hand a planner result to the quote form. */
export const VISIT_PLAN_STORAGE_KEY = "pg:visit-plan";

export interface StoredVisitPlan {
  propertyLabel: string;
  cadenceLabel: string;
  visitsPerMonth: number;
}

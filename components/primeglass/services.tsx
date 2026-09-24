import { ArrowUpRight, DoorOpen, ScanLine, Shapes, Store } from "lucide-react";
import { FadeIn } from "./fade-in";

const SERVICES = [
  {
    icon: Store,
    color: "bg-sky-50 border-sky-100",
    iconColor: "bg-sky-100 text-sky-700",
    tagline: "Street-level glass",
    title: "Storefront Window Cleaning",
    body: "Keep the glass customers see first clear across entrances, display windows, sidelights, and door panels.",
    details: [
      "Interior & exterior options",
      "Display windows & doors",
      "Frames & sills by scope",
      "One-time or recurring service",
    ],
    href: "#quote",
    linkLabel: "Quote My Storefront",
  },
  {
    icon: DoorOpen,
    color: "bg-violet-50 border-violet-100",
    iconColor: "bg-violet-100 text-violet-700",
    tagline: "Ground-floor entrances",
    title: "Lobby & Entrance Glass",
    body: "Keep the ground-floor entrance of an office or building looking sharp for everyone who walks in.",
    details: [
      "Lobby and vestibule glass",
      "Entry doors and side panels",
      "Interior and exterior options",
      "Scheduled around business hours",
    ],
    href: "#quote",
    linkLabel: "Quote My Entrance",
  },
  {
    icon: ScanLine,
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "bg-emerald-100 text-emerald-700",
    tagline: "Awkward access",
    title: "Oversized & Obstructed Glass",
    body: "Tall storefront panes, transoms above the door, and glass blocked by awnings or scaffolding.",
    details: [
      "Full-height display panes",
      "Transoms and upper storefront glass",
      "Awning, gate & scaffold access",
      "Site review before scheduling",
    ],
    href: "#window-types",
    linkLabel: "View Access Factors",
  },
  {
    icon: Shapes,
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-700",
    tagline: "Specialty glass",
    title: "Custom-Shaped Windows",
    body: "Clean angled, divided, curved, and other non-standard glass with a scope built around its shape and access.",
    details: [
      "Angled & divided panes",
      "Curved or specialty glass",
      "Custom access planning",
      "Care matched to the surface",
    ],
    href: "#window-types",
    linkLabel: "View Specialty Glass",
  },
];

export function Services() {
  return (
    <section aria-label="Services" className="pg-section bg-pg-bg" id="services">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">
              What we clean
            </span>
            <h2 className="pg-heading">
              One plan covers every
              <br className="hidden sm:block" /> pane on your property
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Display windows, entry doors, transoms, and custom shapes all scoped into the same
              recurring visit.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <FadeIn delay={i * 0.1} key={service.title}>
              <article className={`flex h-full flex-col gap-5 rounded-2xl border p-5 shadow-[0_10px_30px_rgb(15_23_42/0.04)] sm:p-6 ${service.color}`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconColor}`}>
                  <service.icon aria-hidden="true" className="h-6 w-6" />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    {service.tagline}
                  </p>
                  <h3 className="mb-2 font-bold text-slate-900 text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {service.body}
                  </p>
                </div>

                <ul className="mt-auto flex flex-col gap-1.5">
                  {service.details.map((detail) => (
                    <li className="flex items-center gap-2 text-slate-600 text-sm" key={detail}>
                      <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <a
                  className="mt-1 inline-flex min-h-11 items-center gap-1.5 self-start font-bold text-pg-primary text-sm transition-colors hover:text-pg-primary-dark"
                  href={service.href}
                >
                  {service.linkLabel}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Not sure how often you need us?{" "}
            <a className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark" href="#visit-plan">
              Check your visit frequency
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

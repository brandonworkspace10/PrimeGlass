import { CalendarCheck, ClipboardList, ScanSearch } from "lucide-react";
import { FadeIn } from "./fade-in";

const STEPS = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Tell us about the property",
    body: "Property type, window count, sizes, shapes, and access. Photos help, but they are not required to get started.",
  },
  {
    number: "2",
    icon: ScanSearch,
    title: "Get a scope and a visit frequency",
    body: "We confirm which glass is included, interior and exterior work, and how often your property needs a visit.",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Your visits repeat on schedule",
    body: "Same scope, same rhythm, no rebooking. Tell us if the property changes and we re-scope the plan.",
  },
];

export function HowItWorks() {
  return (
    <section aria-label="How it works" className="pg-section bg-pg-surface" id="how-it-works">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">
              How it works
            </span>
            <h2 className="pg-heading">
              Three steps to glass you stop thinking about
            </h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              Set the scope once, then the schedule does the remembering for you.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <FadeIn delay={i * 0.15} key={step.number}>
                <article className="relative flex h-full flex-col items-start gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_38px_rgb(15_23_42/0.05)] md:items-center md:text-center lg:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute -top-5 -right-1 font-extrabold text-8xl text-pg-primary/[0.055] tracking-tighter"
                  >
                    {step.number}
                  </span>
                  <div className="relative flex items-center gap-3 md:flex-col md:gap-2">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-pg-primary shadow-pg-primary/20 shadow-lg">
                      <step.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    <span aria-hidden="true" className="font-bold text-pg-primary/60 text-[0.65rem] tracking-[0.18em]">
                      STEP {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-3 font-bold text-slate-900 text-lg sm:text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {step.title}
                    </h3>
                    <p className="mx-auto max-w-xs text-slate-600 text-sm leading-6" style={{ fontFamily: "var(--font-body)" }}>
                      {step.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 text-center sm:mt-14">
            <a
              className="pg-button-primary w-full sm:w-auto"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get My Free Cleaning Plan
            </a>
            <p className="mt-3 text-slate-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Requesting a plan is free and doesn&rsquo;t commit you to a schedule.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

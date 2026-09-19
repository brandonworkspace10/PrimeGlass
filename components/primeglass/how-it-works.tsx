import { CalendarCheck, ClipboardList, Sparkles } from "lucide-react";
import { FadeIn } from "./fade-in";

const STEPS = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Request your free quote",
    body: "Tell us about your property — type, size, and glass — and we'll send a scoped quote within 24 hours.",
  },
  {
    number: "2",
    icon: CalendarCheck,
    title: "We schedule your cleaning",
    body: "Pick a frequency that fits — one-time, monthly, or seasonal — and we lock in a recurring visit window.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Enjoy streak-free glass",
    body: "Our crew shows up, cleans every pane, and leaves your property looking sharp — every single visit.",
  },
];

export function HowItWorks() {
  return (
    <section aria-label="How it works" className="bg-white py-20 sm:py-28" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              How it works
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Three steps to spotless glass
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              No contracts to sign in person, no guesswork on pricing.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute z-0 hidden h-px lg:block"
            style={{
              top: "1.75rem",
              left: "calc(16.67% + 2rem)",
              right: "calc(50% + 2rem)",
              background: "linear-gradient(to right, transparent, rgba(8,145,178,0.45) 30%, rgba(8,145,178,0.45) 70%, transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute z-0 hidden h-px lg:block"
            style={{
              top: "1.75rem",
              left: "calc(50% + 2rem)",
              right: "calc(16.67% + 2rem)",
              background: "linear-gradient(to right, transparent, rgba(8,145,178,0.45) 30%, rgba(8,145,178,0.45) 70%, transparent)",
            }}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step, i) => (
              <FadeIn delay={i * 0.15} key={step.number}>
                <article className="relative flex flex-col items-center gap-5 px-2 text-center">
                  <div className="relative flex flex-col items-center gap-1">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-pg-primary shadow-pg-primary/30 shadow-lg">
                      <step.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    <span aria-hidden="true" className="font-bold text-pg-primary/30 text-xs tracking-widest">
                      STEP {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-3 font-bold text-slate-900 text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {step.title}
                    </h3>
                    <p className="mx-auto max-w-xs text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {step.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-pg-cta px-8 py-4 font-semibold text-base text-white shadow-green-900/20 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pg-cta-hover hover:shadow-xl active:translate-y-0"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get started
            </a>
            <p className="mt-3 text-slate-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Free quotes, no obligation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

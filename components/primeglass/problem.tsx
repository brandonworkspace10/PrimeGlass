import { CalendarX, CloudDrizzle, RefreshCcw } from "lucide-react";
import { FadeIn } from "./fade-in";

const PAIN_POINTS = [
  {
    icon: CloudDrizzle,
    title: "Your glass looks dirty again in days",
    body: "Exhaust, rain spray, salt, and handprints rebuild on street-level glass fast. A single cleaning stops looking clean long before anyone books the next one.",
  },
  {
    icon: CalendarX,
    title: "One-off cleanings keep getting postponed",
    body: "Nobody on your team owns the calendar. Window cleaning slides down the list until the glass is bad enough for a customer to comment on it.",
  },
  {
    icon: RefreshCcw,
    title: "Every booking restarts the whole process",
    body: "New quote, new scheduling, another walkthrough of the property. A standing plan settles the scope once and then repeats it.",
  },
];

export function Problem() {
  return (
    <section aria-label="Problem section" className="pg-dark-grid pg-section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(8,145,178,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="pg-container relative">
        <FadeIn>
          <div className="mb-4">
            <span className="inline-block rounded-full border border-red-700/30 bg-red-900/40 px-3 py-1 font-semibold text-red-400 text-xs uppercase tracking-widest">
              What dirty glass costs you
            </span>
          </div>
          <h2
            className="mb-5 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] text-white leading-[1.05] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            Customers judge your glass
            <span className="text-pg-secondary"> before they reach your door.</span>
          </h2>
          <p className="mb-10 max-w-2xl text-base text-slate-300 leading-7 sm:mb-14 sm:text-lg" style={{ fontFamily: "var(--font-body)" }}>
            A one-off cleaning fixes today. A schedule fixes the whole month, which is why most
            NYC storefronts end up on a recurring plan.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn
              className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              delay={i * 0.12}
              key={point.title}
            >
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-sm sm:p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-red-700/20 bg-red-900/40">
                  <point.icon aria-hidden="true" className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {point.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-6" style={{ fontFamily: "var(--font-body)" }}>
                    {point.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-pg-secondary/20 bg-pg-primary/10 p-5 sm:mt-12 sm:flex-row sm:items-center sm:p-6">
            <p className="text-base text-slate-300" style={{ fontFamily: "var(--font-body)" }}>
              <span className="font-semibold text-pg-secondary">Put it on a schedule.</span>{" "}
              Answer four questions and we&rsquo;ll recommend how often your property needs a
              visit.
            </p>
            <a
              className="inline-flex min-h-11 flex-shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap font-bold text-pg-secondary text-sm transition-colors hover:text-white"
              href="#visit-plan"
            >
              See my visit frequency →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

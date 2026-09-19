import { AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";
import { FadeIn } from "./fade-in";

const OPTIONS = [
  {
    icon: Sparkles,
    color: "bg-sky-50 border-sky-100",
    iconColor: "bg-sky-100 text-sky-700",
    title: "Glass polishing & restoration",
    body: "Acid-etched tags and scratch graffiti can't be wiped off — they're physically etched into the surface. Our specialists buff and resurface the pane to restore clarity on light-to-moderate etching.",
    note: "Typically $225–$750 per panel, based on severity",
  },
  {
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "bg-emerald-100 text-emerald-700",
    title: "Anti-graffiti film protection",
    body: "A sacrificial film applied over the glass. If it gets tagged or etched again, we peel and replace the film — not the pane — for a fraction of the cost.",
    note: "Typically $150–$500 per panel installed",
  },
  {
    icon: AlertTriangle,
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-700",
    title: "Full pane replacement",
    body: "When etching is too deep to polish out, we coordinate glass replacement so your storefront looks new again — not just patched.",
    note: "Typically $300–$800+ installed",
  },
];

export function GraffitiEtch() {
  return (
    <section aria-label="Graffiti removal" className="bg-white py-20 sm:py-28" id="graffiti">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              Storefront specialty
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Graffiti removal
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Scratched or acid-etched storefront glass can't just be scrubbed clean. Here's what
              actually works — and what we recommend depending on the damage.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map((opt, i) => (
            <FadeIn delay={i * 0.12} key={opt.title}>
              <article className={`flex h-full flex-col gap-4 rounded-2xl border p-6 ${opt.color}`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${opt.iconColor}`}>
                  <opt.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-bold text-slate-900 text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    {opt.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {opt.body}
                  </p>
                </div>
                <p className="border-slate-900/10 border-t pt-3 font-semibold text-slate-500 text-xs">
                  {opt.note}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Not sure which option fits your damage?{" "}
            <a className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark" href="#quote">
              Get a free damage assessment
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

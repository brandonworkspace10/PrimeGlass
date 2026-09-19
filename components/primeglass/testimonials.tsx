import { Quote, Star } from "lucide-react";
import { FadeIn } from "./fade-in";

/**
 * PLACEHOLDER CONTENT — replace with real customer testimonials before launch.
 * These are illustrative sample quotes, not real reviews.
 */
const TESTIMONIALS = [
  {
    initials: "JM",
    color: "bg-orange-100 text-orange-700",
    quote: "Sample quote: Our storefront glass finally looks the way it did on day one. Booking was easy and the crew is always on time.",
    name: "Sample Client",
    business: "Sample Restaurant",
    type: "Restaurant",
    borough: "Brooklyn",
  },
  {
    initials: "DP",
    color: "bg-slate-200 text-slate-700",
    quote: "Sample quote: Our office lobby glass gets compliments from visitors now. The recurring schedule means we never have to think about it.",
    name: "Sample Client",
    business: "Sample Office Group",
    type: "Office",
    borough: "Manhattan",
  },
  {
    initials: "LK",
    color: "bg-pink-100 text-pink-700",
    quote: "Sample quote: Had graffiti etched into our front window overnight. PrimeGlass came out fast, polished it out, and put anti-graffiti film on so it won't happen again.",
    name: "Sample Client",
    business: "Sample Retail Shop",
    type: "Retail",
    borough: "Queens",
  },
];

function StarIcons({ count }: { count: number }) {
  const keys = ["s1", "s2", "s3", "s4", "s5"];
  return (
    <div aria-hidden="true" className="flex gap-0.5">
      {keys.slice(0, count).map((key) => (
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" key={key} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-20 sm:py-28" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700 text-xs uppercase tracking-widest">
              What clients say
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              Trusted across NYC
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Sample feedback — swap in real reviews as they come in.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn delay={i * 0.12} key={t.name + t.business}>
              <article className="relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <Quote aria-hidden="true" className="absolute top-5 right-6 h-8 w-8 text-pg-primary/20" />

                <StarIcons count={5} />

                <blockquote className="flex-1 text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 border-slate-100 border-t pt-2">
                  <div aria-hidden="true" className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-sm ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      {t.business} · {t.type} · {t.borough}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-slate-500 text-sm sm:flex-row">
            <StarIcons count={5} />
            <span style={{ fontFamily: "var(--font-body)" }}>
              <strong className="text-slate-700">Sample rating</strong> — replace with your real review count
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { Eraser, Grid3X3, Hammer, StickyNote } from "lucide-react";
import { FadeIn } from "./fade-in";

const SERVICES = [
  {
    icon: Eraser,
    color: "bg-sky-50 border-sky-100",
    iconColor: "bg-sky-100 text-sky-700",
    tagline: "Storefront specialty",
    title: "Graffiti Removal",
    body: "Tags, scratches, and acid-etched glass handled by specialists — polished, filmed, or replaced depending on the damage.",
    details: [
      "Free damage assessment",
      "Polishing & resurfacing",
      "Anti-graffiti film protection",
      "See our full breakdown below",
    ],
    href: "#graffiti",
  },
  {
    icon: Hammer,
    color: "bg-violet-50 border-violet-100",
    iconColor: "bg-violet-100 text-violet-700",
    tagline: "Repair",
    title: "Broken Glass Replacement",
    body: "Cracked or shattered storefront glass replaced quickly so you're not boarded up and losing business.",
    details: [
      "Storefront & door glass",
      "Same-week scheduling",
      "Board-up available in a pinch",
      "Insurance paperwork support",
    ],
    href: "#quote",
  },
  {
    icon: StickyNote,
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "bg-emerald-100 text-emerald-700",
    tagline: "Detailing",
    title: "Sticker & Adhesive Removal",
    body: "Old decals, permit stickers, tape residue, and glue scraped and polished off without scratching the glass.",
    details: [
      "Razor-safe removal technique",
      "No scratching or clouding",
      "Great before a re-brand or sale",
      "Bundled with any cleaning visit",
    ],
    href: "#quote",
  },
  {
    icon: Grid3X3,
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-700",
    tagline: "Core service",
    title: "Window Cleaning",
    body: "Interior and exterior glass cleaned on a fixed weekly schedule — the routine that keeps everything above from piling up.",
    details: [
      "Interior & exterior glass",
      "Twice weekly or once weekly",
      "Frames, sills & door glass",
      "100% streak-free guarantee",
    ],
    href: "#pricing",
  },
];

export function Services() {
  return (
    <section aria-label="Services" className="bg-pg-bg py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
              Services
            </span>
            <h2
              className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              What we do for
              <br className="hidden sm:block" /> NYC storefronts
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              From routine cleaning to graffiti and glass repair — everything your storefront glass needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <FadeIn delay={i * 0.1} key={service.title}>
              <article className={`flex h-full flex-col gap-5 rounded-2xl border p-6 ${service.color}`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconColor}`}>
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
                  className="font-medium text-pg-primary text-sm underline underline-offset-2 hover:text-pg-primary-dark"
                  href={service.href}
                >
                  Learn more →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Not sure what you need?{" "}
            <a className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark" href="#quote">
              Get a free assessment
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

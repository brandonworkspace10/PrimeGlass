import { AppWindow, MapPin } from "lucide-react";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Storefront windows", href: "#services" },
    { label: "Lobby & entrance glass", href: "#services" },
    { label: "Oversized & obstructed glass", href: "#window-types" },
    { label: "Custom-shaped glass", href: "#window-types" },
  ],
  "Recurring plans": [
    { label: "Twice a week", href: "#pricing" },
    { label: "Weekly", href: "#pricing" },
    { label: "Every other week", href: "#pricing" },
    { label: "Visit planner", href: "#visit-plan" },
  ],
  Coverage: [
    { label: "Manhattan", href: "#coverage" },
    { label: "Brooklyn", href: "#coverage" },
    { label: "Queens", href: "#coverage" },
    { label: "The Bronx", href: "#coverage" },
    { label: "Staten Island", href: "#coverage" },
  ],
  Company: [
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Window cleaning quote", href: "#quote" },
  ],
};

export function Footer() {
  return (
    <footer className="pg-dark-grid pb-28 pt-16 sm:pb-20 sm:pt-20">
      <div className="pg-container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-white/10 border-b pb-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pg-primary">
                <AppWindow aria-hidden="true" className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="text-pg-coral">Prime</span>
                <span className="text-white">Glass</span>
              </span>
            </div>
            <p className="mb-5 text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Commercial window cleaning for every size and shape.
              <br />
              Serving all five NYC boroughs.
            </p>
            <div className="flex flex-col">
              <p className="flex min-h-11 items-center gap-2 text-slate-400 text-sm">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 flex-shrink-0 text-pg-secondary" />
                All 5 NYC boroughs
              </p>
              <a
                className="mt-2 inline-flex min-h-11 items-center self-start font-bold text-pg-secondary text-sm transition-colors hover:text-white"
                href="#quote"
              >
                Request a window cleaning quote
              </a>
            </div>
          </div>

          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-bold text-white text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
                {category}
              </h3>
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.label}>
                    <a className="flex min-h-11 cursor-pointer items-center text-slate-400 text-sm transition-colors hover:text-white" href={link.href} style={{ fontFamily: "var(--font-body)" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <p className="text-slate-500 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} PrimeGlass. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            Recurring window cleaning for NYC business fronts
          </p>
        </div>
      </div>
    </footer>
  );
}

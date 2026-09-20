import { Grid3X3, Maximize2, Shapes } from "lucide-react";
import { FadeIn } from "./fade-in";

const OPTIONS = [
  {
    icon: Grid3X3,
    color: "bg-sky-50 border-sky-100",
    iconColor: "bg-sky-100 text-sky-700",
    title: "Standard & Storefront Windows",
    body: "Street-level panes, display windows, doors, sidelights, and divided glass can be combined into one clear property scope.",
    note: "Helpful details: pane count, interior access, and preferred frequency",
  },
  {
    icon: Maximize2,
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "bg-emerald-100 text-emerald-700",
    title: "Oversized & Multi-Panel Glass",
    body: "Large panes and broad commercial façades are quoted around dimensions, elevation, surrounding obstacles, and safe access.",
    note: "Helpful details: approximate dimensions, height, obstacles, and photos",
  },
  {
    icon: Shapes,
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-700",
    title: "Custom-Shaped & Specialty Glass",
    body: "Angled, curved, segmented, and other non-standard windows receive a cleaning plan based on their shape, surface, and access.",
    note: "Helpful details: close-up and full-property photos",
  },
];

export function WindowTypes() {
  return (
    <section aria-label="Window sizes and shapes" className="pg-section bg-white" id="window-types">
      <div className="pg-container">
        <FadeIn>
          <div className="pg-section-header">
            <span className="pg-eyebrow">Every size & shape</span>
            <h2 className="pg-heading">Every window belongs in the plan</h2>
            <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
              The fastest path to an accurate quote is showing us what makes your glass unique.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {OPTIONS.map((option, index) => (
            <FadeIn
              className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              delay={index * 0.12}
              key={option.title}
            >
              <article
                className={`flex h-full flex-col gap-5 rounded-2xl border p-5 shadow-[0_10px_32px_rgb(15_23_42/0.04)] sm:p-6 ${option.color}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${option.iconColor}`}
                >
                  <option.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3
                    className="mb-2 font-bold text-slate-900 text-lg"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {option.title}
                  </h3>
                  <p
                    className="text-slate-600 text-sm leading-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {option.body}
                  </p>
                </div>
                <p className="border-slate-900/10 border-t pt-4 font-bold text-slate-600 text-xs leading-5">
                  {option.note}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p
            className="mt-10 text-center text-slate-500 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Have glass that does not fit a standard category?{" "}
            <a
              className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark"
              href="#quote"
            >
              Request a property-specific quote
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

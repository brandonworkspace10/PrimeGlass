"use client";

import { AppWindow, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Visit Planner", href: "#visit-plan" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#pricing" },
  { label: "Coverage", href: "#coverage" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-slate-100 border-b bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="pg-container flex h-16 items-center justify-between pt-[env(safe-area-inset-top)]">
        <Link
          aria-label="PrimeGlass home"
          className="group flex shrink-0 cursor-pointer items-center gap-2"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pg-primary shadow-sm">
            <AppWindow aria-hidden="true" className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            <span className="text-pg-coral">Prime</span>
            <span className={`transition-colors ${scrolled ? "text-pg-primary-dark" : "text-white"}`}>
              Glass
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_LINKS.map((link) => (
            <a
              className={`flex min-h-11 cursor-pointer items-center rounded-lg px-3 font-semibold text-sm transition-colors duration-200 xl:px-4 ${
                scrolled
                  ? "text-slate-600 hover:bg-pg-bg hover:text-pg-primary"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-pg-cta px-4 py-2 font-bold text-sm text-white shadow-sm transition-colors duration-200 hover:bg-pg-cta-hover sm:inline-flex"
            href="#quote"
          >
            Get My Free Plan
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-slate-100 border-t bg-white shadow-[0_18px_35px_rgb(15_23_42/0.12)] lg:hidden"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="pg-container flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <a
                className="flex min-h-12 cursor-pointer items-center rounded-lg px-4 font-semibold text-slate-700 text-sm transition-colors hover:bg-pg-bg hover:text-pg-primary"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-pg-cta px-4 py-3 font-bold text-sm text-white transition-colors hover:bg-pg-cta-hover"
              href="#quote"
              onClick={() => setMenuOpen(false)}
            >
              Get My Free Plan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

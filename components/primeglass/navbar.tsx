"use client";

import { AppWindow, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Coverage", href: "#coverage" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-slate-100 border-b bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
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
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              className={`cursor-pointer rounded-lg px-4 py-2 font-medium text-sm transition-colors duration-200 ${
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
            aria-label="Call PrimeGlass"
            className={`hidden cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 font-medium text-sm transition-colors duration-200 lg:inline-flex ${
              scrolled
                ? "text-pg-primary hover:bg-pg-bg"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
            href="tel:+15550100100"
          >
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            (555) 010-0100
          </a>

          <a
            className="hidden cursor-pointer items-center gap-2 rounded-lg bg-pg-cta px-4 py-2 font-medium text-sm text-white shadow-sm transition-colors duration-200 hover:bg-pg-cta-hover sm:inline-flex"
            href="#quote"
          >
            Get a Free Quote
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-slate-100 border-t bg-white shadow-lg md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                className="cursor-pointer rounded-lg px-4 py-3 font-medium text-slate-700 text-sm transition-colors hover:bg-pg-bg hover:text-pg-primary"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-pg-cta px-4 py-3 font-medium text-sm text-white transition-colors hover:bg-pg-cta-hover"
              onClick={() => {
                setMenuOpen(false);
                document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
              }}
              type="button"
            >
              Get a Free Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

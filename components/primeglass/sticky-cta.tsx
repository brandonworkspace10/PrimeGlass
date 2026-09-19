"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed right-0 bottom-0 left-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-white/10 border-t px-4 py-3 sm:px-6" style={{ background: "#0c4a6e" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="hidden sm:block">
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Ready for streak-free glass?
            </p>
            <p className="text-cyan-200 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              Free quotes, no obligation.
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <a
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-pg-cta px-4 py-2.5 font-semibold text-sm text-white transition-colors hover:bg-pg-cta-hover sm:flex-none"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get a Free Quote
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              aria-label="Call PrimeGlass"
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 font-medium text-sm text-white transition-colors hover:bg-white/10"
              href="tel:+15550100100"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span className="hidden sm:inline">(555) 010-0100</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

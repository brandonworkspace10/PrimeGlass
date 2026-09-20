"use client";

import { ArrowRight } from "lucide-react";
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
      className={`fixed right-0 bottom-0 left-0 z-40 transition-[transform,visibility] duration-300 ${
        visible ? "visible translate-y-0" : "invisible pointer-events-none translate-y-full"
      }`}
    >
      <div
        className="border-white/10 border-t px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
        style={{ background: "#0c4a6e" }}
      >
        <div className="pg-container flex items-center justify-between gap-3 px-0 sm:px-0 lg:px-0">
          <div className="hidden sm:block">
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Need cleaner windows?
            </p>
            <p className="text-cyan-200 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              Tell us about the size, shape, and access.
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <a
              className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-pg-cta px-4 font-bold text-sm text-white transition-colors hover:bg-pg-cta-hover sm:flex-none"
              href="#quote"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get My Window Cleaning Quote
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

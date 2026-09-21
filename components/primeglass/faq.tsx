"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/site-content";
import { FadeIn } from "./fade-in";

function FaqItem({
  question,
  answer,
  itemId,
}: {
  question: string;
  answer: string;
  itemId: string;
}) {
  const [open, setOpen] = useState(false);
  const buttonId = `${itemId}-button`;
  const panelId = `${itemId}-panel`;

  return (
    <div className="border-slate-200 border-b last:border-0">
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
        id={buttonId}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span
          className="font-bold text-slate-900 text-sm leading-6 transition-colors group-hover:text-pg-primary sm:text-base"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {question}
        </span>
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-pg-bg">
          {open ? (
            <Minus aria-hidden="true" className="h-3.5 w-3.5 text-pg-primary" />
          ) : (
            <Plus aria-hidden="true" className="h-3.5 w-3.5 text-slate-500" />
          )}
        </span>
      </button>
      {open && (
        <div
          aria-labelledby={buttonId}
          className="pb-5 text-slate-500 text-sm leading-relaxed"
          id={panelId}
          role="region"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section aria-label="Frequently asked questions" className="pg-section bg-pg-bg" id="faq">
      <div className="pg-container">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="pg-section-header">
              <span className="pg-eyebrow">
                FAQ
              </span>
              <h2 className="pg-heading">
                Questions before you start a plan
              </h2>
              <p className="pg-lede" style={{ fontFamily: "var(--font-body)" }}>
                Direct answers about frequency, scope, access, and what a quote covers.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 shadow-[0_14px_45px_rgb(15_23_42/0.06)] sm:px-7">
              {FAQ_ITEMS.map((item, index) => (
                <FaqItem
                  answer={item.answer}
                  itemId={`faq-${index + 1}`}
                  key={item.question}
                  question={item.question}
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-center text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Still have questions?{" "}
              <a className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark" href="#quote">
                Get your free cleaning plan
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

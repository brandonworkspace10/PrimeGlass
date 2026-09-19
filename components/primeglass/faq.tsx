"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./fade-in";

const FAQ_ITEMS = [
  {
    question: "Why is cleaning only offered once or twice a week?",
    answer:
      "Storefront glass in NYC gets dirty fast — street dust, handprints, and exhaust build up daily. A fixed weekly schedule (once or twice, depending on foot traffic) is what actually keeps glass looking spotless, rather than a monthly visit that lets grime pile up in between.",
  },
  {
    question: "Are you insured for high-rise and second-story work?",
    answer:
      "Yes. PrimeGlass is fully insured and bonded, and our crews follow OSHA-compliant practices and equipment for any elevated or exterior glass work.",
  },
  {
    question: "Do you clean both the inside and outside of the glass?",
    answer:
      "Yes — every scheduled visit covers interior and exterior glass, plus door glass and handprints. Frame and sill wipe-down is included on Storefront and Business plans.",
  },
  {
    question: "Can you remove graffiti or acid-etched tags from my storefront glass?",
    answer:
      "Etched or scratched glass can't be wiped clean — the damage is physical, not surface dirt. What we offer is glass polishing and restoration to buff out light-to-moderate etching, anti-graffiti film that takes the hit instead of your glass next time, or full pane replacement when the damage is too deep to polish out. See our Graffiti Removal section above for details.",
  },
  {
    question: "What happens if it rains on my scheduled day?",
    answer:
      "Light rain doesn't affect interior cleaning, and we adjust exterior visits around weather automatically — you'll be notified if a visit needs to move.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use commercial-grade, streak-free glass cleaning solutions that are safe for tinted, coated, and standard glass. Eco-friendly options are available on request.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "No long-term contract is required. Recurring plans can be paused, adjusted, or canceled anytime — just give us a heads-up before your next visit.",
  },
  {
    question: "How do I get an accurate price?",
    answer:
      "Submit the quote form with your property type and size, or send a few photos. Most quotes are sent back within 24 hours, with a final price confirmed after a quick walkthrough for larger properties.",
  },
  {
    question: "What areas of NYC do you serve?",
    answer:
      "All five boroughs — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. See the coverage section above for neighborhood detail.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-slate-200 border-b last:border-0">
      <button
        aria-expanded={open}
        className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span
          className="font-semibold text-slate-900 text-sm transition-colors group-hover:text-pg-primary sm:text-base"
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
        <div className="pb-5 text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section aria-label="Frequently asked questions" className="bg-pg-bg py-20 sm:py-28" id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-pg-primary/10 px-3 py-1 font-semibold text-pg-primary text-xs uppercase tracking-widest">
                FAQ
              </span>
              <h2
                className="mb-4 text-3xl text-pg-primary-dark leading-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                Frequently asked questions
              </h2>
              <p className="text-lg text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
                Everything you need to know before booking.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm">
              {FAQ_ITEMS.map((item) => (
                <FaqItem answer={item.answer} key={item.question} question={item.question} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-center text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Still have questions?{" "}
              <a className="cursor-pointer font-medium text-pg-primary underline underline-offset-2 hover:text-pg-primary-dark" href="#quote">
                Reach out
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

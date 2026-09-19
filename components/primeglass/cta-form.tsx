"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeIn } from "./fade-in";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const PROPERTY_TYPES = [
  "Storefront",
  "Restaurant",
  "Retail",
  "Office building",
  "High-rise / property management",
  "Real estate listing",
  "Other",
];

const SIZES = [
  { value: "small", label: "Small (1–8 panes)" },
  { value: "medium", label: "Medium (9–20 panes)" },
  { value: "large", label: "Large / high-rise (20+ panes)" },
];

const SERVICES_NEEDED = [
  { value: "window-cleaning", label: "Window cleaning (interior & exterior)" },
  { value: "graffiti", label: "Graffiti removal" },
  { value: "glass-replacement", label: "Broken glass replacement" },
  { value: "adhesive-removal", label: "Sticker & adhesive removal" },
  { value: "not-sure", label: "Not sure / more than one" },
];

interface QuoteForm {
  name: string;
  business: string;
  type: string;
  service: string;
  borough: string;
  size: string;
  contact: string;
  message?: string;
}

export function CtaForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteForm>();

  const onSubmit = async (_data: QuoteForm) => {
    // TODO: wire this up to a backend before launch — e.g. an API route that
    // emails the team (Resend) and/or pushes the lead into a CRM. Right now
    // this only confirms the submission in the UI.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Get a quote"
      className="relative overflow-hidden py-20 sm:py-28"
      id="quote"
      style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #0e7490 100%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect x='1' y='1' width='58' height='58' rx='10' ry='10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 font-semibold text-white/80 text-xs uppercase tracking-widest">
                Get a quote
              </span>
              <h2
                className="mb-4 text-3xl text-white leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                Ready for streak-free glass?
              </h2>
              <p className="text-cyan-100 text-lg" style={{ fontFamily: "var(--font-body)" }}>
                Tell us about your property and we'll send a quote within 24 hours.
              </p>
              <p className="mt-2 text-sm text-white/60 italic" style={{ fontFamily: "var(--font-body)" }}>
                No obligation. No spam.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-pg-cta" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Request received
                </h3>
                <p className="mx-auto max-w-sm text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Thanks for reaching out — we'll follow up with a scoped quote soon.
                </p>
                <p className="mt-4 font-medium text-pg-primary text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  — The PrimeGlass Team
                </p>
              </div>
            ) : (
              <form className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8" noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="name" style={{ fontFamily: "var(--font-heading)" }}>
                      Your name
                    </label>
                    <input
                      autoComplete="name"
                      id="name"
                      placeholder="Jane Smith"
                      type="text"
                      {...register("name", { required: "Please enter your name" })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="business" style={{ fontFamily: "var(--font-heading)" }}>
                      Business / property name
                    </label>
                    <input
                      id="business"
                      placeholder="Sunrise Diner"
                      type="text"
                      {...register("business", { required: "Please enter a business or property name" })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                    />
                    {errors.business && <p className="text-red-500 text-xs">{errors.business.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="type" style={{ fontFamily: "var(--font-heading)" }}>
                      Property type
                    </label>
                    <select
                      id="type"
                      {...register("type", { required: "Please select a property type" })}
                      className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-sm transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select one
                      </option>
                      {PROPERTY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="service" style={{ fontFamily: "var(--font-heading)" }}>
                      Service needed
                    </label>
                    <select
                      id="service"
                      {...register("service", { required: "Please select a service" })}
                      className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-sm transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select one
                      </option>
                      {SERVICES_NEEDED.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="borough" style={{ fontFamily: "var(--font-heading)" }}>
                      Borough
                    </label>
                    <select
                      id="borough"
                      {...register("borough", { required: "Please select a borough" })}
                      className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-sm transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select one
                      </option>
                      {BOROUGHS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.borough && <p className="text-red-500 text-xs">{errors.borough.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="size" style={{ fontFamily: "var(--font-heading)" }}>
                      Approximate size
                    </label>
                    <select
                      id="size"
                      {...register("size", { required: "Please select a size" })}
                      className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-sm transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select one
                      </option>
                      {SIZES.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    {errors.size && <p className="text-red-500 text-xs">{errors.size.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="contact" style={{ fontFamily: "var(--font-heading)" }}>
                      Phone or email
                    </label>
                    <input
                      autoComplete="email"
                      id="contact"
                      placeholder="you@example.com or (555) 010-0100"
                      type="text"
                      {...register("contact", { required: "Please enter a phone number or email", minLength: { value: 5, message: "That doesn't look right" } })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                    />
                    {errors.contact && <p className="text-red-500 text-xs">{errors.contact.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="message" style={{ fontFamily: "var(--font-heading)" }}>
                      Anything else? <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Number of windows, access notes, preferred schedule..."
                      rows={3}
                      {...register("message")}
                      className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:border-pg-primary focus:outline-none focus:ring-2 focus:ring-pg-primary/40"
                    />
                  </div>
                </div>

                <button
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-pg-cta py-3.5 font-semibold text-base text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pg-cta-hover hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                  style={{ fontFamily: "var(--font-heading)" }}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get my free quote
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-slate-400 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  We'll reply within 24 hours.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

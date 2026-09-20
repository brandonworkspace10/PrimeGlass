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
  "Commercial building / property management",
  "Real estate listing",
  "Other",
];

const SIZES = [
  { value: "small", label: "Small (1–8 panes)" },
  { value: "medium", label: "Medium (9–20 panes)" },
  { value: "large", label: "Large (21+ panes or multi-story)" },
  { value: "custom", label: "Custom-shaped / specialty glass" },
];

const SERVICES_NEEDED = [
  { value: "one-time", label: "One-time window cleaning" },
  { value: "recurring", label: "Recurring window cleaning" },
  { value: "interior-exterior", label: "Interior & exterior window cleaning" },
  { value: "high-access", label: "High or hard-to-reach windows" },
  { value: "custom-glass", label: "Custom-shaped or specialty glass" },
  { value: "not-sure", label: "Not sure — help me scope it" },
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

  const onSubmit = async () => {
    // TODO: wire this up to a backend before launch — e.g. an API route that
    // emails the team (Resend) and/or pushes the lead into a CRM. Right now
    // this only confirms the submission in the UI.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Get a quote"
      className="pg-section relative overflow-hidden"
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

      <div className="pg-container relative">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="mb-10 text-center sm:mb-12">
              <span className="pg-eyebrow border-white/20 bg-white/10 text-cyan-50">
                Get a quote
              </span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.05] tracking-[-0.04em]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                Tell us about your windows
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-cyan-50/90 leading-7 sm:text-lg" style={{ fontFamily: "var(--font-body)" }}>
                Share the property type, approximate window count, size, shape, access, and
                preferred schedule so we can prepare the right scope.
              </p>
              <p className="mt-2 text-sm text-white/60 italic" style={{ fontFamily: "var(--font-body)" }}>
                Photos and access notes are helpful for large or unusual glass.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div
                aria-live="polite"
                className="rounded-2xl bg-white p-10 text-center shadow-xl"
                role="status"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-pg-cta" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Quote request received
                </h3>
                <p className="mx-auto max-w-sm text-slate-500 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Thanks for sharing the property details. The next step is reviewing the glass,
                  access, and requested frequency.
                </p>
                <p className="mt-4 font-medium text-pg-primary text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  — The PrimeGlass Team
                </p>
              </div>
            ) : (
              <form
                aria-busy={isSubmitting}
                className="rounded-3xl border border-white/40 bg-white p-5 shadow-[0_30px_90px_rgb(3_36_55/0.32)] sm:p-8"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="mb-5 text-slate-500 text-xs">
                  Required fields are marked <span aria-hidden="true">*</span>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="name" style={{ fontFamily: "var(--font-heading)" }}>
                      Your name <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <input
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={errors.name ? "true" : "false"}
                      autoComplete="name"
                      id="name"
                      placeholder="e.g. Jane Smith…"
                      type="text"
                      {...register("name", { required: "Please enter your name" })}
                      className="pg-field"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs" id="name-error" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="business" style={{ fontFamily: "var(--font-heading)" }}>
                      Business / property name <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <input
                      aria-describedby={errors.business ? "business-error" : undefined}
                      aria-invalid={errors.business ? "true" : "false"}
                      autoComplete="organization"
                      id="business"
                      placeholder="e.g. Sunrise Diner…"
                      type="text"
                      {...register("business", { required: "Please enter a business or property name" })}
                      className="pg-field"
                    />
                    {errors.business && (
                      <p className="text-red-600 text-xs" id="business-error" role="alert">
                        {errors.business.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="type" style={{ fontFamily: "var(--font-heading)" }}>
                      Property type <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <select
                      aria-describedby={errors.type ? "type-error" : undefined}
                      aria-invalid={errors.type ? "true" : "false"}
                      autoComplete="off"
                      id="type"
                      {...register("type", { required: "Please select a property type" })}
                      className="pg-field cursor-pointer"
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
                    {errors.type && (
                      <p className="text-red-600 text-xs" id="type-error" role="alert">
                        {errors.type.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="service" style={{ fontFamily: "var(--font-heading)" }}>
                      Service needed <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <select
                      aria-describedby={errors.service ? "service-error" : undefined}
                      aria-invalid={errors.service ? "true" : "false"}
                      autoComplete="off"
                      id="service"
                      {...register("service", { required: "Please select a service" })}
                      className="pg-field cursor-pointer"
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
                    {errors.service && (
                      <p className="text-red-600 text-xs" id="service-error" role="alert">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="borough" style={{ fontFamily: "var(--font-heading)" }}>
                      Borough <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <select
                      aria-describedby={errors.borough ? "borough-error" : undefined}
                      aria-invalid={errors.borough ? "true" : "false"}
                      autoComplete="address-level2"
                      id="borough"
                      {...register("borough", { required: "Please select a borough" })}
                      className="pg-field cursor-pointer"
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
                    {errors.borough && (
                      <p className="text-red-600 text-xs" id="borough-error" role="alert">
                        {errors.borough.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="size" style={{ fontFamily: "var(--font-heading)" }}>
                      Approximate size <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <select
                      aria-describedby={errors.size ? "size-error" : undefined}
                      aria-invalid={errors.size ? "true" : "false"}
                      autoComplete="off"
                      id="size"
                      {...register("size", { required: "Please select a size" })}
                      className="pg-field cursor-pointer"
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
                    {errors.size && (
                      <p className="text-red-600 text-xs" id="size-error" role="alert">
                        {errors.size.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="contact" style={{ fontFamily: "var(--font-heading)" }}>
                      Phone or email <span aria-hidden="true" className="text-red-600">*</span>
                    </label>
                    <input
                      aria-describedby={errors.contact ? "contact-error" : "contact-hint"}
                      aria-invalid={errors.contact ? "true" : "false"}
                      autoComplete="off"
                      id="contact"
                      placeholder="e.g. name@example.com or your mobile number…"
                      spellCheck={false}
                      type="text"
                      {...register("contact", { required: "Please enter a phone number or email", minLength: { value: 5, message: "That doesn't look right" } })}
                      className="pg-field"
                    />
                    <p className="text-slate-500 text-xs" id="contact-hint">
                      Use whichever contact method you check most.
                    </p>
                    {errors.contact && (
                      <p className="text-red-600 text-xs" id="contact-error" role="alert">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 text-sm" htmlFor="message" style={{ fontFamily: "var(--font-heading)" }}>
                      Anything else? <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      autoComplete="off"
                      id="message"
                      placeholder="e.g. number of windows, access notes, preferred schedule…"
                      rows={3}
                      {...register("message")}
                      className="pg-field min-h-28 resize-y py-3"
                    />
                  </div>
                </div>

                <button
                  className="pg-button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                  style={{ fontFamily: "var(--font-heading)" }}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request My Window Cleaning Quote
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-slate-400 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  Your details are used only to prepare and respond to this quote request.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

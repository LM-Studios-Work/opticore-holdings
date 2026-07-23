"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import type { Product } from "./ProductCard";

type Status = "idle" | "submitting" | "success" | "error";

export default function RequestQuoteModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (product) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      service: product?.title ?? "Medical Supply Enquiry",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="quote-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel — two column */}
      <div className="relative z-10 flex w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)]">

        {/* ── LEFT: Image panel (square) ── */}
        <div className="relative hidden flex-shrink-0 sm:block" style={{ width: "42%" }}>
          <div className="aspect-square w-full overflow-hidden">
            {product.image ? (
              <Image
                src={product.image as string}
                alt={product.title}
                fill
                className="object-cover"
                sizes="40vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-ink-100">
                <span className="text-xs font-medium uppercase tracking-widest text-ink-400">
                  Placeholder Image
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Info + form panel ── */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-400 transition-colors hover:border-ink-300 hover:text-ink-700"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto" style={{ maxHeight: "90vh" }}>
            {/* Product header */}
            <div className="border-b border-ink-100 px-8 pb-5 pt-8">
              <p className="eyebrow text-[0.65rem]">{product.category}</p>
              <h2
                id="quote-modal-title"
                className="mt-1 font-display text-2xl font-bold text-ink-900"
              >
                {product.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {product.description}
              </p>
            </div>

            {/* Form */}
            <div className="px-8 pb-8 pt-6">
              <p className="mb-5 text-sm font-semibold text-ink-700">
                Submit an enquiry and our team will get back to you with a tailored quote.
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-600" />
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    Enquiry received!
                  </h3>
                  <p className="max-w-xs text-sm text-ink-500">
                    Our team will review your request and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-name" className="text-xs font-semibold text-ink-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="q-name"
                        name="name"
                        required
                        placeholder="Jane Dlamini"
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-company" className="text-xs font-semibold text-ink-700">
                        Company Name
                      </label>
                      <input
                        id="q-company"
                        name="company"
                        placeholder="Optional"
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-phone" className="text-xs font-semibold text-ink-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="q-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="061 234 5678"
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-email" className="text-xs font-semibold text-ink-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="q-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="q-qty" className="text-xs font-semibold text-ink-700">
                        Estimated Quantity / Volume
                      </label>
                      <input
                        id="q-qty"
                        name="quantity"
                        placeholder="e.g. 500 units, monthly, bulk order"
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="q-message" className="text-xs font-semibold text-ink-700">
                        Additional Notes
                      </label>
                      <textarea
                        id="q-message"
                        name="message"
                        rows={3}
                        placeholder="Specifications, delivery requirements, or any other details..."
                        className="rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-sm font-medium text-red-600">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary mt-1 w-full py-3 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    {status === "submitting" ? "Sending…" : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

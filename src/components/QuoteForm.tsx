"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField, { inputClass } from "./forms/FormField";
import { propertyTypes, services } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <h3 className="font-display text-lg font-semibold text-ink-900">
          Quote request received!
        </h3>
        <p className="max-w-sm text-sm text-ink-600">
          Thank you for reaching out. Our team will review your request and
          get back to you shortly with a free, no-obligation quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" required>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Dlamini" />
        </FormField>
        <FormField label="Company Name" htmlFor="company">
          <input id="company" name="company" className={inputClass} placeholder="Optional" />
        </FormField>
        <FormField label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="061 234 5678"
          />
        </FormField>
        <FormField label="Email Address" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </FormField>
        <FormField label="Service Required" htmlFor="service" required>
          <select id="service" name="service" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Property Type" htmlFor="propertyType" required>
          <select
            id="propertyType"
            name="propertyType"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a property type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Number of Rooms / Offices" htmlFor="rooms">
          <input
            id="rooms"
            name="rooms"
            type="number"
            min="0"
            className={inputClass}
            placeholder="e.g. 5"
          />
        </FormField>
        <FormField label="Preferred Date" htmlFor="preferredDate">
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className={inputClass}
          />
        </FormField>
        <FormField
          label="Upholstery Items (couches, mattresses, chairs, etc.)"
          htmlFor="upholstery"
          className="sm:col-span-2"
        >
          <input
            id="upholstery"
            name="upholstery"
            className={inputClass}
            placeholder="e.g. 2 couches, 1 mattress, 4 dining chairs"
          />
        </FormField>
        <FormField label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Tell us more about what you need..."
          />
        </FormField>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary px-7 py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Request a Free Quote Today!"}
      </button>
    </form>
  );
}

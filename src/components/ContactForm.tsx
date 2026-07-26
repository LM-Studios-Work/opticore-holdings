"use client";

import { useState, type FormEvent } from "react";
import { FaCircleCheck, FaSpinner } from "react-icons/fa6";
import FormField, { inputClass } from "./forms/FormField";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
      const res = await fetch("https://formsubmit.co/ajax/info@opticoreholdings.co.za", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
        <FaCircleCheck className="h-10 w-10" style={{ fill: "url(#brand-gradient)" }} />
        <h3 className="font-display text-lg font-semibold text-ink-900">
          Message sent!
        </h3>
        <p className="max-w-sm text-sm text-ink-600">
          Thanks for getting in touch. We&apos;ll respond as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="c-name" required>
          <input id="c-name" name="name" required className={inputClass} />
        </FormField>
        <FormField label="Phone Number" htmlFor="c-phone" required>
          <input id="c-phone" name="phone" type="tel" required className={inputClass} />
        </FormField>
        <FormField label="Email Address" htmlFor="c-email" required className="sm:col-span-2">
          <input id="c-email" name="email" type="email" required className={inputClass} />
        </FormField>
        <FormField label="Message" htmlFor="c-message" required className="sm:col-span-2">
          <textarea
            id="c-message"
            name="message"
            rows={5}
            required
            className={inputClass}
            placeholder="How can we help?"
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
        {status === "submitting" && <FaSpinner className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

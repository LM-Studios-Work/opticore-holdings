"use client";

import { useState, type FormEvent } from "react";
import { FaCircleCheck, FaSpinner } from "react-icons/fa6";
import FormField, { inputClass } from "./forms/FormField";
import { propertyTypes, services } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

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
      setSelectedService("");
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

  const isFacilityService = [
    "Commercial Cleaning",
    "Residential Cleaning",
    "Deep Cleaning",
    "Move-in / Move-out Cleaning",
    "Post-Construction Cleaning",
    "Window Cleaning",
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Sanitising & Disinfection / Fogging",
    "Pest Control",
    "Landscaping",
  ].includes(selectedService);

  const isMedicalSupplies = selectedService === "Medical Supplies";
  const isWebDev = selectedService === "Web Development";
  const isTransportation = selectedService === "Transportation";
  const isUpholstery = selectedService === "Upholstery Cleaning";

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
          <select 
            id="service" 
            name="service" 
            required 
            className={inputClass} 
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
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

        {/* --- Facility Services Fields --- */}
        {isFacilityService && (
          <>
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
            {isUpholstery && (
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
            )}
          </>
        )}

        {/* --- Medical Supplies Fields --- */}
        {isMedicalSupplies && (
          <>
            <FormField label="Facility / Clinic Name" htmlFor="facilityName" required>
              <input
                id="facilityName"
                name="facilityName"
                required
                className={inputClass}
                placeholder="e.g. Sandton MediClinic"
              />
            </FormField>
            <FormField label="Expected Monthly Volume" htmlFor="volume">
              <input
                id="volume"
                name="volume"
                className={inputClass}
                placeholder="e.g. 500 boxes of gloves"
              />
            </FormField>
          </>
        )}

        {/* --- Web Development Fields --- */}
        {isWebDev && (
          <>
            <FormField label="Current Website URL" htmlFor="websiteUrl">
              <input
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                className={inputClass}
                placeholder="https://yourwebsite.com (Optional)"
              />
            </FormField>
            <FormField label="Estimated Budget" htmlFor="budget">
              <input
                id="budget"
                name="budget"
                className={inputClass}
                placeholder="e.g. R15,000"
              />
            </FormField>
            <FormField label="Project Type" htmlFor="projectType" required>
              <select
                id="projectType"
                name="projectType"
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>Select project type</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Corporate / Brochure Website">Corporate / Brochure Website</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Custom Web App">Custom Web App</option>
              </select>
            </FormField>
            <FormField label="Target Launch Date" htmlFor="launchDate">
              <input
                id="launchDate"
                name="launchDate"
                type="date"
                className={inputClass}
              />
            </FormField>
          </>
        )}

        {/* --- Transportation Fields --- */}
        {isTransportation && (
          <>
            <FormField label="Pickup Location" htmlFor="pickupLocation" required>
              <input
                id="pickupLocation"
                name="pickupLocation"
                required
                className={inputClass}
                placeholder="e.g. Johannesburg"
              />
            </FormField>
            <FormField label="Delivery Location" htmlFor="deliveryLocation" required>
              <input
                id="deliveryLocation"
                name="deliveryLocation"
                required
                className={inputClass}
                placeholder="e.g. Cape Town"
              />
            </FormField>
            <FormField label="Preferred Transport Date" htmlFor="transportDate">
              <input
                id="transportDate"
                name="transportDate"
                type="date"
                className={inputClass}
              />
            </FormField>
            <FormField label="Load Description / Weight" htmlFor="loadDescription" className="sm:col-span-2" required>
              <input
                id="loadDescription"
                name="loadDescription"
                required
                className={inputClass}
                placeholder="e.g. 50-ton Excavator, dimensions 5m x 3m x 3m"
              />
            </FormField>
          </>
        )}

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
        {status === "submitting" && <FaSpinner className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Request a Free Quote Today!"}
      </button>
    </form>
  );
}

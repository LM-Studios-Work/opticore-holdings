import type { Metadata } from "next";
import { FaPhoneVolume, FaEnvelope, FaClock } from "react-icons/fa6";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free, no-obligation quote from OptiCore Holdings for cleaning, sanitising, pest control or medical supplies.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Request a Free Quote Today!"
        description="Fill in the form below with a few details about your property and requirements, and our team will get back to you with a tailored, no-obligation quote."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(11,37,69,0.35)] sm:p-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-brand-gradient rounded-3xl p-6 text-white shadow-[0_30px_60px_-40px_rgba(11,37,69,0.45)]">
              <h3 className="font-display text-lg font-semibold">
                Prefer to talk to us directly?
              </h3>
              <p className="mt-2 text-sm text-brand-50/90">
                Reach out and one of our team members will assist you.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <FaPhoneVolume className="h-4 w-4" style={{ fill: "url(#brand-gradient)" }} />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <FaEnvelope className="h-4 w-4" style={{ fill: "url(#brand-gradient)" }} />
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-2.5 text-brand-50/90">
                  <FaClock className="h-4 w-4" style={{ fill: "url(#brand-gradient)" }} />
                  {siteConfig.hours}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-ink-100 bg-brand-50 p-6">
              <h3 className="font-display text-base font-semibold text-teal-800">
                What Happens Next?
              </h3>
              <ol className="mt-3 space-y-2 text-sm text-teal-700">
                <li>1. We review your request within one business day.</li>
                <li>2. We contact you to confirm details or arrange a site visit.</li>
                <li>3. We send you a free, no-obligation quote.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

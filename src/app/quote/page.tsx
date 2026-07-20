import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
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
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-white">
              <h3 className="font-display text-lg font-semibold">
                Prefer to talk to us directly?
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Reach out and one of our team members will assist you.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 text-brand-400" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 hover:text-brand-400"
                >
                  <Mail className="h-4 w-4 text-brand-400" />
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-2.5 text-ink-300">
                  <Clock className="h-4 w-4 text-brand-400" />
                  {siteConfig.hours}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-brand-50 p-6">
              <h3 className="font-display text-base font-semibold text-brand-900">
                What Happens Next?
              </h3>
              <ol className="mt-3 space-y-2 text-sm text-brand-800">
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

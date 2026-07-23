import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OptiCore Holdings for cleaning, sanitising, pest control and medical supply enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        description="Have a question or need a service that isn't listed elsewhere? Send us a message and we'll get back to you promptly."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(9,60,58,0.4)] sm:p-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)]">
              <h3 className="font-display text-base font-semibold text-ink-900">
                Contact Details
              </h3>
              <div className="mt-4 space-y-3.5 text-sm text-ink-600">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 hover:text-brand-600"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 hover:text-brand-600"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                  {siteConfig.email}
                </a>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {siteConfig.address}
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {siteConfig.hours}
                </p>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand-600"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand-600" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)]">
              <iframe
                title="OptiCore Holdings location map"
                src={siteConfig.mapEmbedSrc}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

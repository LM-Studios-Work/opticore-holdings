import type { Metadata } from "next";
import { FaPhoneVolume, FaEnvelope, FaClock } from "react-icons/fa6";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";
import heroImg from "../../../public/Services Heros/professional hygiene services hero, home page.jpg";

export const metadata: Metadata = {
  title: "Contact Us | OptiCore Holdings",
  description: "Get in touch with OptiCore Holdings for cleaning, sanitising, pest control and medical supply enquiries.",
};

import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-teal-800 py-16 text-white sm:py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Professional Facility & Hygiene Operations"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-teal-900/20 sm:bg-gradient-to-r sm:from-teal-950/85 sm:via-teal-900/60 sm:to-teal-900/30" />
        <div className="container-page relative z-10">
          <div className="text-teal-100 text-sm mb-4 font-medium tracking-wide">
            OptiCore Holdings &gt; Contact
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">Contact</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Get in Touch With Us"
              title="Request Cleaning, Fogging, Pest Control or Medical Supplies"
            />
          </div>
          <div className="text-ink-600 text-[15px] leading-relaxed">
            <p>
              Whether you need a once-off deep clean, a recurring office hygiene programme, hospital-grade
              fogging, pest eradication, or bulk PPE and medical consumables. We&apos;re ready to help.
              Fill out the form below or call us directly and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <section className="relative mb-36">
        <div className="w-full h-[540px]">
          <iframe
            title="OptiCore Holdings: Gauteng service area"
            src={siteConfig.mapEmbedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Three overlapping cards */}
        <div className="container-page relative z-10 -mt-20">
          <div className="grid gap-5 sm:grid-cols-3 max-w-4xl mx-auto">

            {/* Phone */}
            <a
              href={siteConfig.phoneHref}
              className="bg-white p-8 rounded-2xl shadow-[0_24px_48px_-20px_rgba(11,37,69,0.15)] border border-ink-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
            >
              <span className="flex items-center justify-center mb-4">
                <FaPhoneVolume className="h-8 w-8" style={{ fill: "url(#brand-gradient)" }} />
              </span>
              <h4 className="font-display font-semibold text-ink-900 mb-1">Office Number</h4>
              <p className="text-ink-500 text-sm">{siteConfig.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-white p-8 rounded-2xl shadow-[0_24px_48px_-20px_rgba(11,37,69,0.15)] border border-ink-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
            >
              <span className="flex items-center justify-center mb-4">
                <FaEnvelope className="h-8 w-8" style={{ fill: "url(#brand-gradient)" }} />
              </span>
              <h4 className="font-display font-semibold text-ink-900 mb-1">E-mail Address</h4>
              <p className="text-ink-500 text-sm">{siteConfig.email}</p>
            </a>

            {/* Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_24px_48px_-20px_rgba(11,37,69,0.15)] border border-ink-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
              <span className="flex items-center justify-center mb-4">
                <FaClock className="h-8 w-8" style={{ fill: "url(#brand-gradient)" }} />
              </span>
              <h4 className="font-display font-semibold text-ink-900 mb-1">Office Hours</h4>
              <p className="text-ink-500 text-sm leading-relaxed">
                Mon – Fri: 07:00 – 17:00<br />
                Sat: 08:00 – 13:00
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container-page py-16 sm:py-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl mb-4">
            Get in Touch. We&apos;re Ready to Help.
          </h2>
          <p className="text-ink-500 text-[15px]">
            Need cleaning, sanitising, fogging, pest control, or medical supplies? Send us a message
            and we&apos;ll respond with a tailored plan, usually within one business day.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ink-100 shadow-[0_30px_60px_-40px_rgba(11,37,69,0.18)]">
          <ContactForm />
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="bg-sage-wash py-16 sm:py-24 border-t border-ink-100 text-center">
        <div className="container-page max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 mb-6">
            Areas We Cover
          </h2>
          <p className="text-ink-500 text-sm leading-loose">
            Gauteng · Pretoria · Johannesburg · Sandton · Randburg · Bryanston · Roodepoort ·
            Krugersdorp · Waterkloof Glen · Brooklyn · Centurion · N4 Gateway Industrial Park ·
            Faerie Glen · Pretoria East · The Willows · Menlyn · Menlo Park · Hatfield · Lynnwood ·
            Menlyn Maine · Silverlakes · Garsfontein · Waterkloof Ridge · Lyttelton Manor ·
            Silverton · Rosslyn · Sunnyside · Zwartkop · Eco Park Estate · Irene View · Highveld ·
            Pretoria North · Pretoria West · Centurion Central · Midrand · Moreleta Park ·
            Hennopspark · Nelmapius · Montana Park · Rietfontein · Equestria · Wierdapark ·
            Rooihuiskraal · Sinoville · Hartbeespoort
          </p>
        </div>
      </section>
    </div>
  );
}


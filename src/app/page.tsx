import Link from "next/link";
import { Phone, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import {
  serviceCategories,
  siteConfig,
  targetMarkets,
  testimonials,
  values,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, var(--color-brand-500) 0%, transparent 40%), radial-gradient(circle at 90% 80%, var(--color-brand-600) 0%, transparent 40%)",
          }}
        />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              Trusted across South Africa
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Cleaning, Hygiene &amp; Medical Supply Solutions You Can Rely On
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink-200 sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-500"
              >
                Request a Free Quote Today!
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-400" /> Health &amp;
                Safety Focused
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-400" /> Reliable &amp;
                On-Time
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-brand-400" /> Quality
                Guaranteed
              </span>
            </div>
          </div>
          <PlaceholderImage
            label="OptiCore Team On Site"
            tone="light"
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Facility & Hygiene Solutions"
          description="From day-to-day cleaning to specialised sanitising, pest control and medical supply, OptiCore Holdings keeps your space clean, safe and compliant."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Our Values Drive Everything We Do"
            description="Every job, no matter the size, is carried out to the same high standard."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PlaceholderImage
            label="Serving Every Industry"
            tone="dark"
            aspect="aspect-[4/3]"
          />
          <div>
            <SectionHeading
              eyebrow="Who We Serve"
              title="Trusted by Homes, Businesses & Healthcare Providers"
              description="Our teams are equipped to work across a wide range of environments, adjusting our approach to suit each client's needs."
            />
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {targetMarkets.map((market) => (
                <li
                  key={market}
                  className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-800"
                >
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            center
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

import Link from "next/link";
import { Phone, ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import { iconMap } from "@/lib/icon-map";
import {
  serviceCategories,
  siteConfig,
  medicalProducts,
  testimonials,
} from "@/lib/site-data";

const accreditations = [
  "SABS Approved",
  "CHSA Member",
  "ISO 9001",
  "NCCA Certified",
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 text-white">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-brand-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-300) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-page relative flex flex-col items-center py-20 text-center lg:py-28">
          <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
            Trusted across South Africa
          </span>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Cleaning, Hygiene &amp; Medical Supply Solutions You Can Rely On
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-ink-200 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-500"
            >
              Request a Free Quote Today!
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-400" /> Health &amp;
              Safety Focused
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" /> Reliable &amp; On-Time
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand-400" /> Quality
              Guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* 2. Intro two-column block */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid overflow-hidden border border-ink-200 lg:grid-cols-2">
          <PlaceholderImage
            label="OptiCore Team On Site"
            tone="light"
            aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
          <div className="border-t border-ink-200 p-8 sm:p-10 lg:border-l lg:border-t-0">
            <SectionHeading
              eyebrow="What We Do"
              title="Professional Facility & Hygiene Solutions in South Africa"
              description="From day-to-day cleaning to specialised sanitising, pest control and medical supply, OptiCore Holdings keeps your space clean, safe and compliant. Our trained teams serve residential, commercial, industrial and healthcare clients with the same high standard on every visit."
            />
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Shop by category — split grid cards */}
      <section className="border-y border-ink-200 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Browse by Category"
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 md:grid-cols-2">
            {serviceCategories.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="flex flex-col bg-white sm:flex-row"
                >
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-4 inline-flex w-fit items-center gap-2 bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="sm:w-2/5">
                    <PlaceholderImage
                      label={service.title}
                      icon={Icon}
                      aspect="aspect-[4/3] sm:aspect-auto sm:h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Top trending products */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Medical Supplies"
          title="Top Trending Products"
          center
        />
        <div className="mt-10 grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {medicalProducts.slice(0, 3).map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.title}
                className="flex flex-col bg-white"
              >
                <PlaceholderImage
                  label={product.title}
                  icon={Icon}
                  tone="light"
                  aspect="aspect-[4/3]"
                />
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-500">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/medical-supplies"
            className="bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
          >
            View All Products
          </Link>
        </div>
        <div className="mt-8 border border-dashed border-brand-300 bg-brand-50 px-6 py-4 text-center text-sm font-medium text-brand-800">
          Reliable stock availability and fast delivery on PPE, hygiene products
          and medical consumables — order in bulk and save.
        </div>
      </section>

      {/* 5. Testimonials in blog-card style */}
      <section className="border-y border-ink-200 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col bg-white"
              >
                <PlaceholderImage
                  label={t.name}
                  tone="brand"
                  aspect="aspect-[16/10]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm text-ink-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-ink-100 pt-4">
                    <p className="text-sm font-semibold text-ink-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accreditations */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Trusted & Compliant" title="Accreditations" center />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-px border border-ink-200 bg-ink-200 sm:grid-cols-4">
          {accreditations.map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center bg-white px-4 text-center text-sm font-semibold text-ink-500"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

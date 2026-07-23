import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import heroImg from "../../public/Hero Image/potential hero 2.jpg";
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
      <section className="bg-sage-wash">
        <div className="container-page py-6 sm:py-8">
          <div className="relative flex min-h-[34rem] overflow-hidden rounded-[2rem] text-white shadow-[0_40px_80px_-40px_rgba(9,60,58,0.5)] lg:min-h-[40rem]">
            {/* Background photo */}
            <Image
              src={heroImg}
              alt="OptiCore Holdings team on site"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/60 to-transparent" />
            {/* Content */}
            <div className="relative flex h-full w-full flex-col justify-center p-8 sm:p-12 lg:max-w-3xl lg:p-16">
              <span className="pill w-fit bg-white/15 text-brand-100 backdrop-blur-sm">
                Trusted across South Africa
              </span>
              <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Cleaning, Hygiene &amp; Medical Supply Solutions You Can Rely On
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-teal-50 sm:text-lg">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className="btn btn-primary px-6 py-3.5">
                  Request a Free Quote Today!
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="btn btn-ghost-light px-6 py-3.5 backdrop-blur-sm"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-teal-100">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-300" /> Health &amp; Safety Focused
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-300" /> Reliable &amp; On-Time
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-300" /> Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro two-column block */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-[0_30px_60px_-40px_rgba(9,60,58,0.4)] lg:grid-cols-2">
          <div className="p-3">
            <PlaceholderImage
              label="OptiCore Team On Site"
              tone="light"
              aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="rounded-[1.5rem]"
            />
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="What We Do"
              title="Professional Facility & Hygiene Solutions in South Africa"
              description="From day-to-day cleaning to specialised sanitising, pest control and medical supply, OptiCore Holdings keeps your space clean, safe and compliant. Our trained teams serve residential, commercial, industrial and healthcare clients with the same high standard on every visit."
            />
            <Link href="/services" className="btn btn-primary mt-6 px-6 py-3">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Shop by category — split grid cards */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Browse by Category"
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {serviceCategories.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(9,60,58,0.45)] sm:flex-row"
                >
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="btn btn-primary mt-4 w-fit px-5 py-2.5"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="p-3 sm:w-2/5 sm:pl-0">
                    <PlaceholderImage
                      label={service.title}
                      icon={Icon}
                      aspect="aspect-[4/3] sm:aspect-auto sm:h-full"
                      className="rounded-2xl"
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
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicalProducts.slice(0, 3).map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(9,60,58,0.45)]"
              >
                <div className="p-3">
                  <PlaceholderImage
                    label={product.title}
                    icon={Icon}
                    tone="light"
                    aspect="aspect-[4/3]"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-3 text-center">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/medical-supplies" className="btn btn-primary px-6 py-3">
            View All Products
          </Link>
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-brand-300 bg-brand-50 px-6 py-4 text-center text-sm font-medium text-teal-800">
          Reliable stock availability and fast delivery on PPE, hygiene products
          and medical consumables — order in bulk and save.
        </div>
      </section>

      {/* 5. Testimonials in blog-card style */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)]"
              >
                <div className="p-3 pb-0">
                  <PlaceholderImage
                    label={t.name}
                    tone="brand"
                    aspect="aspect-[16/10]"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-ink-600">
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


    </>
  );
}

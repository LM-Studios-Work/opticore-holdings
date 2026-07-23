import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import heroImg from "../../public/Hero Image/potential hero 2.jpg";
import cleaningHero from "../../public/Services Heros/commercial and residential cleaning hero.webp";
import sanitisingHero from "../../public/Services Heros/Sanitising and Disinfection hero.png";
import pestHero from "../../public/Services Heros/pest control hero.webp";
import medicalHero from "../../public/Services Heros/medical supplies hero.png";
import hygieneIntroHero from "../../public/Services Heros/professional hygiene services hero, home page.jpg";
import SectionHeading from "@/components/SectionHeading";
import { iconMap } from "@/lib/icon-map";
import {
  serviceCategories,
  siteConfig,
  medicalProducts,
} from "@/lib/site-data";

const serviceImages: Record<string, typeof cleaningHero> = {
  cleaning: cleaningHero,
  sanitising: sanitisingHero,
  "pest-control": pestHero,
  "medical-supplies": medicalHero,
};

const servicePageRoutes: Record<string, string> = {
  cleaning: "/services/cleaning",
  sanitising: "/services/sanitising",
  "pest-control": "/services/pest-control",
  "medical-supplies": "/medical-supplies",
};

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
                Cleaning, Hygiene &amp; Medical Supplies You Can Rely On.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-teal-50 sm:text-lg">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className="btn btn-primary px-6 py-3.5">
                  Request a Free Quote Today - 071 702 0817
                </Link>
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
      <section className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid min-h-[450px] lg:min-h-0 overflow-hidden rounded-[2.5rem] border border-ink-100 bg-white shadow-[0_30px_60px_-40px_rgba(9,60,58,0.4)] lg:grid-cols-[1.1fr_1fr]">
          <div className="p-3.5">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-[1.8rem]">
              <Image
                src={hygieneIntroHero}
                alt="Professional Facility & Hygiene Operations"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-12 xl:p-16">
            <SectionHeading
              title="Professional Facility & Hygiene Operations"
              description="From daily maintenance to medical-grade disinfection, pest eradication, and PPE supply, OptiCore Holdings keeps your spaces compliant and safe. Our teams execute to a singular, uncompromising standard on every site."
            />
            <Link href="/services" className="btn btn-primary mt-6 px-6 py-3 w-fit">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services — big image cards */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Our Services"
            description="Professional solutions for every environment — from daily cleaning to medical-grade hygiene."
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.slug}
                href={servicePageRoutes[service.slug] ?? `/services#${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_16px_40px_-24px_rgba(9,60,58,0.30)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/40 hover:shadow-[0_24px_56px_-24px_rgba(9,60,58,0.45)] cursor-pointer"
              >
                {/* Big image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-60 lg:h-52 xl:h-60">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Text below */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {service.shortDescription}
                  </p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-all duration-300">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top trending products */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title="High-Demand Medical Supplies"
          description="Reliable stock and fast delivery across South Africa. Order in bulk and save."
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

      </section>

      {/* 5. About Us teaser */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-900 to-teal-700 px-8 py-10 text-white shadow-[0_40px_80px_-40px_rgba(9,60,58,0.5)] sm:px-12 sm:py-14 lg:px-20 lg:py-16">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative mx-auto max-w-2xl text-center flex flex-col items-center">
              <span className="pill w-fit bg-white/15 text-brand-100 backdrop-blur-sm">
                Who We Are
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Built on hard work &amp; zero compromises.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-teal-100">
                OptiCore Holdings operates four specialist divisions across South Africa, from professional cleaning and hygiene to pest control and medical supplies. One holding company, one standard of excellence.
              </p>
              <Link href="/about" className="btn btn-primary mt-8 inline-flex w-fit px-7 py-3.5">
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

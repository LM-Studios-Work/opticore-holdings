import Link from "next/link";
import Image from "next/image";
import { FaShield, FaClock, FaCertificate, FaArrowRight } from "react-icons/fa6";
import cleaningHero from "../../public/Services Heros/commercial and residential cleaning hero.webp";
import sanitisingHero from "../../public/Services Heros/Sanitising and Disinfection hero.png";
import pestHero from "../../public/Services Heros/pest control hero.webp";
import medicalHero from "../../public/Services Heros/medical supplies hero.png";
import hygieneIntroHero from "../../public/Services Heros/professional hygiene services hero, home page.jpg";
import posterMedicalSuppliesStock from "../../public/poster/medical supplies stock.jpeg";
import SectionHeading from "@/components/SectionHeading";
import HomeMedicalSection from "@/components/HomeMedicalSection";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  serviceCategories,
  siteConfig,
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
          <div className="relative flex min-h-[28rem] sm:min-h-[32rem] lg:min-h-[32rem] xl:min-h-[36rem] 2xl:min-h-[40rem] overflow-hidden rounded-[2rem] text-white shadow-[0_40px_80px_-40px_rgba(11,37,69,0.45)]">
            {/* Background photo slideshow */}
            <HeroSlideshow />
            {/* Gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-teal-900/20 sm:bg-gradient-to-r sm:from-teal-950/85 sm:via-teal-900/60 sm:to-transparent" />
            {/* Content */}
            <div className="relative flex h-full w-full flex-col justify-center p-8 sm:p-12 lg:max-w-3xl lg:p-16">
              <span className="pill w-fit bg-white/15 text-brand-100 backdrop-blur-sm">
                Trusted across Johannesburg
              </span>
              <h1 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                Cleaning, Hygiene &amp; Medical Supplies You Can Rely On.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-teal-50 sm:text-base xl:text-lg">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className="btn btn-primary px-5 py-3 xl:px-6 xl:py-3.5 text-sm xl:text-base whitespace-nowrap shrink-0">
                  Request a Quote
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-teal-100">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaShield className="h-4 w-4 text-brand-300 shrink-0" /> Health &amp; Safety Focused
                </span>
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaClock className="h-4 w-4 shrink-0" style={{ fill: "url(#brand-gradient)" }} /> Reliable &amp; On-Time
                </span>
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaCertificate className="h-4 w-4 text-brand-300 shrink-0" /> Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro two-column block */}
      <section className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid min-h-[450px] lg:min-h-0 overflow-hidden rounded-[2.5rem] border border-ink-100 bg-white shadow-[0_30px_60px_-40px_rgba(11,37,69,0.35)] lg:grid-cols-[1.1fr_1fr]">
          <div className="p-3.5 flex flex-col justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-auto xl:h-full xl:min-h-[360px] overflow-hidden rounded-[1.8rem]">
              <Image
                src={hygieneIntroHero}
                alt="Professional Facility & Hygiene Operations"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-10 xl:p-14 2xl:p-16">
            <SectionHeading
              title="Professional Facility & Hygiene Operations"
              description="From daily maintenance to medical-grade disinfection, pest eradication, and PPE supply, OptiCore Holdings keeps your spaces compliant and safe. Our teams execute to a singular, uncompromising standard on every site."
            />
            <Link href="/services" className="btn btn-primary mt-6 px-6 py-3 w-fit whitespace-nowrap">
              Explore Our Services
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services: big image cards */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Our Services"
            description="Professional solutions for every environment, from daily cleaning to medical-grade hygiene."
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.slug}
                href={servicePageRoutes[service.slug] ?? `/services#${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_16px_40px_-24px_rgba(11,37,69,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/40 hover:shadow-[0_24px_56px_-24px_rgba(11,37,69,0.4)] cursor-pointer"
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
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-all duration-300 whitespace-nowrap">
                    Learn more
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top trending products */}
      <HomeMedicalSection />

      {/* 5. Medical Supplies Stock Poster */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Consistent Stock & Reliable Delivery"
              title="Bulk Medical Consumables & PPE Supply"
            />
            <p className="mt-6 text-[15px] leading-relaxed text-ink-600">
              OptiCore Holdings maintains consistent inventory of hospital-grade personal protective equipment (PPE), surgical consumables, and diagnostic supplies across Johannesburg and South Africa. Whether supplying healthcare clinics, educational institutions, or corporate facilities, our products conform to stringent quality and safety standards.
            </p>
            <Link href="/medical-supplies" className="btn btn-primary mt-8 inline-flex px-7 py-3.5">
              Explore Medical Supplies
              <FaArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="w-full max-w-[250px] sm:max-w-[270px] mx-auto lg:max-w-none lg:w-[250px] xl:w-[270px] self-center">
            <Image
              src={posterMedicalSuppliesStock}
              alt="Medical Consumables and PPE Stock Poster"
              className="w-full h-auto rounded-xl shadow-md"
              sizes="(max-width: 1024px) 270px, 270px"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* 6. About Us teaser */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-900 to-teal-700 px-8 py-10 text-white shadow-[0_40px_80px_-40px_rgba(11,37,69,0.45)] sm:px-12 sm:py-14 lg:px-20 lg:py-16">
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
                OptiCore Holdings operates four specialist divisions across Johannesburg and South Africa, from professional cleaning and hygiene to pest control and medical supplies. One holding company, one standard of excellence.
              </p>
              <Link href="/about" className="btn btn-primary mt-8 inline-flex w-fit px-7 py-3.5">
                Learn About Us
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { serviceCategories } from "@/lib/site-data";
import cleaningHero from "../../../public/Services Heros/commercial and residential cleaning hero.webp";
import sanitisingHero from "../../../public/Services Heros/Sanitising and Disinfection hero.png";
import pestHero from "../../../public/Services Heros/pest control hero.webp";
import medicalHero from "../../../public/Services Heros/medical supplies hero.png";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Commercial and residential cleaning, sanitising and disinfection, pest control, and medical supplies from OptiCore Holdings.",
};

const serviceImages: Record<string, StaticImageData> = {
  cleaning: cleaningHero,
  sanitising: sanitisingHero,
  "pest-control": pestHero,
  "medical-supplies": medicalHero,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Complete Cleaning, Hygiene & Pest Control"
        description="Executed by trained teams using professional-grade equipment and compliant chemicals."
      />

      <div className="divide-y divide-ink-100">
        {serviceCategories.map((service, index) => {
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="container-page scroll-mt-20 py-16 sm:py-20"
            >
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_60px_-40px_rgba(9,60,58,0.4)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900 text-balance sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-600">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-ink-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn btn-primary mt-6 px-6 py-3">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner />
    </>
  );
}

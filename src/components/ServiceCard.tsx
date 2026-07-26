import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import type { ServiceCategory } from "@/lib/site-data";
import cleaningHero from "../../public/Services Heros/commercial and residential cleaning hero.webp";
import sanitisingHero from "../../public/Services Heros/Sanitising and Disinfection hero.png";
import pestHero from "../../public/Services Heros/pest control hero.webp";
import medicalHero from "../../public/Services Heros/medical supplies hero.png";

const serviceImages: Record<string, StaticImageData> = {
  cleaning: cleaningHero,
  sanitising: sanitisingHero,
  "pest-control": pestHero,
  "medical-supplies": medicalHero,
};

export default function ServiceCard({ service }: { service: ServiceCategory }) {
  const targetHref = service.slug === 'medical-supplies'
    ? '/medical-supplies'
    : `/services/${service.slug}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-ink-200 bg-white shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md">
      <div className="p-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
          <Image
            src={serviceImages[service.slug]}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-3">
        <h3 className="font-display text-lg font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {service.shortDescription}
        </p>
        <Link
          href={targetHref}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 whitespace-nowrap"
        >
          Learn more
          <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

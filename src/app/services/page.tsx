import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import CtaBanner from "@/components/CtaBanner";
import { serviceCategories } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Commercial and residential cleaning, sanitising and disinfection, pest control, and medical supplies from OptiCore Holdings.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Cleaning, Hygiene & Pest Control Solutions"
        description="Explore our full range of services below, delivered by trained teams using professional-grade equipment and compliant products."
      />

      <div className="divide-y divide-ink-100">
        {serviceCategories.map((service, index) => {
          const Icon = iconMap[service.icon];
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
                <PlaceholderImage
                  label={service.title}
                  icon={Icon}
                  aspect="aspect-[4/3]"
                />
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    Service
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-ink-600">{service.description}</p>
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
                  <Link
                    href="/quote"
                    className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Request a Quote for This Service
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

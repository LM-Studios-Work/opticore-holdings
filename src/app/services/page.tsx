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
                <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_60px_-40px_rgba(9,60,58,0.4)]">
                  <PlaceholderImage
                    label={service.title}
                    icon={Icon}
                    aspect="aspect-[4/3]"
                    className="rounded-[1.5rem]"
                  />
                </div>
                <div>
                  <span className="pill bg-brand-50 text-teal-700">
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    Service
                  </span>
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

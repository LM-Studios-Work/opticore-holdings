import type { Metadata } from "next";
import Link from "next/link";
import { Truck, PackageCheck, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import CtaBanner from "@/components/CtaBanner";
import { medicalProducts } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Medical Supplies",
  description:
    "PPE, gloves, masks, sanitiser, medical consumables, cleaning chemicals and first aid supplies from OptiCore Holdings.",
};

const highlights = [
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Consistent stock availability and delivery to businesses across South Africa.",
  },
  {
    icon: PackageCheck,
    title: "Bulk & Once-off Orders",
    description: "From single first aid kits to ongoing bulk supply contracts for larger sites.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Quality",
    description: "Products sourced to meet medical, industrial and workplace safety standards.",
  },
];

export default function MedicalSuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Supplies"
        title="PPE, Hygiene & Medical Consumables"
        description="OptiCore Medical Supplies provides trusted PPE, medical consumables and cleaning chemicals to healthcare providers, offices and industrial sites across South Africa."
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Product Range"
          title="What We Supply"
          description="Browse our core product categories below — get in touch for pricing, bulk orders or products not listed here."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicalProducts.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.title}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
              >
                <PlaceholderImage
                  label={product.title}
                  icon={Icon}
                  aspect="aspect-[16/10]"
                  className="rounded-none"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
              <item.icon className="mx-auto h-8 w-8 text-brand-600" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <SectionHeading
          title="Need Medical Supplies for Your Business?"
          description="Send us your requirements — including quantities and delivery location — and we'll respond with a tailored quote."
          center
        />
        <Link
          href="/quote"
          className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Request a Quote
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}

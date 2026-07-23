import type { Metadata } from "next";
import Link from "next/link";
import { Truck, PackageCheck, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import CtaBanner from "@/components/CtaBanner";
import { medicalProducts } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";
import medicalHero from "../../../public/Services Heros/medical supplies hero.png";

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
        eyebrow="Our Services"
        title="PPE, Hygiene & Medical Consumables"
        description="Consistent stock. Fast delivery. Trusted quality. We supply healthcare providers, corporate offices, and industrial sites across South Africa."
        image={medicalHero}
        imageAlt="Medical supplies and PPE products"
      />

      <section className="container-page py-16 sm:py-20">

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicalProducts.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.title}
                className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(9,60,58,0.45)]"
              >
                <div className="p-3">
                  <PlaceholderImage
                    label={product.title}
                    icon={Icon}
                    aspect="aspect-[16/10]"
                    className="rounded-2xl"
                  />
                </div>
                <div className="p-6 pt-3">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)]"
            >
              <span className="bg-brand-gradient mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <SectionHeading
          title="Need Bulk Supplies?"
          description="Send us your requirements, quantities, and location. We will return a tailored quote within one business day."
          center
        />
        <Link href="/quote" className="btn btn-primary mt-6 px-6 py-3">
          Request a Quote
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}

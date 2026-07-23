import type { Metadata } from "next";
import { Target, Eye, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import ValueCard from "@/components/ValueCard";
import CtaBanner from "@/components/CtaBanner";
import { brands, targetMarkets, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OptiCore Holdings, our mission, vision and the brands that make up our group of cleaning, hygiene and medical supply services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Cleaner, Safer & Healthier Environments"
        description="OptiCore Holdings (Pty) Ltd is a South African company delivering professional cleaning, hygiene, pest control and medical supply solutions to clients across the country."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Our Story" />
            <p className="mt-4 text-ink-600">
              At OptiCore Holdings, we are committed to delivering reliable,
              professional, and high-quality services across multiple
              industries. Our focus is on providing comprehensive cleaning,
              sanitising, pest control, and medical supply solutions for
              residential, commercial, industrial, and healthcare clients.
            </p>
            <p className="mt-4 text-ink-600">
              We believe in building long-term relationships through
              exceptional service, attention to detail, and customer
              satisfaction. Our mission is to create cleaner, safer, and
              healthier environments while supplying trusted medical and
              hygiene products to businesses and individuals across South
              Africa.
            </p>
          </div>
          <PlaceholderImage label="OptiCore Holdings Team" tone="brand" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Target className="h-8 w-8 text-brand-600" />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
              Our Mission
            </h3>
            <p className="mt-3 text-ink-600">
              To provide dependable, professional, and innovative cleaning,
              hygiene, pest management, and medical supply solutions while
              maintaining the highest standards of quality, safety, and
              customer service.
            </p>
          </div>

        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Our Values"
          title="What We Stand For"
          center
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Group"
            title="Part of the OptiCore Holdings Family"
            description="OptiCore Holdings is the parent company behind a group of specialist, customer-facing brands."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-xl border border-ink-100 bg-white p-5"
              >
                <Building2 className="h-6 w-6 text-brand-600" />
                <h4 className="mt-3 font-display text-base font-semibold text-ink-900">
                  {brand.name}
                </h4>
                <p className="mt-1 text-sm text-ink-500">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <CtaBanner />
    </>
  );
}

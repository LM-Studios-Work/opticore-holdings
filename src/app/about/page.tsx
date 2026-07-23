import type { Metadata } from "next";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import CtaBanner from "@/components/CtaBanner";
import TestimonialCard from "@/components/TestimonialCard";
import { brands, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OptiCore Holdings, our mission, vision and the brands that make up our group of cleaning, hygiene and medical supply services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Building Cleaner, Safer Environments"
        description="OptiCore Holdings (Pty) Ltd operates across South Africa, executing professional cleaning, hygiene, pest control, and medical supply operations."
      />

      {/* ── Who we are – editorial split ──────────────────────────────────── */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl">
              We don't believe in shortcuts.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Whether we are sanitising a clinic, clearing a commercial build, or supplying bulk PPE, our focus is singular: getting the job done safely, efficiently, and to the highest standard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              We build long-term client relationships on the back of hard work and zero compromises.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary mt-8 w-fit"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <PlaceholderImage label="OptiCore Holdings Team" tone="brand" aspect="aspect-[4/3]" />
        </div>
      </section>




      {/* ── Brands ──────────────────────────────────────────────────────────── */}
      <section className="bg-sage-wash py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl">
              The OptiCore Holdings Family
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500">
              One holding company, four specialist divisions executing at the highest level.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-[0_20px_40px_-30px_rgba(9,60,58,0.3)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Building2 className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-display text-base font-semibold text-ink-900">
                  {brand.name}
                </h4>
                <p className="mt-1 text-sm text-ink-500">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500">
            Trusted by businesses, clinics, and facilities managers across South Africa.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import MedicalProductsGrid from "@/components/MedicalProductsGrid";
import medicalHero from "../../../public/Services Heros/medical supplies hero.png";
import consumablesImg from "../../../public/room_with_sanitary_products.jpeg";

export const metadata: Metadata = {
  title: "Medical Supplies",
  description:
    "PPE, gloves, masks, sanitiser, medical consumables, cleaning chemicals and first aid supplies from OptiCore Holdings.",
};

export default function MedicalSuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="PPE, Hygiene & Medical Consumables"
        description="Consistent stock. Fast delivery. Trusted quality. We supply healthcare providers, corporate offices, and industrial sites across Johannesburg and South Africa."
        image={medicalHero}
        imageAlt="Medical supplies and PPE products"
      />

      <section className="container-page pt-16 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-ink-100 shadow-xl sm:h-[420px]">
            <Image
              src={consumablesImg}
              alt="Sterile medical consumables and PPE ready for delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Medical Consumables"
              title="Sterile Supplies You Can Rely On"
            />
            <p className="mt-6 text-[15px] leading-relaxed text-ink-600">
              OptiCore Holdings provides a comprehensive portfolio of high-quality
              medical consumables, from essential personal protective equipment
              (PPE) like masks and gloves to critical wound care and diagnostic
              supplies. We ensure the sterile products you need are delivered
              reliably, supporting optimal patient care.
            </p>
          </div>
        </div>
      </section>

      <MedicalProductsGrid />

      <CtaBanner />
    </>
  );
}

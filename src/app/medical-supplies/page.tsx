import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import MedicalProductsGrid from "@/components/MedicalProductsGrid";
import medicalHero from "../../../public/Services Heros/medical supplies hero.png";

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
        description="Consistent stock. Fast delivery. Trusted quality. We supply healthcare providers, corporate offices, and industrial sites across South Africa."
        image={medicalHero}
        imageAlt="Medical supplies and PPE products"
      />

      <MedicalProductsGrid />

      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import pestHero from "../../../../public/Services Heros/pest control hero.webp";

export const metadata: Metadata = {
  title: "Pest Control | OptiCore Holdings",
  description:
    "Safe, effective, and compliant pest eradication for all property types. Targeted identification and eradication of infestations from OptiCore Holdings.",
};

export default function PestControlPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Pest Control"
        description="Safe, effective, and regulation-compliant pest eradication for all property types — from cockroaches and rodents to termites and bed bugs."
        image={pestHero}
        imageAlt="Professional pest control technician on site"
      />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import sanitisingHero from "../../../../public/Services Heros/Sanitising and Disinfection hero.png";

export const metadata: Metadata = {
  title: "Sanitising & Disinfection | OptiCore Holdings",
  description:
    "Medical-grade fogging and targeted disinfection to protect high-traffic environments. Hospital-grade disinfectants and fogging technology from OptiCore Holdings.",
};

export default function SanitisingPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Sanitising & Disinfection"
        description="Medical-grade fogging and targeted disinfection to protect high-traffic environments. Hospital-grade disinfectants that eliminate pathogens in high-risk spaces."
        image={sanitisingHero}
        imageAlt="Professional sanitising and disinfection service"
      />
    </>
  );
}

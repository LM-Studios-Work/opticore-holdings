import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import cleaningHero from "../../../../public/Services Heros/commercial and residential cleaning hero.webp";

export const metadata: Metadata = {
  title: "Commercial & Residential Cleaning | OptiCore Holdings",
  description:
    "Professional cleaning services for homes, offices, and commercial properties across South Africa. Deep cleaning, move-in/move-out, post-construction and more.",
};

export default function CleaningPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Commercial & Residential Cleaning"
        description="Scalable cleaning operations for homes, offices, and commercial properties — executed by trained teams to an uncompromising standard."
        image={cleaningHero}
        imageAlt="Professional cleaning team on site"
      />
    </>
  );
}

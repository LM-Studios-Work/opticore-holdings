import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See OptiCore Holdings in action across cleaning, sanitising, pest control and medical supply services.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Work in Action"
        description="A look at the services we deliver every day — real photos of our team and work will be added here soon."
      />

      <section className="container-page py-16 sm:py-20">
        <GalleryGrid />
      </section>

      <CtaBanner />
    </>
  );
}

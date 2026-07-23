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
        title="Our Work in Action"
        description="Real teams. Real sites. Real results. (Photos coming soon)"
      />

      <section className="container-page py-16 sm:py-20">
        <GalleryGrid />
      </section>

      <CtaBanner />
    </>
  );
}

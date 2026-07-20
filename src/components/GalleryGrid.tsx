"use client";

import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { galleryImages } from "@/lib/site-data";

const filters = [
  { value: "all", label: "All" },
  { value: "cleaning", label: "Cleaning" },
  { value: "sanitising", label: "Sanitising" },
  { value: "pest-control", label: "Pest Control" },
  { value: "medical-supplies", label: "Medical Supplies" },
] as const;

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === filter.value
                ? "bg-brand-600 text-white"
                : "bg-ink-100 text-ink-600 hover:bg-ink-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => (
          <PlaceholderImage
            key={img.image}
            label={img.label}
            tone={
              img.category === "medical-supplies"
                ? "dark"
                : img.category === "pest-control"
                ? "light"
                : "brand"
            }
            aspect="aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  );
}

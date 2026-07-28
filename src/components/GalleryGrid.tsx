"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/site-data";

const filters = [
  { value: "all", label: "All" },
  { value: "cleaning", label: "Cleaning" },
  { value: "sanitising", label: "Sanitising" },
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => {
          const isPoster = img.label.includes("Poster");
          return (
            <div
              key={img.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-100 bg-ink-900/5 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={img.image}
                alt={img.label}
                fill
                className={`${
                  isPoster ? "object-contain p-3" : "object-cover"
                } transition-transform duration-500 group-hover:scale-105`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                <span className="text-sm font-bold text-white tracking-wide">
                  {img.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

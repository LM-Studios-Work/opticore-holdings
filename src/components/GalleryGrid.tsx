"use client";

import { useState, useEffect } from "react";
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
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden rounded-2xl border border-ink-100 bg-ink-900/5 shadow-md transition-all duration-300 hover:shadow-xl"
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

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex flex-col justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.label}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 text-center pb-6 text-white font-medium bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pointer-events-none text-lg">
              {selectedImage.label}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

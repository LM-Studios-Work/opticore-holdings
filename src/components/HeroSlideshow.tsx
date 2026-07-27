"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import homeHero from "../../public/Hero Image/Home hero.jpg";
import medicalWard from "../../public/Hero Image/potential hero 2.jpg";
import workerSanitizing from "../../public/worker_sanitizing.jpeg";
import windowWash from "../../public/cleaning_service_window_wash.jpeg";
import medicalSuppliesRoom from "../../public/room_with_sanitary_products.jpeg";

const slides = [
  { src: homeHero, alt: "OptiCore Holdings team on site" },
  { src: workerSanitizing, alt: "Technician fogging a corridor during a disinfection service" },
  { src: windowWash, alt: "Cleaner wiping down office glass partitions" },
  { src: medicalWard, alt: "Nurse preparing a hospital bed in a medical ward" },
  { src: medicalSuppliesRoom, alt: "Room with medical supplies" },
] as const;

const INTERVAL_MS = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {/* Cross-fading background photos */}
      {slides.map((slide, index) => (
        <Image
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          fill
          preload={index === 0}
          loading={index === 0 ? undefined : "eager"}
          className={`object-cover object-[35%_center] transition-opacity duration-1000 ease-in-out sm:object-center ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2 sm:bottom-8 sm:right-8">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </>
  );
}

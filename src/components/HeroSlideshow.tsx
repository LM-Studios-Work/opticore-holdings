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

const INTERVAL_MS = 4000;

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

    </>
  );
}

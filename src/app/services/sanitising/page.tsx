import type { Metadata } from "next";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import sanitisingHero from "../../../../public/Services Heros/Sanitising and Disinfection hero.png";
import workerSanitising from "../../../../public/worker_sanitizing.jpeg";
import sanitisingMachine from "../../../../public/sanitizing_and_defecting_service.jpeg";

export const metadata: Metadata = {
  title: "Sanitising & Hygiene Services | OptiCore Holdings",
  description:
    "Medical-grade fogging, hygiene dispensers, and targeted disinfection to protect high-traffic environments.",
};

export default function SanitisingPage() {
  return (
    <>
      <PageHero
        eyebrow="OptiCore Holdings > Hygiene Services"
        title="Sanitising & Hygiene Services"
        description="Medical-grade fogging and targeted disinfection to protect high-traffic environments. Hospital-grade disinfectants that eliminate pathogens in high-risk spaces."
        image={sanitisingHero}
        imageAlt="Professional sanitising and disinfection service"
      />

      <div className="bg-white">
        {/* Section 1: Hygiene Services That Matter */}
        <section className="container-page py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading 
                eyebrow="Deep Cleaning & Hygiene" 
                title="Hygiene Services That Matter" 
              />
              <div className="space-y-5 text-ink-600 text-[15px] leading-relaxed mb-8 mt-6">
                <p>
                  Hygiene services benefit from a unique feature that sets OptiCore Holdings apart from any other hygiene service provider. We always go the extra mile to make sure that our clients are 100% satisfied with the hygiene service or services that we offer and deliver. We customize each client as to their own needs and not our own.
                </p>
                <p>
                  The hygiene dispensers and consumables that we supply are not just there to look pretty, but we supply our clients with the best hygiene equipment, that works effectively and that last. Always looking for both sized – cost effective and durable.
                </p>
              </div>

              <h3 className="text-lg font-bold text-ink-900 mb-6">
                Our Hygiene Services Include:
              </h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Hygiene Dispenser Rentals",
                  "Hygiene Consumables",
                  "Deep Cleaning of Urinals and Urinal Traps",
                  "Deep Cleaning of Toilet Bowls and Toilet Rims",
                  "Deep Cleaning of Restroom Basins & Basin Traps",
                  "Deep Cleaning of Bathrooms / Ablution Showers",
                  "Sanitary Hygiene Services",
                  "Sanitizing / Disinfecting Services"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn btn-primary px-8 py-4 inline-flex items-center">
                REQUEST A QUOTE NOW! <FaChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="relative h-[400px] sm:h-[600px]">
              <Image src="/Sanitising and Hygiene/deep cleaning.webp" alt="Deep Cleaning Services" fill className="rounded-sm object-cover" />
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Services Grid */}
        <section className="container-page pb-16 sm:pb-24">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
            
            {/* Service 1 */}
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-bold text-ink-900 mb-4">Rental of hygiene dispensers</h4>
              <p className="text-ink-600 text-[15px] leading-relaxed mb-6 flex-1">
                Servicing of hygiene dispensers on a monthly basis. Replacing damage hygiene dispensers caused by malfunction. (our turn around time is no more than 1 day.) Hygiene refills we replace monthly or as per client request. We do not deliver consumables if the client does not need them. A full report is sent to the client on the well being of the hygiene dispensers and any recommendations if need be to better the hygiene standards.
              </p>
              <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm inline-flex items-center">
                View Dispenser Range <FaChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-bold text-ink-900 mb-4">Feminine Hygiene - Sanitary Services</h4>
              <p className="text-ink-600 text-[15px] leading-relaxed mb-6 flex-1">
                OptiCore Holdings provides feminine sanitary bins on a rental basis. Either on a month to month basis, 12 month or a 24-month contract. We also offer to service the feminine sanitary bins either on a weekly, bi-weekly, or monthly basis. We empty and disinfect the bins and reline them with new liners. We dispose of the sanitary waste in a decent manner by using proper containers and transport to a certified waste disposal facility.
              </p>
              <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm inline-flex items-center">
                View Sanitary Services <FaChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-bold text-ink-900 mb-4">Deep Cleaning</h4>
              <p className="text-ink-600 text-[15px] leading-relaxed mb-6 flex-1">
                We also provide our clients with a monthly deep cleaning service for urinals, urinal traps, basins, toilets, and showers. Deep cleaning helps with the removal of limescale, dirt, the smell of urine in the urinal traps and helps with the blockage of drainpipes etc. Keeping your facilities hygienic and smelling fresh.
              </p>
              <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm inline-flex items-center">
                Deep Cleaning Services <FaChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-bold text-ink-900 mb-4">Disinfecting / Sanitizing services</h4>
              <p className="text-ink-600 text-[15px] leading-relaxed mb-6 flex-1">
                Sanitizing or disinfecting of Offices, warehouses, production plants or rest rooms we do either as a once off service or can workout a suitable program thought the year to keep these areas as hygienic as possible. Our staff is well trained, and our procedures are of the highest standards - satisfaction guaranteed.
              </p>
              <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm inline-flex items-center">
                Disinfecting Services <FaChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* Advanced Disinfection band */}
        <section className="bg-sage-wash border-t border-ink-100 py-16 sm:py-24">
          <div className="container-page">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative order-2 h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[420px] lg:order-1">
                <Image
                  src={sanitisingMachine}
                  alt="Specialised fogging machine used for high-grade disinfection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading
                  eyebrow="Sanitising & Decontamination"
                  title="Advanced Disinfection & Sanitizing"
                />
                <p className="mt-6 text-[15px] leading-relaxed text-ink-600">
                  Our professional decontamination services go beyond standard
                  cleaning. Utilizing specialized equipment and certified
                  high-grade disinfectants, we provide comprehensive sanitizing
                  solutions for commercial, educational, and medical
                  environments, ensuring safety and peace of mind in high-traffic
                  spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <OtherServicesSection currentSlug="sanitising" />
      </div>
    </>
  );
}

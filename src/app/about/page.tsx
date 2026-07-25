import type { Metadata } from "next";
import { FaArrowRight, FaWandMagicSparkles, FaFlask, FaShieldHalved, FaTriangleExclamation, FaLeaf, FaStopwatch } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../../public/Services Heros/professional hygiene services hero, home page.jpg";
import satisfactionImg from "../../../public/100-percent-satisfaction.png";
import companyImg from "../../../public/room_with_sanitary_products.jpeg";
import ppeImg from "../../../public/doc_with_surgical_mask.jpeg";
import teamImg from "../../../public/cleaning_service_window_wash.jpeg";
import operationsImg from "../../../public/worker_sanitizing.jpeg";
import satisfactionPhoto from "../../../public/stethoscope.jpeg";

export const metadata: Metadata = {
  title: "About Us | OptiCore Holdings",
  description: "Learn about OptiCore Holdings, our mission, vision and the brands that make up our group of cleaning, hygiene and medical supply services.",
};

import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-teal-800 py-16 text-white sm:py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Professional Facility & Hygiene Operations"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-teal-900/20 sm:bg-gradient-to-r sm:from-teal-950/85 sm:via-teal-900/60 sm:to-teal-900/30" />
        <div className="container-page relative z-10">
          <div className="text-teal-100 text-sm mb-4 font-medium tracking-wide">
            OptiCore Holdings &gt; About Us
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">About Us</h1>
        </div>
      </section>

      {/* The Company Section */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="The Company" title="Facility Management, Hygiene & Medical Supplies, Under One Roof" />
            <div className="space-y-4 text-ink-600 text-[15px] leading-relaxed mb-8">
              <p>
                OptiCore Holdings is a South African facility management group delivering professional commercial and residential cleaning, medical-grade sanitising and fogging, certified pest control, and bulk medical supply solutions. With over 15 years of combined operational experience, we serve residential homeowners, corporate offices, schools, hospitals, clinics, retail stores, warehouses, and industrial facilities across Gauteng.
              </p>
              <p>
                Our four specialist divisions (Zenako Cleaning Co., OptiCore Sanitising, OptiCore Pest Control, and OptiCore Medical Supplies) give you a fully integrated service that removes the complexity of managing multiple contractors. One call covers everything from deep cleaning and fogging to PPE procurement and pest eradication.
              </p>
              <p>
                Our teams are screened, rigorously trained, and equipped with ISO-approved products and compliant methods. Health, safety, and precision are non-negotiables at every site we touch.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Get Service Now <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[500px]">
            <Image src="/About Page/About page modern facilities placeholder.jpg" alt="Modern Building Lobby" fill className="rounded-2xl shadow-xl border border-ink-100 object-cover" />
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="bg-sage-wash py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[600px] order-2 lg:order-1">
              <Image src="/About Page/ppe professional.webp" alt="Professional in PPE" fill className="rounded-2xl shadow-xl border border-ink-100 object-cover" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <SectionHeading eyebrow="What We Provide" title="Four Specialist Divisions. One Trusted Partner." />
              
              <div className="space-y-6 mt-6">
                <div className="group bg-white p-6 rounded-2xl border border-ink-100 hover:border-brand-300 transition-colors shadow-sm">
                  <h4 className="font-display font-semibold text-ink-900 mb-2 text-base">Commercial & Residential Cleaning</h4>
                  <p className="text-ink-600 text-[14px] leading-relaxed">Deep cleans, routine office maintenance, post-construction clear-outs, move-in/move-out, carpet, window, and upholstery cleaning. We serve homes, offices, warehouses, schools, and hospitals.</p>
                </div>
                <div className="group bg-white p-6 rounded-2xl border border-ink-100 hover:border-brand-300 transition-colors shadow-sm">
                  <h4 className="font-display font-semibold text-ink-900 mb-2 text-base">Sanitising, Fogging & Disinfection</h4>
                  <p className="text-ink-600 text-[14px] leading-relaxed">Hospital-grade fogging, targeted disinfection, and virus/bacteria control using ISO-approved products. Ideal for clinics, offices, schools, and any high-traffic environment.</p>
                </div>
                <div className="group bg-white p-6 rounded-2xl border border-ink-100 hover:border-brand-300 transition-colors shadow-sm">
                  <h4 className="font-display font-semibold text-ink-900 mb-2 text-base">Pest Control</h4>
                  <p className="text-ink-600 text-[14px] leading-relaxed">Regulation-compliant eradication of cockroaches, ants, rodents, termites, bed bugs, and general infestations across all residential, commercial, and industrial property types.</p>
                </div>
                <div className="group bg-white p-6 rounded-2xl border border-ink-100 hover:border-brand-300 transition-colors shadow-sm">
                  <h4 className="font-display font-semibold text-ink-900 mb-2 text-base">Medical Supplies & PPE</h4>
                  <p className="text-ink-600 text-[14px] leading-relaxed">Bulk procurement of PPE, gloves, masks, sanitisers, medical consumables, cleaning chemicals, and first aid kits. Available for healthcare facilities, corporates, and government tenders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="container-page py-16 sm:py-24 border-b border-ink-100">
        <SectionHeading eyebrow="Important Information" title="One Partner for Cleaning, Hygiene, Pest Control & Medical Supplies" />
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_auto] mt-10">
          <div className="space-y-6 text-ink-600 text-[15px] leading-relaxed">
            <p className="font-bold text-ink-900 text-base">
              Tired of juggling multiple contractors for cleaning, sanitising, pest control, and PPE procurement?
            </p>
            <p>
              OptiCore Holdings removes that burden entirely. As a holding group with four specialised divisions under one roof, we coordinate every aspect of your facility's hygiene and supply needs, so you never have to chase down a different provider for each problem.
            </p>
          </div>
          <div className="space-y-6 text-ink-600 text-[15px] leading-relaxed">
            <p>
              All our technicians are trained, certified, and equipped with ISO-approved products. Whether it's a routine office clean, a hospital-grade fogging session, a rodent eradication, or a bulk PPE order, every job is executed to the same exacting standard.
            </p>
            <p>
              We provide every client with a Health & Safety file and conduct audits every 3 to 6 months, so your premises stay compliant, safe, and audit-ready at all times.
            </p>
          </div>
          <div className="flex justify-center items-start px-8 md:-mt-16">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <Image
                src={satisfactionImg}
                alt="100% Satisfaction Guaranteed"
                className="object-contain"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protecting Our Environment */}
      <section className="bg-white py-16 sm:py-32 overflow-hidden">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Circular Diagram: OptiCore's 6 service & safety pillars */}
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] mx-auto lg:mx-0">
              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <span className="font-display text-xl sm:text-2xl font-black text-ink-900 leading-tight text-center">OptiCore<br/>Standard</span>
              </div>

              {/* Decorative dashed circle */}
              <div className="absolute inset-12 border-2 border-dashed border-ink-200 rounded-full animate-[spin_40s_linear_infinite]"></div>

              {/* Rotating Container for Pillars */}
              <div className="absolute inset-0 z-10 animate-[spin_40s_linear_infinite]">
                {/* Top: Fogging & Disinfection */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full border border-brand-200 shadow-xl flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaTriangleExclamation className="text-brand-500 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">Fogging &<br/>Disinfection</span>
                    </div>
                  </div>
                </div>

                {/* Top Right: Commercial Cleaning */}
                <div className="absolute top-[12%] -right-4 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full shadow-xl border border-ink-100 flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaWandMagicSparkles className="text-teal-600 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">Commercial<br/>Cleaning</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Right: Pest Control */}
                <div className="absolute bottom-[12%] -right-4 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full shadow-xl border border-ink-100 flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaLeaf className="text-teal-600 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">Pest<br/>Control</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: ISO Approved Products */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full shadow-xl border border-ink-100 flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaStopwatch className="text-teal-600 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">ISO Approved<br/>Products</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Left: Medical Supplies */}
                <div className="absolute bottom-[12%] -left-4 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full border border-brand-200 shadow-xl flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaFlask className="text-brand-500 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">Medical<br/>Supplies & PPE</span>
                    </div>
                  </div>
                </div>

                {/* Top Left: Health & Safety */}
                <div className="absolute top-[12%] -left-4 w-28 h-28">
                  <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-full h-full bg-white rounded-full shadow-xl border border-ink-100 flex flex-col items-center justify-center text-center p-2 hover:scale-110 transition-transform duration-300">
                      <FaShieldHalved className="text-teal-600 mb-1" size={28} />
                      <span className="text-[11px] font-bold text-ink-900 leading-tight mt-1">Health &<br/>Safety First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-10">
              <SectionHeading eyebrow="Our Commitment" title="Why Choose OptiCore Holdings?" />
              <div className="space-y-4 text-ink-600 text-[15px] leading-relaxed mb-8">
                <p>
                  Every service we deliver is backed by the same commitment: ISO-approved products, trained and screened personnel, and zero compromise on safety. That applies whether it's a routine office clean, a hospital fogging session, rodent eradication, or a bulk PPE order.
                </p>
                <p>
                  We are the only partner you need. Our integrated group structure means your office can be cleaned, fogged, pest-treated, and fully stocked with medical supplies by a single, accountable team. No coordination headaches, no finger-pointing between contractors.
                </p>
              </div>
              <Link
                href="/quote"
                className="btn btn-primary"
              >
                Request a Quote <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* We Care for People */}
      <section className="container-page py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading eyebrow="We Care for People" title="How OptiCore Operates" center={true} />
          <p className="text-ink-500 text-[15px]">
            From the first call to the final sign-off, we manage everything. Site assessment, scheduling, execution, and follow-up audits are all coordinated by a single team across cleaning, sanitising, pest control, and medical supply operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-[300px]">
            <Image
              src={teamImg}
              alt="OptiCore team member cleaning an office"
              fill
              className="rounded-2xl border border-ink-100 object-cover shadow-md"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src={operationsImg}
              alt="Technician carrying out professional disinfection"
              fill
              className="rounded-2xl border border-ink-100 object-cover shadow-md"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-[300px] hidden lg:block">
            <Image
              src={satisfactionPhoto}
              alt="Professional medical diagnostic equipment"
              fill
              className="rounded-2xl border border-ink-100 object-cover shadow-md"
              sizes="33vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

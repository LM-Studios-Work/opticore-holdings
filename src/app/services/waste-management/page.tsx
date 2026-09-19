import type { Metadata } from "next";
import { FaCheck, FaLocationDot, FaClock, FaEnvelope, FaPhoneVolume, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import { siteConfig } from "@/lib/site-data";
import heroImg from "../../../../public/Services Heros/commercial and residential cleaning hero.webp";
import envProtectionImg from "../../../../public/waste-management/environmental_protection.jpg";
import heavyDutyImg from "../../../../public/waste-management/heavy_duty_cleaning.jpg";
import rubberImg from "../../../../public/waste-management/rubber_repurposing.jpg";

export const metadata: Metadata = {
  title: "Waste Management | OptiCore Holdings",
  description:
    "Comprehensive waste disposal, hazardous material clean-up, and recycling solutions by OptiCore Logistics.",
};

export default function WasteManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="OptiCore Logistics > Waste Management"
        title="Waste Management"
        description="OptiCore Logistics offers specialized waste management solutions including hazmat response, industrial cleaning, and safe disposal of all types of waste materials."
        image={heroImg}
        imageAlt="Professional waste management operations"
      />

      <div className="bg-white">
        {/* Section 1: Overview & Industrial Cleaning */}
        <section className="container-page py-16 sm:py-24">
          <SectionHeading 
            eyebrow="Waste Management & Safe Disposal" 
            title="Comprehensive Waste Solutions" 
          />

          <div className="flex flex-col gap-12 mt-12">
            
            {/* Row 1: Waste Management & Policies */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-xl font-bold text-ink-900 mb-4">
                  Professional Waste Management You Can Trust
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed mb-4">
                  We continually strive to institute best practice of waste management policies in all our work. OptiCore Logistics provides a full-spectrum approach to handling waste for commercial, industrial, and specialized sectors.
                </p>
                <p className="text-ink-600 text-[15px] leading-relaxed mb-6">
                  Our comprehensive services span across <strong>Waste Treatment, Demolition, Recycling, and Safe Disposal</strong>. We locate, identify, and manage hazardous and non-hazardous materials to ensure a safe environment while reducing your company's financial and environmental burden. We focus on sustainable practices, reduction, and recycling to ensure a cleaner future.
                </p>
                <ul className="space-y-3">
                  {[
                    "Waste Treatment",
                    "Demolition",
                    "Recycling",
                    "Waste Disposal",
                    "Safe Disposal",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-brand-600 font-semibold text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-ink-100 shadow-sm">
                <Image src={envProtectionImg} alt="Environmental Protection" fill className="object-cover" />
              </div>
            </div>

            {/* Row 2: Industrial Cleaning */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center pt-8 border-t border-ink-100">
              <div className="lg:order-1">
                <h3 className="text-xl font-bold text-ink-900 mb-4">
                  Industrial Cleaning
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed mb-6">
                  Our Industrial Cleaning division is equipped to handle complex and high-risk environments, ensuring that your facilities remain safe, compliant, and operational using state-of-the-art equipment designed for optimal containment.
                </p>
                <ul className="space-y-4">
                  {[
                    "24 hour Hazmat Response",
                    "Incident Management",
                    "Incident Documentation",
                    "Hazardous material clean-up and safe disposal",
                    "Specialised containment incl. Asbestos (Registered)",
                    "Specialised operations incl. confined space",
                    "Risk assessment and environmental assessments",
                    "Site Rehabilitation / Soil Rehabilitation",
                    "Specialist equipment and products for onsite and transport/vehicle solutions."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:order-2 rounded-xl overflow-hidden border border-ink-100 shadow-sm">
                <Image src={heavyDutyImg} alt="Heavy Duty Cleaning" fill className="object-cover" />
              </div>
            </div>

            {/* Row 3: Tyre & Rubber Disposal */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center pt-8 border-t border-ink-100">
              <div>
                <h3 className="text-xl font-bold text-ink-900 mb-4">
                  Tyre and Rubber Disposal
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed mb-6">
                  We offer comprehensive tyre and rubber disposal solutions designed to effectively manage and repurpose rubber waste, contributing to a sustainable and compliant environmental strategy through innovative repurposing into durable materials.
                </p>
                <ul className="space-y-4">
                  {[
                    "Reduction and stripping plant",
                    "Seperation and buffing process",
                    "Bi-product tar mix and rubberising"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-ink-100 shadow-sm">
                <Image src={rubberImg} alt="Rubber Repurposing" fill className="object-cover" />
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Sidebar Layout with Hazmat Focus */}
        <section className="lg:bg-sage-wash py-16 sm:py-24 border-t border-ink-100">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-start">
              
              {/* Sidebar — desktop only */}
              <div className="hidden lg:flex flex-col gap-8 sticky top-32">
                <div className="bg-white rounded-sm shadow-sm border border-ink-200 overflow-hidden">
                  <div className="bg-brand-600 text-white font-bold text-center py-4 px-6 text-lg">
                    Waste Management
                  </div>
                  <div className="divide-y divide-ink-100 text-center font-medium text-ink-700">
                    {[
                      "Waste Treatment",
                      "Demolition",
                      "Industrial Cleaning",
                      "Hazmat Response",
                      "Recycling",
                      "Waste Disposal",
                      "Safe Disposal"
                    ].map((service) => (
                      <div key={service} className="py-5 px-6 hover:bg-ink-50 transition-colors cursor-pointer">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-sm shadow-sm border border-ink-200 p-6 sm:p-8">
                  <h3 className="font-display font-bold text-ink-900 text-xl mb-6">Our Contacts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-600 text-[14px]">Gauteng</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaClock className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <div className="text-ink-600 text-[14px]">
                        <p>Mon-Fri: 07:00 AM - 04:00 PM</p>
                        <p>24/7 Emergency Hazmat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaEnvelope className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <a href={`mailto:${siteConfig.email}`} className="text-ink-600 text-[14px] hover:text-brand-600 transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaPhoneVolume className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <a href={siteConfig.phoneHref} className="text-ink-600 text-[14px] hover:text-brand-600 transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content: Hazmat Response */}
              <div className="lg:bg-white lg:p-12 lg:rounded-xl lg:border lg:border-ink-100 lg:shadow-sm">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 mb-6 text-brand-600">
                  HAZMAT RESPONSE
                </h2>
                
                <div className="space-y-6 text-ink-600 text-[15px] leading-relaxed mb-10">
                  <p className="text-lg font-semibold text-ink-800">
                    Reacting quickly to any Hazmat emergency can and will reduce any negative impact on the environment and your companies financial burden in such situations.
                  </p>
                  
                  <p>
                    OptiCore Logistics employs specialists in Hazmat Services and this division is highly trained to react quickly and professionaly to any accident and or emergency which may arise.
                  </p>
                  
                  <p>
                    All vehicles and equipment used by this division is state of the art to ensure safe containment of all hazardous material for save disposal.
                  </p>
                </div>

                <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mb-10">
                  <h3 className="text-xl font-bold text-ink-900 mb-4 flex items-center gap-3">
                    <FaClock className="text-brand-600" />
                    Available 24 Hours a Day
                  </h3>
                  <p className="text-ink-700 text-[15px]">
                    This service is available 24 hrs a day for your peace of mind. Our Hazmat division also supplies specialist Hazmat products and equipment for immediate containment onsite or for emergency use on vehicles, minimising the impact until our Hazmat Response Vehicle and Team arrive on scene.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-ink-900 mb-6">
                  Key Capabilities of Our Hazmat Division:
                </h3>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[15px]">
                      <strong>Rapid Deployment:</strong> Highly trained specialists ready to deploy immediately to mitigate environmental and financial damage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[15px]">
                      <strong>State-of-the-Art Equipment:</strong> Vehicles and containment systems designed specifically for hazardous materials.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[15px]">
                      <strong>Preventative Supplies:</strong> Provision of onsite containment products for immediate emergency use before our full team arrives.
                    </span>
                  </li>
                </ul>

                <Link href="/contact" className="btn btn-primary px-8 py-4 inline-flex shadow-md">
                  REQUEST EMERGENCY SUPPORT <FaChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <OtherServicesSection currentSlug="waste-management" />
      </div>
    </>
  );
}

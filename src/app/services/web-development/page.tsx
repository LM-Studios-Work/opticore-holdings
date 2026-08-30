import type { Metadata } from "next";
import { FaCheck, FaLocationDot, FaClock, FaEnvelope, FaPhoneVolume, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import { siteConfig } from "@/lib/site-data";
import webHero from "../../../../public/Services Heros/web development hero.jpg";

export const metadata: Metadata = {
  title: "Web Development & IT Solutions | OptiCore Digital",
  description:
    "High-performance, custom web development bridging the gap between your physical business and your digital presence.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="OptiCore Holdings > OptiCore Digital"
        title="Web Development"
        description="High-performance, custom web development bridging the gap between your physical business and your digital presence."
        image={webHero}
        imageAlt="Modern web development and digital solutions"
      />

      <div className="bg-white">
        {/* Section 1: Web Development Services & Solutions */}
        <section className="container-page py-16 sm:py-24">
          
          <SectionHeading 
            eyebrow="OptiCore Digital Solutions" 
            title="Professional Web Development" 
          />

          <div className="flex flex-col gap-12 mt-8">
            {/* Row 1 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Digital Excellence for Your Business
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed">
                  OptiCore Digital extends our holding company&apos;s standard of excellence to your online assets. We build, deploy, and manage high-performance websites and digital applications tailored to your operational needs. Just as we maintain physical facilities, we ensure your digital storefront is fast, reliable, and secure.
                </p>
              </div>
              <div className="relative h-[250px] sm:h-[350px]">
                <Image src={webHero} alt="Web Development Strategy" fill className="rounded-xl object-cover" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Why A Professional Web Presence Matters:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Establishes immediate trust and credibility with clients",
                    "Provides a 24/7 digital storefront for your services",
                    "Improves discoverability through search engines (SEO)",
                    "Automates customer inquiries and service bookings",
                    "Ensures compliance with digital accessibility standards",
                    "Protects customer data with modern security practices"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Comprehensive Digital Solutions
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Custom Web Applications tailored to your business processes.",
                    "Responsive & Mobile-First Design ensuring a seamless experience on all devices.",
                    "SEO & Performance Optimization for maximum visibility and speed.",
                    "Reliable Hosting & Ongoing Maintenance so you never have to worry about downtime."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-ink-600 text-[15px] leading-relaxed">
                  OptiCore Digital provides the technical expertise to diagnose your digital needs and deliver the most effective platform for your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Sidebar Layout */}
        <section className="bg-sage-wash py-16 sm:py-24 border-t border-ink-100">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-start">
              
              {/* Sidebar — desktop only */}
              <div className="hidden lg:flex flex-col gap-8 sticky top-32">
                <div className="bg-white rounded-sm shadow-sm border border-ink-200 overflow-hidden">
                  <div className="bg-brand-600 text-white font-bold text-center py-4 px-6 text-lg">
                    Digital Services
                  </div>
                  <div className="divide-y divide-ink-100 text-center font-medium text-ink-700">
                    {[
                      "Custom Web Design",
                      "Web Application Development",
                      "E-Commerce Solutions",
                      "SEO & Marketing",
                      "Hosting & Maintenance"
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
                      <span className="text-ink-600 text-[14px]">Gauteng, Nationwide Digital Service</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaClock className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <div className="text-ink-600 text-[14px]">
                        <p>Mon-Fri: 07:00 AM - 05:00 PM</p>
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

              {/* Main Content */}
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 mb-6">
                  Web Development For Your Business Needs
                </h2>
                <div className="space-y-5 text-ink-600 text-[15px] leading-relaxed mb-12">
                  <p>
                    Running a business is complicated enough without having to worry about managing servers, optimizing code, and designing user interfaces. However, a strong digital presence is crucial to maintaining a competitive edge. That is why you need a professional digital agency to come in and do the job for you.
                  </p>
                  <p>
                    OptiCore Digital has an experienced team of developers and designers who are trained to use the most modern, effective web technologies that will keep your business fast, secure, and highly visible.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-ink-900 mb-6">
                  How Does OptiCore Digital Work?
                </h3>
                <div className="space-y-5 text-ink-600 text-[15px] leading-relaxed mb-12">
                  <p>
                    OptiCore Digital practices an integrated development approach, which is a comprehensive method of dealing with digital transformation by combining technical expertise with business logic.
                  </p>
                  <p>
                    Our specialists assess your current digital footprint and thoroughly check your requirements. We then create custom development programs based on these findings tailored specifically for each client.
                  </p>
                </div>

                <Link href="/contact" className="btn btn-primary px-8 py-4 inline-flex">
                  START YOUR PROJECT <FaChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <OtherServicesSection currentSlug="web-development" />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import transportationHero from "../../../../public/Services Heros/transportation_hero.jpg";
import gallery1 from "../../../../public/Services Heros/transportation_gallery_1.jpg";
import gallery2 from "../../../../public/Services Heros/transportation_gallery_2.jpg";
import gallery3 from "../../../../public/Services Heros/transportation_gallery_3.jpg";

export const metadata: Metadata = {
  title: "Heavy Equipment Transportation | OptiCore Holdings",
  description:
    "Reliable and secure transportation of heavy machinery and abnormal loads up to 95 tons.",
};

export default function TransportationPage() {
  return (
    <>
      <PageHero
        eyebrow="Logistics Services Gauteng > Heavy Equipment Transport"
        title="Heavy Equipment Transportation"
        description="Specialized logistics solutions for moving massive construction equipment, mining machinery, and industrial components safely and efficiently."
        image={transportationHero}
        imageAlt="Heavy equipment transportation"
      />

      <div className="bg-white">
        <section className="container-page py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              eyebrow="Our Transportation Services" 
              title="Secure, Heavy-Duty Logistics" 
            />
            <p className="text-ink-600 text-[15px] leading-relaxed mt-6 mb-8">
              OptiCore Holdings delivers robust transportation solutions designed to handle the most demanding loads. With a modern fleet capable of transporting up to 95 tons, we specialize in moving abnormal loads safely across local and cross-border routes. Our comprehensive service includes flatbed and lowbed trailers, meticulous route surveying, and professional escort vehicles.
            </p>
            
            <ul className="space-y-4">
              {[
                "Heavy Equipment Transport (up to 95 tons)",
                "Abnormal Loads Management",
                "Flatbed & Lowbed Trailer Services",
                "Local & Cross-Border Transport",
                "Route Surveying & Planning",
                "Escort Vehicles for Oversized Loads",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                  <span className="text-ink-700 text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Transportation Packages Section */}
        <section className="bg-sage-wash py-16 sm:py-24 border-t border-ink-100">
          <div className="container-page">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              {/* Left Column */}
              <div>
                <SectionHeading 
                  eyebrow="Transportation Packages:" 
                  title="Specialized Freight Solutions" 
                />
                <div className="space-y-4 text-ink-600 text-[14px] leading-relaxed mb-10 mt-6">
                  <p>
                    Every heavy transport job is unique. We provide tailored logistics packages designed to handle everything from standard heavy equipment moves to highly complex abnormal load operations. 
                  </p>
                  <p>
                    Our packages ensure compliance, safety, and efficiency. Whether you need ongoing fleet relocation services or a one-off cross-border transport, our dedicated team manages the entire process from route surveying to final delivery.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Benefits of Our Services:
                </h3>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Full route planning and risk assessment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Strict adherence to safety and regulatory standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Professional drivers and experienced escort teams.</span>
                  </li>
                </ul>
              </div>

              {/* Right Column (Table/Grid) */}
              <div className="bg-white shadow-sm border border-ink-200 flex flex-col rounded-sm">
                <div className="bg-brand-600 text-white p-5 text-center leading-relaxed">
                  <p className="font-bold text-sm">
                    Logistics Packages & Service Inclusions<br />
                    (Customized per load size and route distance)
                  </p>
                </div>

                <div className="divide-y divide-ink-200 flex-1">
                  {[
                    {
                      title: "Local Heavy Transport",
                      items: [
                        "Intra-provincial movement of standard equipment",
                        "Standard flatbed or lowbed allocation",
                        "Basic route clearing and planning",
                        "Same-day or next-day scheduling"
                      ]
                    },
                    {
                      title: "Abnormal Load Operations",
                      items: [
                        "Transport for loads exceeding standard dimensions",
                        "Specialized lowbed and multi-axle trailers",
                        "Detailed route surveying and permit acquisition",
                        "Coordination with traffic authorities"
                      ]
                    },
                    {
                      title: "Cross-Border Logistics",
                      items: [
                        "Secure transport to neighboring countries",
                        "Customs clearing and documentation support",
                        "End-to-end trip monitoring and tracking",
                        "Multi-day operation management"
                      ]
                    },
                    {
                      title: "Escort & Convoy Services",
                      items: [
                        "Certified escort vehicles with warning systems",
                        "Trained convoy operators",
                        "Real-time hazard mitigation",
                        "Traffic control during transit"
                      ]
                    }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-[1fr_2fr] p-6 bg-white">
                      <div className="font-bold text-brand-700 text-[15px] flex items-center pr-4">
                        {row.title}
                      </div>
                      <ul className="space-y-3 list-disc list-outside pl-4 text-ink-700 text-sm">
                        {row.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container-page py-16 sm:py-24 border-t border-ink-100">
          <SectionHeading 
            title="Transportation Gallery" 
            description="A glimpse into our heavy-duty fleet and abnormal load capabilities."
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[gallery1, gallery2, gallery3].map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md border border-ink-100 group">
                <Image
                  src={img}
                  alt={`Transportation Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <OtherServicesSection currentSlug="transportation" />
      </div>
    </>
  );
}

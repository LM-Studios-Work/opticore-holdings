import type { Metadata } from "next";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import landscapingHero from "../../../../public/Services Heros/landscaping_hero.jpg";
import gallery1 from "../../../../public/Services Heros/landscaping_gallery_1.jpg";
import gallery2 from "../../../../public/Services Heros/landscaping_gallery_2.jpg";
import gallery3 from "../../../../public/Services Heros/landscaping_gallery_3.jpg";

export const metadata: Metadata = {
  title: "Commercial & Residential Landscaping | OptiCore Holdings",
  description:
    "Professional lawn care, tree felling, and hardscaping services to elevate your property across Johannesburg and South Africa.",
};

export default function LandscapingPage() {
  return (
    <>
      <PageHero
        eyebrow="Landscaping Services Gauteng > Commercial & Residential"
        title="Commercial & Residential Landscaping"
        description="Our expert landscaping teams transform and maintain outdoor spaces with precision. From routine garden maintenance to complex hardscaping, we ensure your grounds reflect the high standards of your business or home."
        image={landscapingHero}
        imageAlt="Professional landscaping on site"
      />

      <div className="bg-white">
        <section className="container-page py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              eyebrow="Our Landscaping Services" 
              title="Expert Groundskeeping & Hardscaping" 
            />
            <p className="text-ink-600 text-[15px] leading-relaxed mt-6 mb-8">
              At OptiCore Holdings, we know that the exterior of your property is the first impression you make. Our specialized landscaping services are tailored to your specific requirements, providing everything from routine lawn care to transformative hardscaping and tree felling. We serve a wide range of properties including corporate parks, residential estates, and private homes.
            </p>
            
            <ul className="space-y-4">
              {[
                "Lawn Care & Mowing",
                "Garden Maintenance",
                "Tree Felling & Pruning",
                "Hardscaping (Pathways, Retaining Walls)",
                "Irrigation System Management",
                "Seasonal Cleanups",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                  <span className="text-ink-700 text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Landscaping Packages Section */}
        <section className="bg-sage-wash py-16 sm:py-24 border-t border-ink-100">
          <div className="container-page">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              {/* Left Column */}
              <div>
                <SectionHeading 
                  eyebrow="Our Landscaping Packages:" 
                  title="Flexible Landscaping Packages" 
                />
                <div className="space-y-4 text-ink-600 text-[14px] leading-relaxed mb-10 mt-6">
                  <p>
                    We provide flexible, scalable landscaping packages designed to meet the demands of commercial estates and residential properties. With our experienced teams, you can rest assured your outdoor spaces are maintained to the highest standards.
                  </p>
                  <p>
                    We don't lock clients into rigid contracts. Our packages adapt to seasonal changes and specific property needs, with flexible monthly arrangements and clear communication.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Benefits of Our Packages:
                </h3>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Customized maintenance plans suited to your property's exact needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Access to discounted ad-hoc services for long-term clients.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Routine seasonal updates and proactive care.</span>
                  </li>
                </ul>
              </div>

              {/* Right Column (Table/Grid) */}
              <div className="bg-white shadow-sm border border-ink-200 flex flex-col rounded-sm">
                <div className="bg-brand-600 text-white p-5 text-center leading-relaxed">
                  <p className="font-bold text-sm">
                    Package Inclusions & Maintenance Tiers<br />
                    (Tailored based on property size and specific requirements)
                  </p>
                </div>

                <div className="divide-y divide-ink-200 flex-1">
                  {[
                    {
                      title: "Basic Maintenance Tier",
                      items: [
                        "Weekly lawn mowing and edge trimming",
                        "Weed control in flower beds",
                        "Basic sweeping of hard surfaces",
                        "Removal of garden refuse"
                      ]
                    },
                    {
                      title: "Comprehensive Groundskeeping",
                      items: [
                        "Bi-weekly lawn care and aeration",
                        "Seasonal planting and soil turning",
                        "Fertilizing and pest control for plants",
                        "Irrigation system checks"
                      ]
                    },
                    {
                      title: "Hardscaping & Installations",
                      items: [
                        "Custom stone pathway installation",
                        "Retaining wall construction",
                        "Water feature setup and maintenance",
                        "Outdoor lighting installation"
                      ]
                    },
                    {
                      title: "Tree Felling & Pruning",
                      items: [
                        "Safe removal of dead or hazardous trees",
                        "Crown thinning and shaping",
                        "Stump grinding and removal",
                        "Emergency storm damage clearing"
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
            title="Landscaping Gallery" 
            description="A showcase of our professional groundskeeping, hardscaping, and tree felling work."
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[gallery1, gallery2, gallery3].map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md border border-ink-100 group">
                <Image
                  src={img}
                  alt={`Landscaping Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <OtherServicesSection currentSlug="landscaping" />
      </div>
    </>
  );
}

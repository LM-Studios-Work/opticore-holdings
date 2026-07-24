import type { Metadata } from "next";
import { FaCheck, FaLocationDot, FaClock, FaEnvelope, FaPhoneVolume, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import { siteConfig } from "@/lib/site-data";
import pestHero from "../../../../public/Services Heros/pest control hero.webp";
import fumigationImg from "../../../../public/sanitizing_and_defecting_service.jpeg";
import treatmentImg from "../../../../public/sanitizing_and_defecting_service_gun_2.jpeg";
import inspectionImg from "../../../../public/doc_with_surgical_mask.jpeg";
import technicianImg from "../../../../public/worker_sanitizing.jpeg";

export const metadata: Metadata = {
  title: "Pest Control | OptiCore Holdings",
  description:
    "Safe, effective, and compliant pest eradication for all property types. Targeted identification and eradication of infestations from OptiCore Holdings.",
};

export default function PestControlPage() {
  return (
    <>
      <PageHero
        eyebrow="OptiCore Holdings > Pest Control"
        title="Pest Control"
        description="Safe, effective, and regulation-compliant pest eradication for all property types, including cockroaches, rodents, termites, and bed bugs."
        image={pestHero}
        imageAlt="Professional pest control technician on site"
      />

      <div className="bg-white">
        {/* Section 1: Pest Control Services & Solutions */}
        <section className="container-page py-16 sm:py-24">
          
          <SectionHeading 
            eyebrow="Pest Control & Pest Control Solutions" 
            title="Pest Control Services" 
          />

          <div className="flex flex-col gap-12 mt-8">
            {/* Row 1 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Professional Pest Control Services you can Trust!
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed">
                  Pest Control Services Offered by OptiCore Holdings. OptiCore Holdings&apos;s Pest Control Division is specially designed to tackle common pests such as roaches, ants & rodents. We locate, identify, remove, destroy, control, and repel pests. We use our knowledge of pest&apos;s biology and habits, along with an arsenal of pest management techniques — applying chemicals, setting traps, operating equipment, and even modifying structures to alleviate pest problems.
                </p>
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-xl sm:h-[350px]">
                <Image
                  src={fumigationImg}
                  alt="Professional fogging equipment used for fumigation treatments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:order-1">
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Pest Infestations Can Pose Serious Risks To Buildings, Surroundings And Human Health And Safety:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Pests carry transferable diseases",
                    "Pests leave droppings and other debris",
                    "Pests spread bacteria which causes food poisoning",
                    "Pests can cause unpleasant odours",
                    "Pests can damage electrical wiring",
                    "Some pests bite or sting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-xl sm:h-[350px] lg:order-2">
                <Image
                  src={treatmentImg}
                  alt="Targeted spray treatment applied in a commercial space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  OptiCore Holdings Can Provide Practical Solutions To All Your Infestation Problems
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "We will assess your requirements and offer the best value on most flexible range of fumigation and pest control treatments.",
                    "Contractual Pest Control Services and Once Off Pest Control Services are available",
                    "Discuss the issue and provide a free quote and schedule a free inspection.",
                    "Our expert Pest Control specialist will be out to service your property when it suits you."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-ink-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-ink-600 text-[15px] leading-relaxed">
                  OptiCore Holdings has the expertise to provide the correct diagnosis and deliver the most effective treatment for all your Pest Control Solution requirements.
                </p>
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-xl sm:h-[350px]">
                <Image
                  src={inspectionImg}
                  alt="Specialist in protective equipment conducting an inspection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:order-1">
                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Pest Control Services Provided By OptiCore Holdings:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Rodent Control: Rats, mice, and Moles",
                    "Insect Control: Ants, Fly's, Mosquitos, Termites, Bed bugs and much more",
                    "Bird Control",
                    "Snake and Gecko Control",
                    "Cockroach Control"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                      <span className="text-brand-600 font-semibold text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-xl sm:h-[350px] lg:order-2">
                <Image
                  src={technicianImg}
                  alt="Technician in protective gear treating a facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
                    Pest Control Services
                  </div>
                  <div className="divide-y divide-ink-100 text-center font-medium text-ink-700">
                    {[
                      "Insect Control",
                      "Rodent Control",
                      "Bird Control",
                      "Snake and Gecko Control",
                      "Cockroach Control"
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
                        <p>Sat-Sun: Closed</p>
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
                  Pest Control Services For Your Business Needs
                </h2>
                <div className="space-y-5 text-ink-600 text-[15px] leading-relaxed mb-12">
                  <p>
                    Running a business can be complicated and managing pest control can often be an afterthought. However, controlling pests is crucial to maintaining and delivering a properly sanitized environment. That is why you need a professional pest control company to come in and do the job for you!
                  </p>
                  <p>
                    No business owner wants to deal with pests in their property. Not only are infestations inconvenient, certain insects carry harmful diseases and some pests can cause structural damage. OptiCore Holdings has an experienced team of technicians who are trained to use the safest, most effective pest control methods that will keep you, your business, and your employees safe from pests.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-ink-900 mb-6">
                  How Does OptiCore Pest Control Services Work?
                </h3>
                <div className="space-y-5 text-ink-600 text-[15px] leading-relaxed mb-12">
                  <p>
                    OptiCore Holdings practices an integrated pest control management approach, which is a comprehensive method of dealing with pest outbreaks by combining a common-sense approach with professional pest control care.
                  </p>
                  <p>
                    Pest Control Solution specialists assess the problem and thoroughly checks your property for pest entry points or evidence of activity. Custom pest control maintenance programs based on the specialist&apos;s findings are created for each client.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-ink-900 mb-6">
                  The Four Components Of OptiCore&apos;s Pest Control Programs Are:
                </h3>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Set action pest thresholds:</strong> OptiCore&apos;s pest control professionals evaluate your location for environmental conditions that attract pests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Monitor and identify pests:</strong> Once our pest control professional is familiar with the environmental conditions surrounding you, we start scanning your property for evidence of pest activity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Pest prevention:</strong> we work with you to establish practical ways to deter pests through simple methods like proper sanitation, exclusion, and mechanical trapping devices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Pest control methods:</strong> If your pest situation cannot be resolved with practical techniques, we work with you to create a custom pest control plan that suits your need
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-ink-900 mb-6">
                  Pest Control Prices
                </h3>
                <p className="text-ink-600 text-[15px] leading-relaxed mb-6">
                  The cost of your pest control plan depends on a few factors:
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Property size:</strong> Larger properties typically take longer to treat than smaller ones.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Type of property:</strong> Commercial properties often require different methods of pest control than residential properties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Type of infestation:</strong> Some pests require more intensive treatments.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-600 text-[15px]">
                      <strong>Size of infestation:</strong> Larger infestations require treating more areas
                    </span>
                  </li>
                </ul>

                <Link href="/contact" className="btn btn-primary px-8 py-4 inline-flex">
                  GET SERVICE NOW <FaChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <OtherServicesSection currentSlug="pest-control" />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OtherServicesSection from "@/components/OtherServicesSection";
import cleaningHero from "../../../../public/Services Heros/commercial and residential cleaning hero.webp";
import windowWash from "../../../../public/cleaning_service_window_wash.jpeg";
import facilityCleaning from "../../../../public/sanitizing_and_defecting_service_gun_2.jpeg";

export const metadata: Metadata = {
  title: "Commercial & Residential Cleaning | OptiCore Holdings",
  description:
    "Professional cleaning services for homes, offices, and commercial properties across South Africa. Deep cleaning, move-in/move-out, post-construction and more.",
};

export default function CleaningPage() {

  return (
    <>
      <PageHero
        eyebrow="Cleaning Services Gauteng > Commercial Cleaning Services"
        title="Commercial Cleaning Services"
        description="Scalable cleaning operations for homes, offices, and commercial properties, executed by trained teams to an uncompromising standard."
        image={cleaningHero}
        imageAlt="Professional cleaning team on site"
      />

      <div className="bg-white">
        {/* Section 1: Best Corporate and Commercial Cleaning */}
        <section className="container-page py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading 
                eyebrow="Our Commercial Cleaning Services" 
                title="Best Corporate and Commercial Cleaning" 
              />
              <h3 className="text-lg font-bold text-ink-900 mb-4">
                Professional Commercial Cleaning and Sanitizing Services you can Trust!
              </h3>
              <p className="text-ink-600 text-[15px] leading-relaxed mb-8">
                Contract cleaning services are tailored to your specific requirements and include the provision of cleaning personnel, equipment and consumables. At OptiCore Holdings we know that cleanliness and hygiene are vital to your business. First impressions count, and that's why a clean environment (whether it is a shop floor, a reception area or a meeting room) gives a positive message to your customers, enables your staff to perform efficiently and safely, and helps to maintain a more healthy workspace. Our commercial cleaning services are offered to different types of commercial premises:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Medical Facility Cleaning",
                  "Office Cleaning",
                  "Office Park Cleaning",
                  "Industrial Cleaning",
                  "Schools and University Cleaning",
                  "Building Cleaning",
                  "Retail Cleaning",
                  "Mall and Shopping Center Cleaning",
                  "Warehouse Cleaning",
                  "Factory Cleaning",
                  "Complex and Estate Cleaning",
                  "Retirement Estate Cleaning"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[15px] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="relative h-[320px] overflow-hidden rounded-xl shadow-lg sm:h-[440px]">
                <Image
                  src={windowWash}
                  alt="OptiCore cleaning team washing office windows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="rounded-xl bg-sage-wash border border-ink-100 p-8">
                <p className="text-[15px] leading-relaxed text-ink-600">
                  From routine office maintenance to intense residential deep
                  cleaning, our dedicated teams use advanced techniques and
                  eco-friendly products to ensure your space is not just clean,
                  but truly pristine. We focus on the details that make an
                  environment healthy and welcoming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Commercial Cleaning Packages */}
        <section className="bg-sage-wash py-16 sm:py-24 border-t border-ink-100">
          <div className="container-page">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              {/* Left Column */}
              <div>
                <SectionHeading 
                  eyebrow="Our Commercial Cleaning Packages:" 
                  title="Commercial Cleaning Packages:" 
                />
                <div className="space-y-4 text-ink-600 text-[14px] leading-relaxed mb-10">
                  <p>
                    There are only a few companies that offer commercial cleaning packages due to profit margins, but we believe that with over 15 years' experience in the Commercial Cleaning Industry and a responsibility as a South African based Cleaning Company that this is no time to think about profits, we believe that package pricing gives value to our commercial customers, especially in the times we are in today.
                  </p>
                  <p>
                    OptiCore Holdings is a major commercial cleaning contract specialist in South Africa, as one of the best in the cleaning sector of the top companies in the country. OptiCore Holdings is well positioned to give specialized commercial cleaning services in Gauteng, with over a decade of experience and properly trained workers.
                  </p>
                  <p>
                    OptiCore Holdings has a long history of providing services to a diverse range of industries, including commercial, retail, hotel, education, healthcare and industrial.
                  </p>
                  <p>
                    We do not tie our customers into long-term commercial cleaning contracts! Our commercial cleaning packages are flexible and if a client wishes to cancel, they may do so with a one-month notice period.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-ink-900 mb-4">
                  Our Affordable Cleaning Packages:
                </h3>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Please contact us today to see which cleaning package will suit you best.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">We always Reward our clients: <strong>More Cleaning – More Value for Money</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">You can get any of these added services as long as you have been using one of our Commercial Cleaning Services for 6 to 12 Months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 shrink-0 mt-0.5" style={{ fill: "url(#brand-gradient)" }} />
                    <span className="text-ink-700 text-[14px]">Terms and Conditions Apply</span>
                  </li>
                </ul>

                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={facilityCleaning}
                    alt="Commercial facility being cleaned and treated"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column (Table/Grid) */}
              <div className="bg-white shadow-sm border border-ink-200 flex flex-col rounded-sm">
                <div className="bg-brand-600 text-white p-5 text-center leading-relaxed">
                  <p className="font-bold text-sm">
                    Added Services Provided by OptiCore Holdings when taking<br />
                    Commercial Cleaning Services any of our Daily Cleaning Services (Free of Charge – Adding Value)
                  </p>
                </div>

                <div className="divide-y divide-ink-200 flex-1">
                  {[
                    {
                      title: "Office Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months"
                      ]
                    },
                    {
                      title: "Industrial Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months",
                        "Deep Cleaning of Ablutions every 3 months"
                      ]
                    },
                    {
                      title: "Retail Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months"
                      ]
                    },
                    {
                      title: "Mall and Shopping Centre Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months"
                      ]
                    },
                    {
                      title: "Factory Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months",
                        "Deep Cleaning of Ablutions every 3 months"
                      ]
                    },
                    {
                      title: "Warehouse Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months"
                      ]
                    },
                    {
                      title: "Medical Facility Cleaning Services",
                      items: [
                        "Carpet cleaning every 6 months",
                        "Office Chair Cleaning every 6 months",
                        "Disinfecting Fogging 1 x monthly",
                        "Window Cleaning every 6 Months"
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
        
        <OtherServicesSection currentSlug="cleaning" />
      </div>
    </>
  );
}

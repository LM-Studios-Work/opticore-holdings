import ServiceCard from "@/components/ServiceCard";
import { serviceCategories } from "@/lib/site-data";

interface OtherServicesSectionProps {
  /** Slug of the current service page — this one will be excluded from the cards. */
  currentSlug: string;
}

export default function OtherServicesSection({ currentSlug }: OtherServicesSectionProps) {
  const others = serviceCategories.filter((s) => s.slug !== currentSlug);

  return (
    <section className="container-page py-16 sm:py-24 border-t border-ink-100">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Explore Our Other Services
        </h2>
        <p className="mt-4 text-ink-500">
          Discover how OptiCore Holdings can provide a complete facility management solution.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {others.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import PlaceholderImage from "./PlaceholderImage";
import { iconMap } from "@/lib/icon-map";
import type { ServiceCategory } from "@/lib/site-data";

export default function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = iconMap[service.icon];
  
  const targetHref = service.slug === 'medical-supplies' 
    ? '/medical-supplies' 
    : `/services/${service.slug}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-ink-200 bg-white shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md">
      <div className="p-2">
        <PlaceholderImage label={service.title} icon={Icon} aspect="aspect-[16/10]" className="rounded-sm" />
      </div>
      <div className="flex flex-1 flex-col p-6 pt-3">
        <h3 className="font-display text-lg font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {service.shortDescription}
        </p>
        <Link
          href={targetHref}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5"
        >
          Learn more
          <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

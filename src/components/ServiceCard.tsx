import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { iconMap } from "@/lib/icon-map";
import type { ServiceCategory } from "@/lib/site-data";

export default function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <PlaceholderImage label={service.title} icon={Icon} aspect="aspect-[16/10]" className="rounded-none" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-ink-500">
          {service.shortDescription}
        </p>
        <Link
          href={`/services#${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";
import { type LucideIcon } from "lucide-react";

export type Product = {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  image?: StaticImageData | string;
};

export default function ProductCard({
  product,
  onQuote,
}: {
  product: Product;
  onQuote: (product: Product) => void;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_8px_32px_-12px_rgba(9,60,58,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(9,60,58,0.28)]">
      {/* Image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-brand-gradient">
            <product.icon className="h-12 w-12 text-white/80" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow mb-2 text-[0.65rem]">{product.category}</p>
        <h3 className="font-display text-base font-semibold leading-snug text-ink-900">
          {product.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {product.description}
        </p>

        <button
          type="button"
          onClick={() => onQuote(product)}
          className="btn btn-primary mt-5 w-full py-2.5 text-sm"
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
}

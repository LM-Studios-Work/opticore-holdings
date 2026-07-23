"use client";

import Image, { type StaticImageData } from "next/image";
import { type LucideIcon } from "lucide-react";

export type Product = {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  image?: StaticImageData | string;
};

const DESCRIPTION_CHAR_LIMIT = 100;

export default function ProductCard({
  product,
  onQuote,
}: {
  product: Product;
  onQuote: (product: Product) => void;
}) {
  const isTruncated = product.description.length > DESCRIPTION_CHAR_LIMIT;
  const shortDescription = isTruncated
    ? product.description.slice(0, DESCRIPTION_CHAR_LIMIT).trimEnd() + "…"
    : product.description;

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
          <div className="flex h-full w-full items-center justify-center bg-ink-100">
            <span className="text-xs font-medium uppercase tracking-widest text-ink-400">
              Placeholder Image
            </span>
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
          {shortDescription}
        </p>

        <div className="mt-5 flex gap-2">
          {isTruncated && (
            <button
              type="button"
              onClick={() => onQuote(product)}
              className="flex-1 rounded-xl border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 focus:outline-none"
            >
              View Full Product
            </button>
          )}
          <button
            type="button"
            onClick={() => onQuote(product)}
            className={`btn btn-primary py-2.5 text-sm ${isTruncated ? "" : "flex-1"}`}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

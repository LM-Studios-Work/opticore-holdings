"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import ProductCard, { type Product } from "./ProductCard";
import RequestQuoteModal from "./RequestQuoteModal";
import { medicalCatalog } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";

const products: Product[] = medicalCatalog.map((p) => ({
  ...p,
  icon: iconMap[p.icon] ?? iconMap["ShieldCheck"],
}));

export default function MedicalProductsGrid() {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        {/* Search bar */}
        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search medical products"
              className="w-full rounded-full border border-ink-200 bg-white py-3 pl-11 pr-11 text-sm text-ink-900 placeholder:text-ink-400 shadow-[0_4px_16px_-8px_rgba(9,60,58,0.15)] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 transition-shadow"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {query && (
            <p className="mt-3 text-center text-xs text-ink-400">
              {filtered.length === 0
                ? "No products match your search."
                : `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`}
            </p>
          )}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                onQuote={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-24 text-center">
            <Search className="h-10 w-10 text-ink-300" />
            <p className="font-display text-lg font-semibold text-ink-700">
              No products found
            </p>
            <p className="text-sm text-ink-400">
              Try a different search term or{" "}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="font-semibold text-brand-600 hover:underline"
              >
                clear the search
              </button>
              .
            </p>
          </div>
        )}
      </section>

      {/* Quote Modal */}
      <RequestQuoteModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

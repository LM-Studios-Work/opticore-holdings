"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import {
  ShieldCheck,
  Hand,
  Cross,
  Droplet,
  Syringe,
  FlaskConical,
  HeartPulse,
  Package,
} from "lucide-react";
import ProductCard, { type Product } from "./ProductCard";
import RequestQuoteModal from "./RequestQuoteModal";

const products: Product[] = [
  {
    title: "PPE Equipment",
    category: "Personal Protective Equipment",
    description:
      "Gowns, coveralls, and face shields for maximum workplace protection in medical and industrial settings.",
    icon: ShieldCheck,
  },
  {
    title: "Gloves",
    category: "Protective Wear",
    description:
      "Nitrile, latex, and vinyl options for medical examinations, clinical procedures, and industrial applications.",
    icon: Hand,
  },
  {
    title: "Masks",
    category: "Respiratory Protection",
    description:
      "Surgical and N95/FFP2 respirators built for strict compliance and reliable filtration.",
    icon: Cross,
  },
  {
    title: "Sanitiser",
    category: "Hygiene Products",
    description:
      "Hand and surface sanitisers available from personal-issue bottles to bulk commercial dispensers.",
    icon: Droplet,
  },
  {
    title: "Medical Consumables",
    category: "Clinical Supplies",
    description:
      "Swabs, dressings, syringes, and daily-use essentials for busy healthcare practices.",
    icon: Syringe,
  },
  {
    title: "Cleaning Chemicals",
    category: "Disinfection & Cleaning",
    description:
      "Commercial-grade disinfectants, heavy-duty detergents, and specialist cleaning agents.",
    icon: FlaskConical,
  },
  {
    title: "First Aid Supplies",
    category: "Emergency & Safety",
    description:
      "Fully stocked first aid kits and rapid-refill supplies for offices, construction sites, and vehicle fleets.",
    icon: HeartPulse,
  },
  {
    title: "Bulk Orders",
    category: "Wholesale Supply",
    description:
      "High-volume procurement for healthcare facilities, corporate groups, and government tenders.",
    icon: Package,
  },
];

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

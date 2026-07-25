"use client";

import { useState, useMemo } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import ProductCard, { type Product } from "./ProductCard";
import RequestQuoteModal from "./RequestQuoteModal";
import { medicalCatalog } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";

const products: Product[] = medicalCatalog.map((p) => ({
  ...p,
  icon: iconMap[p.icon] ?? iconMap["ShieldCheck"],
}));

const categories = ["All Categories", ...Array.from(new Set(products.map((p) => p.category)))];

export default function MedicalProductsGrid() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All Categories") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.code && p.code.toLowerCase().includes(q))
      );
    }

    if (sortBy === "a-z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [query, selectedCategory, sortBy]);

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <FaMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search medical products"
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-11 text-sm text-ink-900 placeholder:text-ink-400 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 transition-shadow"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 transition-colors"
                >
                  <FaXmark className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex gap-4 max-sm:flex-col">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-xl border border-ink-200 bg-white py-3 pl-4 pr-10 text-sm text-ink-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 max-sm:w-full"
                aria-label="Filter by category"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-ink-200 bg-white py-3 pl-4 pr-10 text-sm text-ink-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 max-sm:w-full"
                aria-label="Sort products"
              >
                <option value="default">Default Sort</option>
                <option value="a-z">A-Z</option>
              </select>
            </div>
          </div>
          {(query || selectedCategory !== "All Categories") && (
            <p className="mt-3 text-center text-xs text-ink-400 md:text-left">
              {filtered.length === 0
                ? "No products match your search criteria."
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
            <FaMagnifyingGlass className="h-10 w-10 text-ink-300" />
            <p className="font-display text-lg font-semibold text-ink-700">
              No products found
            </p>
            <p className="text-sm text-ink-400">
              Try a different search term or category, or{" "}
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("All Categories");
                  setSortBy("default");
                }}
                className="font-semibold text-brand-600 hover:underline"
              >
                clear the filters
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

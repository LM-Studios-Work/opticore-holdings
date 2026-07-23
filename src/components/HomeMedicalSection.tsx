"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import RequestQuoteModal from "@/components/RequestQuoteModal";
import { medicalCatalog } from "@/lib/site-data";
import { iconMap } from "@/lib/icon-map";
import { type Product } from "@/components/ProductCard";

const PREVIEW_COUNT = 4;

const products: Product[] = medicalCatalog.map((p) => ({
  ...p,
  icon: iconMap[p.icon] ?? iconMap["ShieldCheck"],
}));

export default function HomeMedicalSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title="High-Demand Medical Supplies"
          description="Reliable stock and fast delivery across South Africa. Order in bulk and save."
          center
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, PREVIEW_COUNT).map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              onQuote={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/medical-supplies" className="btn btn-primary px-6 py-3">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <RequestQuoteModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

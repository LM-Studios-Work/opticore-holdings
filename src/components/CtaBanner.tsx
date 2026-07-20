import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function CtaBanner() {
  return (
    <section className="bg-brand-700">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Request a Free Quote Today!
          </h2>
          <p className="mt-2 max-w-xl text-brand-100">
            Tell us what you need and we&apos;ll get back to you with a
            no-obligation quote, usually within one business day.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/quote"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            Get My Free Quote
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function CtaBanner() {
  return (
    <section className="container-page py-14 sm:py-16">
      <div className="bg-brand-gradient relative overflow-hidden rounded-[2rem] px-7 py-12 sm:px-12 sm:py-14">
        <div
          className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white text-balance sm:text-3xl">
              Request a Free Quote Today!
            </h2>
            <p className="mt-2 max-w-xl text-brand-50/90">
              Tell us what you need and we&apos;ll get back to you with a
              no-obligation quote, usually within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="btn bg-white text-teal-700 hover:bg-brand-50"
            >
              Get My Free Quote
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost-light">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

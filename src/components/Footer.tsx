import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { navLinks, serviceCategories, siteConfig, socialLinks } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-teal-900 bg-teal-900 text-teal-100">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <Logo dark />

          <p className="mt-4 max-w-xs text-sm text-teal-200">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-600 text-teal-200 transition-colors hover:border-brand-400 hover:bg-brand-500 hover:text-white"
              >
                <span className="text-[10px] font-semibold">
                  {social.name.slice(0, 2).toUpperCase()}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-400">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="hover:text-brand-400">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceCategories.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="hover:text-brand-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-500" />
              <a href={siteConfig.phoneHref} className="hover:text-brand-400">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-400">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-800">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-teal-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-brand-400">
              Terms &amp; Conditions
            </Link>
            <Link href="/popia-compliance" className="hover:text-brand-400">
              POPIA Compliance
            </Link>
            <Link href="/cookie-policy" className="hover:text-brand-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

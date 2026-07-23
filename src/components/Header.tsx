"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-ink-100 bg-ink-50/70 p-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-ink-600 hover:text-teal-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link href="/quote" className="btn btn-primary">
            Request a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-3 py-2.5 text-sm font-medium ${
                    active
                      ? "bg-brand-50 text-teal-700"
                      : "text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Request a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

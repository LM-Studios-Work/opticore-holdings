"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark, FaPhoneVolume, FaChevronDown } from "react-icons/fa6";
import Logo from "./Logo";
import { navLinks, siteConfig, serviceCategories } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceHref = (slug: string) =>
    slug === "medical-supplies" ? "/medical-supplies" : `/services/${slug}`;
  const isServiceHrefActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const isServicesActive =
    pathname.startsWith("/services") ||
    serviceCategories.some((s) => isServiceHrefActive(serviceHref(s.slug)));

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  // Click outside handler for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between lg:h-20 gap-2 xl:gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 xl:gap-1 rounded-full border border-ink-100 bg-ink-50/70 p-1 lg:flex relative shrink-0">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              
              if (link.name === "Our Services") {
                return (
                  <div key={link.href} className="relative group" ref={dropdownRef}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs xl:px-3 xl:py-2 xl:text-[13px] 2xl:px-4 2xl:py-2 2xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                        active || isServicesActive
                          ? "bg-white text-teal-700 shadow-sm"
                          : "text-ink-600 hover:text-teal-700"
                      }`}
                    >
                      {link.name}
                      <FaChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 shrink-0" />
                    </Link>
                    
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full right-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="rounded-xl bg-white p-2 shadow-xl ring-1 ring-ink-100">
                        <div className="flex flex-col">
                          <Link
                            href="/services"
                            className="rounded-lg px-3 py-2 text-[14px] font-bold text-ink-900 hover:bg-ink-50 hover:text-brand-600 transition-colors"
                          >
                            View All Services
                          </Link>
                          <div className="h-px bg-ink-100 my-1 mx-2" />
                          {serviceCategories.map((service) => {
                            const href = serviceHref(service.slug);
                            return (
                              <Link
                                key={service.slug}
                                href={href}
                                aria-current={isServiceHrefActive(href) ? "page" : undefined}
                                className={`block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                                  isServiceHrefActive(href)
                                    ? "bg-brand-50 text-brand-700"
                                    : "text-ink-700 hover:bg-ink-50 hover:text-brand-600"
                                }`}
                              >
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-2.5 py-1.5 text-xs xl:px-3.5 xl:py-2 xl:text-[13px] 2xl:px-4 2xl:py-2 2xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
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

          <div className="hidden items-center gap-2 xl:gap-4 lg:flex shrink-0">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-medium text-ink-700 hover:text-brand-600 whitespace-nowrap shrink-0"
            >
              <FaPhoneVolume className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0" />
              {siteConfig.phone}
            </a>
            <Link href="/quote" className="btn btn-primary px-3.5 py-2 text-xs xl:px-4.5 xl:py-2.5 xl:text-sm 2xl:px-6 2xl:py-2.5 2xl:text-sm whitespace-nowrap shrink-0">
              Request a Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-[60] bg-ink-900/40 backdrop-blur-sm lg:hidden transition-opacity" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar (Slide from Right) */}
      <div 
        className={`fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-ink-100">
          <Link href="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-500 hover:bg-ink-50 hover:text-ink-700 transition-colors"
            onClick={() => setOpen(false)}
          >
            <FaXmark className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 bg-white">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.name === "Our Services" && isServicesActive);
              
              if (link.name === "Our Services") {
                return (
                  <div key={link.href} className="flex flex-col gap-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors border border-transparent ${
                        active || servicesOpen
                          ? "bg-brand-50 text-brand-700 border-brand-100"
                          : "text-ink-800 hover:bg-sage-wash hover:border-ink-200"
                      }`}
                    >
                      {link.name}
                      <FaChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180 text-brand-600' : 'text-ink-400'}`} />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col gap-2 pl-4 pr-1 py-1 border-l-2 border-ink-100 ml-5">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-4 py-2.5 text-[14px] font-bold text-ink-900 hover:bg-ink-50 hover:text-brand-600 transition-colors"
                        >
                          View All Services
                        </Link>
                        {serviceCategories.map((service) => {
                          const href = serviceHref(service.slug);
                          return (
                            <Link
                              key={service.slug}
                              href={href}
                              onClick={() => setOpen(false)}
                              aria-current={isServiceHrefActive(href) ? "page" : undefined}
                              className={`block rounded-lg px-4 py-2.5 text-[14px] font-medium transition-colors ${
                                isServiceHrefActive(href)
                                  ? "bg-brand-50 text-brand-700"
                                  : "text-ink-700 hover:bg-sage-wash hover:text-brand-700"
                              }`}
                            >
                              {service.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors border border-transparent ${
                    active
                      ? "bg-brand-50 text-brand-700 border-brand-100"
                      : "text-ink-800 hover:bg-sage-wash hover:border-ink-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-ink-100 bg-sage-wash">
          <div className="flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-bold text-ink-800 bg-white border border-ink-200 hover:border-brand-300 hover:text-brand-700 transition-all shadow-sm"
            >
              <FaPhoneVolume className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full shadow-md py-3.5 text-[15px]"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

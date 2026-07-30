import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/lib/site-data";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Cleaning, Hygiene, Pest Control & Medical Supplies`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // Method 1: Google site verification via meta tag (injected into <head> automatically)
  verification: {
    google: "googlee36ab0c5785b7c35",
  },
  icons: {
    icon: "/logo/favicon.png",
    apple: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
  },
  openGraph: {
    title: `${siteConfig.name} | Cleaning, Hygiene, Pest Control & Medical Supplies`,
    description: siteConfig.description,
    images: [{ url: "/logo.png", width: 800, height: 600 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Cleaning, Hygiene, Pest Control & Medical Supplies`,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink-900">
        <svg width="0" height="0" className="absolute opacity-0 pointer-events-none w-0 h-0">
          <defs>
            <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-teal-700)" />
              <stop offset="60%" stopColor="var(--color-brand-600)" />
              <stop offset="100%" stopColor="var(--color-brand-500)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Method 2: Google Analytics GA4 via gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0FH55V6JYY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0FH55V6JYY');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

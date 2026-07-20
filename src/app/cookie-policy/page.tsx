import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="20 July 2026">
      <p>
        This Cookie Policy explains how {siteConfig.name} uses cookies and
        similar technologies on our website.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device that help
        websites function properly and understand how visitors use them.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>Essential cookies required for the website to function correctly</li>
        <li>Analytics cookies to help us understand website usage and improve our content</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their
        settings. You can choose to block or delete cookies, though this
        may affect how the website functions.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, contact us at{" "}
        {siteConfig.email}.
      </p>
    </LegalPage>
  );
}

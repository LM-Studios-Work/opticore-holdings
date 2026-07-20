import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="20 July 2026">
      <p>
        {siteConfig.legalName} (&quot;OptiCore Holdings&quot;, &quot;we&quot;,
        &quot;us&quot;) respects your privacy and is committed to protecting
        the personal information you share with us. This Privacy Policy
        explains what information we collect, how we use it, and the choices
        you have.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details you provide, such as your name, company, phone number and email address</li>
        <li>Details about the services you request, including property type and preferred dates</li>
        <li>Information you submit through our contact and quote request forms</li>
        <li>Basic technical information collected automatically when you visit our website (see our Cookie Policy)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to enquiries and provide quotes</li>
        <li>To deliver the services you have requested</li>
        <li>To communicate with you about your bookings or account</li>
        <li>To improve our website and services</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share information
        with trusted service providers who help us operate our business
        (for example, scheduling or payment processing), and only to the
        extent necessary to provide our services.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect
        your personal information against loss, misuse or unauthorised
        access.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your
        personal information at any time by contacting us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-600 underline">
          {siteConfig.email}
        </a>
        .
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        {siteConfig.email} or {siteConfig.phone}.
      </p>
    </LegalPage>
  );
}

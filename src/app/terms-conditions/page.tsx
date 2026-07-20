import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="20 July 2026">
      <p>
        These Terms &amp; Conditions govern your use of the{" "}
        {siteConfig.name} website and the services provided by{" "}
        {siteConfig.legalName}. By using our website or engaging our
        services, you agree to these terms.
      </p>

      <h2>Quotes & Bookings</h2>
      <p>
        Quotes provided through our website, by phone or via email are
        estimates based on the information supplied and may be subject to
        change following a site visit or inspection. Bookings are confirmed
        once agreed between OptiCore Holdings and the client.
      </p>

      <h2>Service Delivery</h2>
      <p>
        We aim to deliver all services professionally and within the agreed
        timeframes. Access to the property, availability of utilities (such
        as water and electricity), and accurate information about the site
        are the client&apos;s responsibility and may affect service delivery.
      </p>

      <h2>Payment</h2>
      <p>
        Payment terms will be communicated at the time of quoting or
        invoicing. Late payment may result in a delay or suspension of
        ongoing services.
      </p>

      <h2>Cancellations</h2>
      <p>
        We appreciate as much notice as possible if you need to cancel or
        reschedule a booking. Late cancellations may be subject to a
        call-out fee.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        While we take great care in delivering our services, OptiCore
        Holdings will not be held liable for pre-existing damage or issues
        beyond our reasonable control.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the Republic of South
        Africa.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions regarding these Terms &amp; Conditions, contact us
        at {siteConfig.email} or {siteConfig.phone}.
      </p>
    </LegalPage>
  );
}

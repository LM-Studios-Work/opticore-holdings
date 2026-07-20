import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "POPIA Compliance",
};

export default function PopiaPage() {
  return (
    <LegalPage title="POPIA Compliance" updated="20 July 2026">
      <p>
        {siteConfig.legalName} is committed to complying with the Protection
        of Personal Information Act 4 of 2013 (&quot;POPIA&quot;) in the way
        we collect, use, store and dispose of personal information.
      </p>

      <h2>Lawful Processing</h2>
      <p>
        We only collect personal information for specific, clearly defined
        purposes — such as responding to enquiries, providing quotes, and
        delivering our services — and only to the extent necessary for
        those purposes.
      </p>

      <h2>Consent & Notification</h2>
      <p>
        Where required, we obtain your consent before collecting or
        processing personal information, and we inform you of the purpose
        for which it is being collected.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to
        fulfil the purpose it was collected for, or as required by law.
      </p>

      <h2>Your Rights Under POPIA</h2>
      <ul>
        <li>The right to be informed about how your information is used</li>
        <li>The right to access the personal information we hold about you</li>
        <li>The right to request correction or deletion of your information</li>
        <li>The right to object to the processing of your information</li>
      </ul>

      <h2>Information Officer</h2>
      <p>
        Requests relating to your personal information under POPIA can be
        directed to our Information Officer at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-600 underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}

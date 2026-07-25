import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POPIA Compliance | OptiCore Holdings",
  description: "POPIA Compliance for OptiCore Holdings.",
};

export default function POPIACompliancePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 mb-8">
          POPIA Compliance
        </h1>
        <div className="prose prose-teal max-w-none text-ink-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            OptiCore Holdings is fully committed to compliance with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <h2>Data Processing</h2>
          <p>
            We process personal information in a lawful and reasonable manner that does not infringe the privacy of the data subject.
          </p>
          <h2>Security Safeguards</h2>
          <p>
            We have implemented appropriate technical and organizational measures to ensure the integrity and confidentiality of personal information in our possession or under our control.
          </p>
          <h2>Data Subject Rights</h2>
          <p>
            You have the right to request access to, correction, or deletion of your personal information held by us.
          </p>
        </div>
      </div>
    </div>
  );
}

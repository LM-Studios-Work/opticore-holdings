import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | OptiCore Holdings",
  description: "Terms & Conditions for OptiCore Holdings.",
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 mb-8">
          Terms & Conditions
        </h1>
        <div className="prose prose-teal max-w-none text-ink-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to OptiCore Holdings. By accessing this website, we assume you accept these terms and conditions. Do not continue to use OptiCore Holdings if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2>License</h2>
          <p>
            Unless otherwise stated, OptiCore Holdings and/or its licensors own the intellectual property rights for all material on OptiCore Holdings. All intellectual property rights are reserved.
          </p>
          <h2>Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

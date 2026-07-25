import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OptiCore Holdings",
  description: "Privacy Policy for OptiCore Holdings.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-teal max-w-none text-ink-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            OptiCore Holdings ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by OptiCore Holdings.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul>
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
          </ul>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

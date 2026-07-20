import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.name}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
      </a>
    </div>
  );
}

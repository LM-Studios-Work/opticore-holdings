import { Quote } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_24px_48px_-32px_rgba(9,60,58,0.35)]">
      <Quote className="h-7 w-7 text-brand-400" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
        <div className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{name}</p>
          <p className="text-xs text-ink-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

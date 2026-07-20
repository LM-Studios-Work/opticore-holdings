import { CheckCircle2 } from "lucide-react";

export default function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3.5 rounded-xl border border-ink-100 bg-white p-5">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
      <div>
        <h3 className="font-display text-base font-semibold text-ink-900">
          {title}
        </h3>
        <p className="mt-1 text-sm text-ink-500">{description}</p>
      </div>
    </div>
  );
}

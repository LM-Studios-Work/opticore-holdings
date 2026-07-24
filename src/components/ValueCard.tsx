import { FaCircleCheck } from "react-icons/fa6";

export default function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3.5 rounded-2xl border border-ink-100 bg-white p-5 transition-shadow hover:shadow-[0_20px_40px_-30px_rgba(9,60,58,0.4)]">
      <span className="flex shrink-0 items-center justify-center mt-0.5">
        <FaCircleCheck className="h-5 w-5" style={{ fill: "url(#brand-gradient)" }} />
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-ink-900">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </div>
  );
}

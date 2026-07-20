import { ShieldCheck } from "lucide-react";

export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
        <ShieldCheck className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-base font-semibold sm:text-lg ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          OptiCore
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-brand-500 sm:text-xs">
          Holdings
        </span>
      </span>
    </span>
  );
}

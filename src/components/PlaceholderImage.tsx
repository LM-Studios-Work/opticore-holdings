import { ImageIcon, type LucideIcon } from "lucide-react";

type Tone = "brand" | "dark" | "light";

const toneClasses: Record<Tone, string> = {
  brand:
    "from-brand-600 via-brand-500 to-brand-700 text-white",
  dark: "from-ink-800 via-ink-900 to-ink-950 text-white",
  light: "from-ink-100 via-ink-50 to-white text-ink-500",
};

export default function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  tone = "brand",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  icon?: LucideIcon;
  tone?: Tone;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-xl bg-gradient-to-br ${toneClasses[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <Icon className="h-10 w-10 opacity-90" strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-wide opacity-90 sm:text-sm">
          {label}
        </span>
      </div>
      <span className="absolute bottom-2 right-2 rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm">
        Placeholder
      </span>
    </div>
  );
}

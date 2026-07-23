import { ImageIcon, type LucideIcon } from "lucide-react";

type Tone = "brand" | "dark" | "light";

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-gradient text-white",
  dark: "bg-teal-800 text-white",
  light: "bg-brand-50 text-teal-700",
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
      className={`relative w-full ${aspect} overflow-hidden ${toneClasses[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <Icon className="h-10 w-10 opacity-90" strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-wide opacity-90 sm:text-sm">
          {label}
        </span>
      </div>
      <span className="absolute bottom-2 right-2 bg-black/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm">
        Placeholder
      </span>
    </div>
  );
}

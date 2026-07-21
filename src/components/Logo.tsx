export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="OptiCore Holdings"
        className={`h-11 sm:h-12 lg:h-14 w-auto object-contain max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] ${
          dark ? "bg-white/95 p-1.5 rounded-md shadow-sm" : ""
        }`}
      />
    </span>
  );
}

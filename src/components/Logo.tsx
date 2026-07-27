export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/logo-header.png"
        alt="OptiCore Holdings"
        className={`h-[3.25rem] sm:h-14 lg:h-[3.75rem] xl:h-16 2xl:h-[4.5rem] w-auto object-contain max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[380px] 2xl:max-w-[480px] shrink-0 ${
          dark ? "bg-white/95 p-1.5 rounded-md shadow-sm" : ""
        }`}
      />
    </span>
  );
}

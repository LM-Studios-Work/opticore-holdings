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
        src="/logo.png"
        alt="OptiCore Holdings"
        className={`h-9 sm:h-10 lg:h-10 xl:h-11 2xl:h-14 w-auto object-contain max-w-[180px] sm:max-w-[220px] lg:max-w-[220px] xl:max-w-[270px] 2xl:max-w-[360px] shrink-0 ${
          dark ? "bg-white/95 p-1.5 rounded-md shadow-sm" : ""
        }`}
      />
    </span>
  );
}

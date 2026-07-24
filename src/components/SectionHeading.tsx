export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl mb-6 ${center ? "mx-auto flex flex-col items-center text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-4 mb-4 ${center ? "justify-center" : ""}`}>
          {!center && <div className="h-[2px] w-8 bg-brand-500 shrink-0"></div>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}

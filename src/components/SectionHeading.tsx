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
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900 text-balance sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink-500 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}

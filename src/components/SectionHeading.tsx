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
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-ink-500">{description}</p>
      )}
    </div>
  );
}

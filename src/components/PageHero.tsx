export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 py-16 text-white sm:py-20">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-300) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-page relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-ink-200 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

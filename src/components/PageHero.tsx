import Image, { StaticImageData } from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-800 py-16 text-white sm:py-20 lg:py-28">
      {/* Background: real photo when provided, grid pattern otherwise */}
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-brand-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-300) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      )}

      {/* Dark overlay — stronger when photo is present */}
      <div
        className={`absolute inset-0 ${
          image
            ? "bg-gradient-to-r from-teal-950/85 via-teal-900/60 to-teal-900/30"
            : "bg-transparent"
        }`}
      />

      {/* Ambient blob (only shown without photo) */}
      {!image && (
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--color-brand-500)" }}
        />
      )}

      <div className="container-page relative">
        {eyebrow && <p className="eyebrow text-brand-300">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-teal-100 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

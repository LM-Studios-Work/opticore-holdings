export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page max-w-3xl py-16 sm:py-20">
      <h1 className="font-display text-3xl font-bold text-ink-900">{title}</h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: {updated}</p>
      <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink-600 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink-900 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
      <p className="mt-10 rounded-3xl border border-ink-100 bg-brand-50 px-6 py-5 text-xs leading-relaxed text-teal-700">
        This is a template document provided for general guidance and should
        be reviewed by a qualified legal professional before publication to
        ensure full compliance with applicable South African law.
      </p>
    </section>
  );
}

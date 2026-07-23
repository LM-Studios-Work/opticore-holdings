export default function FormField({
  label,
  htmlFor,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-ink-700"
      >
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

export const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

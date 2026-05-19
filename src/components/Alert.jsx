export default function Alert({ type = "info", children, className = "" }) {
  const types = {
    info: "bg-sky-50 text-sky-700 border-sky-100",
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    danger: "bg-rose-50 text-rose-700 border-rose-100",
  };

  return (
    <div className={`rounded-3xl border px-5 py-4 text-sm font-medium ${types[type] || types.info} ${className}`}>
      {children}
    </div>
  );
}

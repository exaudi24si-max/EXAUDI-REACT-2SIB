export default function Badge({ children, type = "primary", className = "" }) {
  const types = {
    primary: "bg-primary text-white",
    secondary: "bg-slate-500 text-white",
    success: "bg-emerald-100 text-emerald-700",
    danger: "bg-rose-100 text-rose-700",
    warning: "bg-amber-100 text-amber-800",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${types[type] || types.primary} ${className}`}>
      {children}
    </span>
  );
}

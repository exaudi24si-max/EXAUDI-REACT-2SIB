export default function Button({ children, type = "primary", className = "", ...props }) {
  const types = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-slate-600 text-white hover:bg-slate-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
    danger: "bg-rose-600 text-white hover:bg-rose-700",
    warning: "bg-amber-500 text-slate-900 hover:bg-amber-400",
  };

  return (
    <button
      {...props}
      className={`${types[type] || types.primary} px-4 py-2 rounded-2xl font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}

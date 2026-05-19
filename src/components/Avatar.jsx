export default function Avatar({ name = "User", src, className = "" }) {
  return src ? (
    <img
      src={src}
      alt={name}
      className={`w-12 h-12 rounded-full object-cover ${className}`}
    />
  ) : (
    <div className={`w-12 h-12 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center ${className}`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

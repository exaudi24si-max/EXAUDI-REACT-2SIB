export default function HeroSection({ title, subtitle, children }) {
  return (
    <section className="rounded-[2rem] bg-gradient-to-br from-primary/15 to-slate-100 border border-slate-200 p-8 shadow-sm">
      <div className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Halaman Komponen</p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900">{title}</h1>
        <p className="max-w-2xl text-slate-600 leading-relaxed">{subtitle}</p>
      </div>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}

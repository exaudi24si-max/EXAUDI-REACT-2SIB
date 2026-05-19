export default function Footer() {
  return (
    <footer className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm text-slate-600">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">ApotikPro</h2>
          <p className="text-sm text-slate-500">Aplikasi manajemen apotek modern untuk aktivitas resep, kasir, dan stok obat.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-primary transition">Beranda</a>
          <a href="#" className="hover:text-primary transition">Produk</a>
          <a href="#" className="hover:text-primary transition">Bantuan</a>
        </div>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">© 2026 ApotikPro. All rights reserved.</p>
    </footer>
  );
}

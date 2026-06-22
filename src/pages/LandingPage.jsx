import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiGift, FiBell, FiStar, FiShield, FiArrowRight, FiShoppingBag } from 'react-icons/fi';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <FiHeart size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-indigo-950 leading-none">
                Apotek<span className="text-primary">Pro</span>
              </h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Care & Health</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
              Masuk
            </Link>
            <Link to="/register" className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-indigo-700 transition-all hover:-translate-y-0.5">
              Daftar Member
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Layanan Apotek Digital Modern
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-indigo-950 leading-[1.1] tracking-tight">
              Sehat Lebih <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Mudah</span> & Menguntungkan
            </h2>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Dapatkan pengalaman berbelanja obat yang lebih personal. Bergabung dengan membership kami untuk mendapatkan poin, diskon eksklusif, dan pengingat jadwal minum obat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:bg-indigo-700 transition-all hover:scale-105">
                Mulai Sekarang <FiArrowRight />
              </Link>
              <Link to="/dashboard" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-indigo-950 font-bold rounded-2xl shadow-sm border border-slate-200 hover:border-primary/30 hover:bg-slate-50 transition-all">
                Lihat Demo Dashboard
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-indigo-300/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Apotek Modern" 
                className="rounded-[2rem] object-cover h-[400px] w-full"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <FiHeart className="text-rose-500" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted by</p>
                  <p className="text-xl font-black text-indigo-950">10,000+ Pasien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-indigo-950 tracking-tight">Pilihan Terlaris</h2>
              <p className="text-slate-500 max-w-xl">Berbagai produk kesehatan dan vitamin pilihan yang paling banyak dicari oleh pelanggan kami.</p>
            </div>
            <Link to="/auth" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-indigo-700 transition-colors">
              Lihat Semua Produk <FiArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              name="Blackmores Vitamin C"
              category="Suplemen"
              price="Rp 120.000"
              discount="Disc 10%"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              name="Panadol Extra 10s"
              category="Obat Bebas"
              price="Rp 15.000"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1550572017-edb79eb1cbfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              name="Imboost Force Tablet"
              category="Daya Tahan"
              price="Rp 75.000"
              discount="Member Only"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              name="Enervon C Multivitamin"
              category="Suplemen"
              price="Rp 45.000"
            />
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-20 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight">Keuntungan Member ApotekPro</h2>
            <p className="text-indigo-200">Nikmati berbagai layanan premium yang dirancang khusus untuk menjaga kesehatan Anda dan keluarga.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FiStar size={32} />}
              title="Poin & Rewards"
              desc="Kumpulkan poin dari setiap transaksi dan tukarkan dengan diskon menarik pada pembelian berikutnya."
              color="text-yellow-400"
              bg="bg-yellow-400/10"
            />
            <FeatureCard 
              icon={<FiGift size={32} />}
              title="Voucher Spesial"
              desc="Dapatkan voucher eksklusif di hari ulang tahun dan promo khusus untuk produk kesehatan pilihan Anda."
              color="text-rose-400"
              bg="bg-rose-400/10"
            />
            <FeatureCard 
              icon={<FiBell size={32} />}
              title="Pengingat Pintar"
              desc="Tidak ada lagi lupa minum obat! Kami akan mengirimkan notifikasi pengingat otomatis untuk Anda."
              color="text-sky-400"
              bg="bg-sky-400/10"
            />
          </div>
        </div>
      </section>

      {/* Member Levels */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black text-indigo-950 tracking-tight">Tingkatkan Level Anda</h2>
            <p className="text-slate-500">Semakin sering Anda berbelanja, semakin besar diskon dan manfaat yang Anda dapatkan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LevelCard 
              title="Silver Member"
              req="Tanpa minimum belanja"
              benefits={["Poin x1 setiap transaksi", "Akses pengingat minum obat", "Update promo via email"]}
              badge="bg-slate-200 text-slate-700"
            />
            <LevelCard 
              title="Gold Member"
              req="Min. belanja Rp 1.000.000"
              benefits={["Diskon 5% semua produk", "Poin x2 setiap transaksi", "Voucher ulang tahun Rp 50.000", "Prioritas layanan pelanggan"]}
              badge="bg-yellow-400 text-yellow-900"
              isPopular
            />
            <LevelCard 
              title="Platinum Member"
              req="Min. belanja Rp 5.000.000"
              benefits={["Diskon 10% semua produk", "Poin x3 setiap transaksi", "Gratis ongkir pengiriman obat", "Konsultasi Apoteker prioritas"]}
              badge="bg-indigo-900 text-white"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FiHeart size={16} className="text-white" />
            </div>
            <span className="font-black text-indigo-950">ApotekPro</span>
          </div>
          <p className="text-sm text-slate-400 font-medium">© 2026 ApotekPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color, bg }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
      <div className={`w-16 h-16 rounded-2xl ${bg} ${color} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-black mb-3">{title}</h3>
      <p className="text-indigo-200/80 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function LevelCard({ title, req, benefits, badge, isPopular }) {
  return (
    <div className={`relative bg-white p-8 rounded-[2rem] border ${isPopular ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-slate-100 shadow-sm'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full">
          Paling Populer
        </div>
      )}
      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${badge}`}>
        {title}
      </div>
      <h3 className="text-3xl font-black text-indigo-950 mb-2">{title.split(' ')[0]}</h3>
      <p className="text-sm font-bold text-slate-400 pb-6 border-b border-slate-100">{req}</p>
      
      <ul className="mt-6 space-y-4">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <FiShield className="text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-slate-600 font-medium">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full mt-8 py-4 rounded-xl font-bold transition-all ${isPopular ? 'bg-primary text-white hover:bg-indigo-700 shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
        Pelajari Lebih Lanjut
      </button>
    </div>
  );
}

function ProductCard({ image, name, category, price, discount }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-slate-50">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        {discount && (
          <div className="absolute top-4 left-4 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full">
            {discount}
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-lg font-black text-indigo-950 mb-3 group-hover:text-primary transition-colors">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-black text-primary">{price}</p>
          <button className="w-10 h-10 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <FiShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

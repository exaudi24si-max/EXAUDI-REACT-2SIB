import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from "../data/products.json";
import { FiArrowLeft, FiSearch, FiShoppingBag } from 'react-icons/fi';

export default function PublicKatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = ["Semua", "Obat", "Vitamin", "Alat Kesehatan", "Skincare"];

  const filteredProducts = productsData.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = category === "Semua" || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-6 md:p-12 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-100 transition-colors">
            <FiArrowLeft className="text-slate-600" />
          </Link>
          <h1 className="text-3xl font-black text-indigo-950">Katalog Produk</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari obat atau vitamin..." 
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-sm border-none focus:ring-2 focus:ring-primary outline-none text-sm font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-3 rounded-2xl font-bold whitespace-nowrap transition-colors text-sm ${category === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-600 shadow-sm hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              image={product.thumbnail}
              name={product.title}
              category={product.category}
              price={`Rp ${product.price.toLocaleString('id-ID')}`}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <FiSearch size={40} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">Produk tidak ditemukan</h3>
            <p className="text-slate-500 font-medium mt-2">Coba kata kunci pencarian yang lain.</p>
          </div>
        )}
      </div>
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
          <Link to="/auth" className="w-10 h-10 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors" title="Beli (Login)">
            <FiShoppingBag size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

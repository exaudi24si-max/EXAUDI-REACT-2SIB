import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiFilter, FiPlus, FiMoreVertical, FiPackage, FiShoppingBag, FiInfo } from "react-icons/fi"
import productsData from "../data/products.json"

export default function Produk() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Semua")

    const categories = ["Semua", "Obat", "Vitamin", "Alat Kesehatan", "Skincare"]

    const filteredProducts = productsData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.code.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="p-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-black text-indigo-950 tracking-tight">Manajemen Inventori</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">Kelola stok obat dan alat kesehatan Anda secara efisien.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-indigo-700 transition-all active:scale-[0.98]">
                    <FiPlus size={20} />
                    <span>Tambah Produk</span>
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <FiPackage size={28} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Produk</p>
                        <h3 className="text-2xl font-black text-slate-900">{productsData.length}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                        <FiShoppingBag size={28} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Kategori</p>
                        <h3 className="text-2xl font-black text-slate-900">{categories.length - 1}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                        <FiInfo size={28} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Stok Rendah</p>
                        <h3 className="text-2xl font-black text-slate-900">
                            {productsData.filter(p => p.stock < 20).length}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Filters & Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Cari nama obat atau kode..." 
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Produk</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kode</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Harga</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stok</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredProducts.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                                                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <Link to={`/products/${item.id}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors block">
                                                    {item.title}
                                                </Link>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase">{item.brand}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item.code}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                                            item.category === 'Obat' ? 'bg-blue-50 text-blue-600' :
                                            item.category === 'Vitamin' ? 'bg-purple-50 text-purple-600' :
                                            item.category === 'Alat Kesehatan' ? 'bg-amber-50 text-amber-600' :
                                            'bg-rose-50 text-rose-600'
                                        }`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-black text-slate-900">Rp {item.price.toLocaleString('id-ID')}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full ${item.stock < 20 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                                                    style={{ width: `${Math.min(item.stock, 100)}%` }}
                                                ></div>
                                            </div>
                                            <span className={`text-xs font-bold ${item.stock < 20 ? 'text-rose-600' : 'text-slate-600'}`}>
                                                {item.stock}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <FiMoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiSearch size={40} />
                        </div>
                        <h3 className="text-slate-900 font-bold">Produk tidak ditemukan</h3>
                        <p className="text-slate-500 text-sm">Coba kata kunci lain atau filter kategori yang berbeda.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

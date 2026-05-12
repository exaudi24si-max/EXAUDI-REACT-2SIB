import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { FiArrowLeft, FiShoppingCart, FiShield, FiTruck, FiBox, FiCheckCircle } from "react-icons/fi"

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // Menggunakan dummyjson sesuai instruksi tugas
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
                setLoading(false)
            })
            .catch((err) => {
                setError("Produk tidak ditemukan atau terjadi kesalahan jaringan.")
                setLoading(false)
            })
    }, [id])

    if (loading) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-pulse">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 font-bold tracking-tight">Memuat detail produk...</p>
        </div>
    )

    if (error) return (
        <div className="p-8 text-center max-w-md mx-auto mt-20">
            <div className="bg-rose-50 text-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBox size={32} />
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-2">Ups! Terjadi Kesalahan</h2>
            <p className="text-slate-500 mb-6">{error}</p>
            <button 
                onClick={() => navigate("/products")}
                className="bg-primary text-white px-6 py-3 rounded-2xl font-bold"
            >
                Kembali ke Daftar Produk
            </button>
        </div>
    )

    return (
        <div className="p-8 animate-fade-in max-w-6xl mx-auto">
            {/* Navigation */}
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-8 group"
            >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span>Kembali</span>
            </button>

            <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 p-12 bg-slate-50/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="relative w-full max-w-md h-auto object-contain rounded-3xl drop-shadow-2xl transform transition-transform group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-12 flex flex-col">
                    <div className="mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary-light px-3 py-1 rounded-full">
                            {product.category}
                        </span>
                    </div>
                    <h1 className="text-3xl font-black text-indigo-950 mb-2 leading-tight">{product.title}</h1>
                    <p className="text-slate-400 font-bold mb-6">Brand: <span className="text-slate-600">{product.brand || "Generik"}</span></p>

                    <div className="bg-slate-50 p-6 rounded-3xl mb-8">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Harga Satuan</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-slate-900">
                                Rp {(product.price * 15000).toLocaleString('id-ID')}
                            </span>
                            <span className="text-slate-400 text-sm font-medium">/ Unit</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                <FiCheckCircle size={16} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">Deskripsi Produk</h4>
                                <p className="text-sm text-slate-500 leading-relaxed mt-1">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <FiBox size={16} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">Stok Tersedia</h4>
                                <p className="text-sm text-slate-500">{product.stock} items ready</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Badges */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                            <FiShield className="text-primary" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase">Original 100%</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                            <FiTruck className="text-primary" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase">Pengiriman Cepat</span>
                        </div>
                    </div>

                    <div className="mt-auto flex gap-4">
                        <button className="flex-1 bg-primary text-white py-4 px-8 rounded-2xl font-black shadow-lg shadow-primary/30 hover:bg-indigo-700 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                            <FiShoppingCart size={20} />
                            <span>TAMBAH KE KERANJANG</span>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Related Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <h5 className="font-bold text-slate-900 mb-2">Aturan Pakai</h5>
                    <p className="text-sm text-slate-500">Gunakan sesuai anjuran dokter atau petunjuk pada kemasan produk ini.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <h5 className="font-bold text-slate-900 mb-2">Penyimpanan</h5>
                    <p className="text-sm text-slate-500">Simpan di tempat yang sejuk dan kering, jauh dari sinar matahari langsung.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <h5 className="font-bold text-slate-900 mb-2">Perhatian</h5>
                    <p className="text-sm text-slate-500">Jauhkan dari jangkauan anak-anak. Segera hubungi dokter jika ada efek samping.</p>
                </div>
            </div>
        </div>
    )
}

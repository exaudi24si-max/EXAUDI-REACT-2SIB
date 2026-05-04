import { FiBox, FiShoppingCart, FiUsers, FiTrendingUp, FiX } from "react-icons/fi";
import { useState } from "react";
import dummyData from "../dummyData.json";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: '',
        tanggal: new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Disini logika untuk menyimpan data (misal dikirim ke API atau disimpan di state context)
        console.log("Data Laporan Baru:", formData);
        alert("Laporan berhasil dibuat! (Cek console untuk melihat data)");
        
        // Reset form & tutup modal
        setFormData({ judul: '', deskripsi: '', tanggal: new Date().toISOString().split('T')[0] });
        setIsModalOpen(false);
    };

    return (
        <div className="animate-fade-in relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Dashboard Apotek</h1>
                    <p className="text-gray-500 mt-1">Ringkasan aktivitas dan performa hari ini.</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-xl shadow-[0_8px_15px_rgba(13,_148,_136,_0.2)] hover:shadow-[0_8px_20px_rgba(13,_148,_136,_0.3)] font-semibold transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                    <FiTrendingUp /> Buat Laporan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <FiBox size={120} className="text-teal-600" />
                    </div>
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center text-xl border border-teal-100">
                            <FiBox />
                        </div>
                        <h3 className="text-gray-500 font-semibold">Total Obat</h3>
                    </div>
                    <p className="text-4xl font-extrabold text-gray-800 relative z-10">{dummyData.dashboard.summary.totalObat.toLocaleString()}</p>
                    <p className="text-sm text-green-500 font-medium mt-2 flex items-center gap-1 relative z-10">
                        <span>↑</span> 12% dari bulan lalu
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <FiShoppingCart size={120} className="text-green-600" />
                    </div>
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl border border-green-100">
                            <FiShoppingCart />
                        </div>
                        <h3 className="text-gray-500 font-semibold">Pesanan Hari Ini</h3>
                    </div>
                    <p className="text-4xl font-extrabold text-gray-800 relative z-10">{dummyData.dashboard.summary.pesananHariIni}</p>
                    <p className="text-sm text-green-500 font-medium mt-2 flex items-center gap-1 relative z-10">
                        <span>↑</span> 5 pesanan baru
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <FiUsers size={120} className="text-blue-600" />
                    </div>
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl border border-blue-100">
                            <FiUsers />
                        </div>
                        <h3 className="text-gray-500 font-semibold">Pasien Terdaftar</h3>
                    </div>
                    <p className="text-4xl font-extrabold text-gray-800 relative z-10">{dummyData.dashboard.summary.pasienTerdaftar.toLocaleString()}</p>
                    <p className="text-sm text-gray-400 font-medium mt-2 relative z-10">Stabil sejak minggu lalu</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
                    Aktivitas Terkini
                </h2>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {dummyData.dashboard.aktivitasTerkini.map((aktivitas) => (
                        <div key={aktivitas.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-teal-50/50 transition-colors cursor-pointer border border-transparent hover:border-teal-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white text-teal-600 shadow-sm flex items-center justify-center font-bold border border-gray-100">
                                    P{aktivitas.id}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{aktivitas.pesan}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{aktivitas.detail}</p>
                                </div>
                            </div>
                            <span className="text-xs text-teal-600 font-semibold bg-teal-50 px-3 py-1.5 rounded-full whitespace-nowrap">{aktivitas.waktu}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Buat Laporan */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-slide-up">
                        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <FiTrendingUp className="text-teal-500" />
                                Form Buat Laporan Baru
                            </h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50"
                            >
                                <FiX size={22} />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Judul Laporan</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.judul}
                                    onChange={(e) => setFormData({...formData, judul: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-gray-800"
                                    placeholder="Contoh: Laporan Penjualan Harian Bulan Ini"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tanggal Laporan</label>
                                <input 
                                    type="date" 
                                    required
                                    value={formData.tanggal}
                                    onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Deskripsi / Catatan</label>
                                <textarea 
                                    required
                                    rows="4"
                                    value={formData.deskripsi}
                                    onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all resize-none text-gray-800"
                                    placeholder="Tuliskan detail atau ringkasan laporan di sini..."
                                ></textarea>
                            </div>

                            <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-2">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2.5 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    Batal
                                </button>
                                <button 
                                    type="submit"
                                    className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md shadow-teal-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                                >
                                    Simpan Laporan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

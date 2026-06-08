import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiPlus, FiMoreVertical, FiPackage, FiShoppingBag, FiInfo } from "react-icons/fi"
import productsData from "../data/products.json"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Produk() {
    const [products, setProducts] = useState(productsData)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Semua")
    const [activeTab, setActiveTab] = useState("all")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newProduct, setNewProduct] = useState({
        title: "",
        code: "",
        category: "Obat",
        brand: "",
        price: "",
        stock: "",
        description: "",
        thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop"
    })

    // --- FITUR BARU UNTUK TUGAS HOOKS (Catatan Cepat) ---
    // 1. useState: Mengelola status buka/tutup catatan dan teksnya
    const [isNoteOpen, setIsNoteOpen] = useState(false)
    const [noteText, setNoteText] = useState("")
    const [timer, setTimer] = useState(0)

    // 2. useRef: Mengambil referensi dari text area catatan
    const noteAreaRef = useRef(null)

    // 3. useEffect: Timer berjalan ketika catatan dibuka dan auto-focus text area
    useEffect(() => {
        let interval;
        if (isNoteOpen) {
            // Timer (menunjukkan useEffect merender efek samping secara berkala)
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
            
            // Menggunakan useRef untuk otomatis fokus ke textarea sesaat setelah terbuka
            setTimeout(() => {
                if (noteAreaRef.current) {
                    noteAreaRef.current.focus();
                }
            }, 100);
        } else {
            setTimer(0); // Reset timer jika ditutup
        }

        return () => clearInterval(interval); // Cleanup
    }, [isNoteOpen])
    // ----------------------------------------------------

    // useRef: Digunakan untuk mengambil referensi elemen input pencarian
    const searchInputRef = useRef(null)

    // useEffect: Mengubah judul halaman dan mengatur fokus kursor
    useEffect(() => {
        // 1. Mengubah teks di tab browser
        document.title = `Manajemen Inventori (${products.length} Produk) - ApotekPro`
        
        // 2. Menerapkan useRef untuk memfokuskan kursor secara otomatis
        if (searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [products.length])

    const categories = ["Semua", "Obat", "Vitamin", "Alat Kesehatan", "Skincare"]

    const filteredProducts = products.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.code.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory
        
        const matchesStock = activeTab === "all" || item.stock < 20
        
        return matchesSearch && matchesCategory && matchesStock
    })

    const handleSaveProduct = () => {
        if (!newProduct.title || !newProduct.code || !newProduct.price || !newProduct.stock) {
            alert("Mohon lengkapi semua field utama (Nama, Kode, Harga, Stok)!")
            return
        }

        const productToAdd = {
            ...newProduct,
            id: Date.now(),
            price: Number(newProduct.price),
            stock: Number(newProduct.stock)
        }

        setProducts([productToAdd, ...products])
        setIsDialogOpen(false)
        
        // Reset Form
        setNewProduct({
            title: "",
            code: "",
            category: "Obat",
            brand: "",
            price: "",
            stock: "",
            description: "",
            thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop"
        })
    }

    return (
        <div className="p-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-black text-indigo-950 tracking-tight">Manajemen Inventori</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">Kelola stok obat dan alat kesehatan Anda secara efisien.</p>
                </div>

                {/* Dialog Component for adding new products */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-indigo-700 transition-all active:scale-[0.98]">
                            <FiPlus size={20} />
                            <span>Tambah Produk</span>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[480px] p-6 rounded-3xl bg-white border border-slate-100 shadow-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-black text-indigo-950">Tambah Obat / Produk Baru</DialogTitle>
                            <DialogDescription className="text-slate-500 text-sm mt-1">
                                Lengkapi formulir di bawah ini untuk menambahkan produk baru ke inventori ApotekPro.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 my-4 text-slate-700">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nama Produk</label>
                                    <input 
                                        type="text" 
                                        placeholder="Paracetamol 500mg..." 
                                        className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                                        value={newProduct.title}
                                        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kode Produk</label>
                                    <input 
                                        type="text" 
                                        placeholder="OBT-009..." 
                                        className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                                        value={newProduct.code}
                                        onChange={(e) => setNewProduct({ ...newProduct, code: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1 flex flex-col justify-end">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Kategori</label>
                                    <Select 
                                        value={newProduct.category} 
                                        onValueChange={(val) => setNewProduct({ ...newProduct, category: val })}
                                    >
                                        <SelectTrigger className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-medium h-11 focus:ring-2 focus:ring-primary/20 outline-none text-left flex justify-between items-center">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border border-slate-100 shadow-xl rounded-xl z-50">
                                            {["Obat", "Vitamin", "Alat Kesehatan", "Skincare"].map((cat) => (
                                                <SelectItem key={cat} value={cat} className="text-xs font-bold text-slate-600 focus:bg-slate-50 rounded-lg">
                                                    {cat}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Brand / Merk</label>
                                    <input 
                                        type="text" 
                                        placeholder="Kimia Farma..." 
                                        className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                                        value={newProduct.brand}
                                        onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Harga (Rp)</label>
                                    <input 
                                        type="number" 
                                        placeholder="15000..." 
                                        className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jumlah Stok</label>
                                    <input 
                                        type="number" 
                                        placeholder="100..." 
                                        className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                                        value={newProduct.stock}
                                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Deskripsi</label>
                                <textarea 
                                    placeholder="Masukkan deskripsi singkat khasiat obat..." 
                                    className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 h-20 resize-none"
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                />
                            </div>
                        </div>
                        <DialogFooter className="flex gap-2">
                            <button 
                                onClick={() => setIsDialogOpen(false)}
                                className="px-5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold transition-all text-xs"
                            >
                                Batal
                            </button>
                            <button 
                                onClick={handleSaveProduct}
                                className="px-5 py-3 rounded-2xl bg-primary hover:bg-indigo-700 text-white font-bold transition-all text-xs shadow-md shadow-primary/20"
                            >
                                Simpan Produk
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <FiPackage size={28} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Produk</p>
                        <h3 className="text-2xl font-black text-slate-900">{products.length}</h3>
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
                            {products.filter(p => p.stock < 20).length}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Main Content Area with Tabs & Filters */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    {/* Filter and Tab Controller Section */}
                    <div className="flex flex-col xl:flex-row gap-4 xl:items-center justify-between pb-6 border-b border-slate-100 mb-6">
                        {/* Tabs Trigger - 1st Shadcn Component */}
                        <TabsList className="bg-slate-50 p-1.5 rounded-2xl flex w-fit h-12 border border-slate-100/50">
                            <TabsTrigger value="all" className="px-5 py-2 font-bold text-xs transition-all duration-200">
                                Semua Obat ({products.length})
                            </TabsTrigger>
                            <TabsTrigger value="critical" className="px-5 py-2 font-bold text-xs transition-all duration-200 text-slate-500 hover:text-slate-700">
                                Stok Kritis ({products.filter(p => p.stock < 20).length})
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex flex-col md:flex-row gap-4 items-center w-full xl:w-auto">
                            {/* Search bar */}
                            <div className="relative w-full md:w-80">
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                    ref={searchInputRef}
                                    type="text" 
                                    placeholder="Cari nama obat atau kode..." 
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-xs font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Select Dropdown Filter - 2nd Shadcn Component */}
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Filter Kategori:</span>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-[180px] bg-slate-50 border-none rounded-2xl py-3 px-4 text-xs font-bold h-11 focus:ring-2 focus:ring-primary/20 outline-none text-left flex justify-between items-center text-slate-700">
                                        <SelectValue placeholder="Pilih Kategori" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border border-slate-100 shadow-xl rounded-xl z-50">
                                        {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat} className="text-xs font-bold text-slate-600 focus:bg-slate-50 rounded-lg">
                                                {cat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Content Sections */}
                    <TabsContent value="all" className="outline-none mt-0">
                        {renderTable(filteredProducts)}
                    </TabsContent>
                    <TabsContent value="critical" className="outline-none mt-0">
                        {renderTable(filteredProducts)}
                    </TabsContent>
                </Tabs>
            </div>

            {/* --- UI FITUR CATATAN CEPAT (UNTUK SCREENSHOT) --- */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end animate-fade-in">
                {isNoteOpen && (
                    <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 mb-4 w-72 transition-all">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-slate-800 text-sm">Catatan Admin</h4>
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-black tracking-widest">
                                BUKA: {timer} DETIK
                            </span>
                        </div>
                        <textarea
                            ref={noteAreaRef}
                            className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none h-32 text-slate-700"
                            placeholder="Ketik catatan di sini..."
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                        />
                    </div>
                )}
                <button
                    onClick={() => setIsNoteOpen(!isNoteOpen)}
                    className="flex items-center gap-2 bg-indigo-900 text-white px-5 py-3 rounded-full font-bold shadow-lg shadow-indigo-900/30 hover:bg-indigo-800 transition-all active:scale-95"
                >
                    <span className="text-xl">📝</span>
                    {isNoteOpen ? "Tutup Catatan" : "Buka Catatan"}
                </button>
            </div>
            {/* ------------------------------------------------- */}

        </div>
    )

    function renderTable(list) {
        return (
            <>
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
                            {list.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
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
                                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">{item.code}</span>
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
                                            <span className={`text-xs font-bold ${item.stock < 20 ? 'text-rose-600 animate-pulse' : 'text-slate-600'}`}>
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
                
                {list.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiSearch size={40} />
                        </div>
                        <h3 className="text-slate-900 font-bold">Produk tidak ditemukan</h3>
                        <p className="text-slate-500 text-sm">Coba kata kunci lain atau filter kategori yang berbeda.</p>
                    </div>
                )}
            </>
        )
    }
}

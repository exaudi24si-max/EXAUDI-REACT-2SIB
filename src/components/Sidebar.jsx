import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiLayers, FiGrid, FiShoppingBag, FiLock, FiChevronDown, FiLogOut, FiPlusSquare, FiUsers, FiActivity, FiPackage } from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/auth");
    };

    return (
        <aside className="w-72 bg-white text-slate-800 min-h-screen border-r border-slate-100 flex flex-col transition-all relative z-50">
            {/* Logo Section */}
            <div className="py-10 px-8 flex justify-center">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <FiPlusSquare size={28} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-tighter text-indigo-950 leading-none">
                            Apotek<span className="text-primary">Pro</span>
                        </h2>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Management</p>
                    </div>
                </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto scrollbar-hide">
                <NavItem 
                    to="/" 
                    icon={<FiHome size={22} />} 
                    label="Utama" 
                    active={location.pathname === "/"} 
                    hasSub 
                >
                    <Link to="/" className={`block py-2 pl-12 pr-4 text-xs font-bold transition-all ${location.pathname === "/" ? "text-primary" : "text-slate-400 hover:text-slate-600"}`}>
                        Dashboard
                    </Link>
                    <Link to="/analytics" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Statistik Lanjut
                    </Link>
                </NavItem>
                
                <NavItem to="/master" icon={<FiLayers size={22} />} label="Data Master" hasSub>
                    <Link to="/orders" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Daftar Obat
                    </Link>
                    <Link to="/products" className={`block py-2 pl-12 pr-4 text-xs font-bold transition-all ${location.pathname === "/products" ? "text-primary" : "text-slate-400 hover:text-slate-600"}`}>
                        Daftar Produk (Baru)
                    </Link>
                    <Link to="/customers" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Data Pasien
                    </Link>
                </NavItem>

                <NavItem to="/pelayanan" icon={<FiActivity size={22} />} label="Pelayanan" hasSub>
                    <Link to="/resep" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Input Resep
                    </Link>
                    <Link to="/transaksi" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Kasir / Transaksi
                    </Link>
                </NavItem>

                <NavItem to="/ecommerce" icon={<FiPackage size={22} />} label="Inventori" hasSub>
                    <Link to="/stok" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Stok Opname
                    </Link>
                    <Link to="/supplier" className="block py-2 pl-12 pr-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition-all">
                        Supplier
                    </Link>
                </NavItem>

                <NavItem to="/auth" icon={<FiLock size={22} />} label="Keamanan" hasSub />
            </nav>
            
            {/* Profile Section & Logout */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer group hover:bg-slate-100 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
                        <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anita" 
                            alt="Avatar" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">Anita Cruz</p>
                        <p className="text-[10px] text-slate-500 font-medium truncate">Apoteker Penanggung Jawab</p>
                    </div>
                </div>

                <button 
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 p-4 bg-rose-50 text-rose-600 font-black rounded-2xl hover:bg-rose-100 transition-all active:scale-[0.98] shadow-sm"
                >
                    <FiLogOut size={18} />
                    <span className="text-xs uppercase tracking-widest">Logout</span>
                </button>
            </div>
        </aside>
    );
}

function NavItem({ to, icon, label, active, hasSub, children }) {
    const [isOpen, setIsOpen] = useState(active);

    return (
        <div className="space-y-1">
            <Link 
                to={to} 
                onClick={(e) => {
                    if (hasSub) {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
                className={`flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all group ${active ? 'bg-primary-light text-primary font-bold' : 'text-slate-500 hover:bg-slate-50'}`}
            >
                <div className="flex items-center gap-4">
                    <span className={`${active ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'}`}>{icon}</span>
                    <span className="text-sm font-bold tracking-tight">{label}</span>
                </div>
                {hasSub && (
                    <FiChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`} 
                    />
                )}
            </Link>
            {hasSub && isOpen && children && (
                <div className="animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
}

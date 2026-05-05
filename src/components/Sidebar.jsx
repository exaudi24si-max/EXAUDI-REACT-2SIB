import { Link, useLocation } from "react-router-dom";
import { FiHome, FiShoppingBag, FiUsers, FiLogOut, FiPlusCircle, FiBarChart2, FiSettings, FiGrid, FiChevronDown, FiGlobe, FiKey } from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path 
            ? "bg-primary-light text-primary font-bold shadow-sm" 
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-800";
    };

    return (
        <aside className="w-64 bg-white text-slate-800 min-h-screen border-r border-stroke flex flex-col transition-all relative z-50">
            <div className="py-8 px-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
                    <FiPlusCircle size={28} className="text-primary" />
                </div>
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                        Apotek<span className="text-primary">Pro</span>
                    </h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Management</p>
                </div>
            </div>
            
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                <Link to="/" className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all font-medium ${isActive('/')}`}>
                    <div className="flex items-center gap-3">
                        <FiGrid size={20} /> 
                        <span>Dashboard</span>
                    </div>
                    <FiChevronDown size={14} className="opacity-50" />
                </Link>
                
                <Link to="/orders" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-medium ${isActive('/orders')}`}>
                    <FiShoppingBag size={20} /> 
                    <span>Obat & Inventori</span>
                </Link>
                
                <Link to="/customers" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-medium ${isActive('/customers')}`}>
                    <FiUsers size={20} /> 
                    <span>Pasien</span>
                </Link>

                <div className="px-4 pt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aplikasi</div>
                
                <Link to="/sales" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-medium ${isActive('/sales')}`}>
                    <FiBarChart2 size={20} /> 
                    <span>Penjualan</span>
                </Link>

                <Link to="/auth" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-medium ${isActive('/auth')}`}>
                    <FiKey size={20} /> 
                    <span>Autentikasi</span>
                </Link>
            </nav>
            
            <div className="p-4 mt-auto border-t border-stroke bg-slate-50/50">
                <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-stroke shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0 group-hover:scale-105 transition-transform">
                        AD
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">Apoteker Admin</p>
                        <p className="text-[10px] text-slate-500 truncate">admin@apotekpro.com</p>
                    </div>
                    <FiLogOut className="text-slate-400 hover:text-red-500 transition-colors shrink-0" size={16} />
                </div>
            </div>
        </aside>
    );
}

import { Link, useLocation } from "react-router-dom";
import { FiHome, FiShoppingBag, FiUsers, FiLogOut, FiHeart, FiAlertCircle } from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path 
            ? "bg-white/10 text-white shadow-lg border-l-4 border-green-400" 
            : "text-teal-100 hover:bg-white/5 hover:text-white border-l-4 border-transparent";
    };

    return (
        <aside className="w-72 bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white min-h-screen shadow-2xl flex flex-col transition-all relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="p-8 text-center border-b border-teal-700/30 relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <FiHeart className="text-green-400 text-2xl animate-pulse-slow drop-shadow-md" />
                    <h2 className="text-2xl font-extrabold tracking-wide text-white">
                        Apotek<span className="text-green-400">Sehat</span>
                    </h2>
                </div>
                <p className="text-teal-300/80 text-[10px] font-bold tracking-[0.2em] mt-1">SISTEM MANAJEMEN</p>
            </div>
            
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto relative z-10">
                <Link to="/" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/')}`}>
                    <FiHome size={20} className={location.pathname === '/' ? "text-green-400" : ""} /> 
                    <span>Dashboard</span>
                </Link>
                <Link to="/orders" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/orders')}`}>
                    <FiShoppingBag size={20} className={location.pathname === '/orders' ? "text-green-400" : ""} /> 
                    <span>Pesanan Obat</span>
                </Link>
                <Link to="/customers" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/customers')}`}>
                    <FiUsers size={20} className={location.pathname === '/customers' ? "text-green-400" : ""} /> 
                    <span>Data Pasien</span>
                </Link>

                <div className="pt-4 pb-1 px-5">
                    <p className="text-teal-400/60 text-[10px] font-bold uppercase tracking-widest">Error Pages</p>
                </div>
                <Link to="/error-400" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/error-400')}`}>
                    <FiAlertCircle size={20} className={location.pathname === '/error-400' ? "text-green-400" : ""} /> 
                    <span>Error 400</span>
                </Link>
                <Link to="/error-401" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/error-401')}`}>
                    <FiAlertCircle size={20} className={location.pathname === '/error-401' ? "text-green-400" : ""} /> 
                    <span>Error 401</span>
                </Link>
                <Link to="/error-403" className={`flex items-center gap-3 py-3.5 px-5 rounded-xl transition-all font-medium backdrop-blur-sm ${isActive('/error-403')}`}>
                    <FiAlertCircle size={20} className={location.pathname === '/error-403' ? "text-green-400" : ""} /> 
                    <span>Error 403</span>
                </Link>
            </nav>
            
            <div className="p-5 mt-auto border-t border-teal-700/30 relative z-10">
                <div className="bg-teal-800/50 rounded-2xl p-4 mb-4 backdrop-blur-md border border-teal-700/50 hidden lg:block">
                    <p className="text-xs text-teal-200 mb-2">Butuh bantuan?</p>
                    <button className="text-sm font-semibold text-white hover:text-green-300 transition-colors">Hubungi Support</button>
                </div>
                
                <Link to="/login" className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-100 hover:text-white font-bold transition-all duration-300 group">
                    <FiLogOut className="group-hover:-translate-x-1 transition-transform" /> Logout
                </Link>
            </div>
        </aside>
    );
}

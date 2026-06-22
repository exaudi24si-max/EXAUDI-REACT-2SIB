import { Outlet, useNavigate } from "react-router-dom";
import { FiLogOut, FiHeart } from "react-icons/fi";

export default function MemberLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Simple Top Navigation for Member */}
            <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                        <FiHeart size={18} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-black tracking-tighter text-indigo-950 leading-none">
                            Apotek<span className="text-primary">Pro</span>
                        </h1>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Member Area</p>
                    </div>
                </div>

                <button 
                    onClick={handleLogout} 
                    className="flex items-center gap-2 text-xs font-bold text-rose-500 hover:bg-rose-50 px-4 py-2.5 rounded-xl transition-all border border-rose-100 hover:border-rose-200"
                >
                    <FiLogOut size={16} /> Keluar
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="p-4 md:p-8 max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
}

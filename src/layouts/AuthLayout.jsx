import { Outlet } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center p-4 relative before:content-[''] before:absolute before:inset-0 before:bg-teal-900/60 before:backdrop-blur-sm">
            <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,_0,_0,_0.3)] w-full max-w-[440px] border border-white/20 relative z-10 opacity-0 animate-slide-up">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-teal-500 to-green-400 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(20,_184,_166,_0.3)] mb-5 text-white transform rotate-3 hover:rotate-6 transition-transform">
                        <FiHeart size={32} className="animate-pulse-slow" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                        Apotek<span className="text-teal-500">Sehat</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-2 font-medium">Portal Manajemen Farmasi</p>
                </div>

                <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Outlet/>
                </div>

                <p className="text-center text-xs text-gray-400 mt-8 font-medium">
                    © 2026 Apotek Sehat Admin Dashboard.
                </p>
            </div>
        </div>
    )
}

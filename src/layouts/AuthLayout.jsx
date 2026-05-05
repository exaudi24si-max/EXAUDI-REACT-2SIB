import { Outlet } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-body p-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-[480px] border border-stroke relative z-10 opacity-0 animate-slide-up">
                <div className="flex flex-col items-center justify-center mb-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 text-white transform hover:scale-105 transition-transform">
                        <FiPlusCircle size={36} />
                    </div>
                    <h1 className="text-3xl font-bold text-dark tracking-tight">
                        Apotek<span className="text-primary">Pro</span>
                    </h1>
                    <p className="text-slate-500 text-sm mt-2 font-medium uppercase tracking-widest">Portal Manajemen Admin</p>
                </div>

                <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Outlet/>
                </div>

                <div className="mt-10 pt-6 border-t border-stroke text-center">
                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 Apotek Pro Cloud System.
                    </p>
                </div>
            </div>
        </div>
    )
}

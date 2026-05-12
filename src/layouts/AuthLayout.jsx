import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 md:p-10">
            <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-slate-100">
                {/* Left Side: Form Area */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white relative">
                    <div className="max-w-md mx-auto w-full animate-fade-in">
                        <Outlet />
                    </div>
                    
                    {/* Bottom footer for auth */}
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                            © 2026 ApotekPro Cloud System
                        </p>
                    </div>
                </div>

                {/* Right Side: Illustration & Text Area */}
                <div className="w-full md:w-1/2 bg-primary relative overflow-hidden flex flex-col items-center justify-center p-12 text-white">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                    
                    <div className="relative z-10 text-center space-y-6 max-w-sm">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                            Kelola Apotek Anda dengan <span className="text-primary-light/80 italic">Lebih Mudah & Profesional</span>
                        </h2>
                        
                        <div className="relative w-full aspect-square max-w-[320px] mx-auto mt-10 group">
                            <div className="absolute inset-0 bg-white/10 rounded-full scale-110 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                            <img 
                                src="/img/woman.png" 
                                alt="Auth Illustration" 
                                className="w-full h-full object-contain relative z-10 drop-shadow-2xl animate-pulse-slow"
                            />
                        </div>
                        
                        <div className="flex justify-center gap-2 mt-8">
                            <div className="w-8 h-1 bg-white rounded-full"></div>
                            <div className="w-2 h-1 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-white/10 rounded-lg rotate-12 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}


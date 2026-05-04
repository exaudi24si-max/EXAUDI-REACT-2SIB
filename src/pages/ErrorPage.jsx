import { Link } from 'react-router-dom';
import { FiHome, FiRefreshCcw } from 'react-icons/fi';

export default function ErrorPage({ code }) {
    let title = "Error";
    let message = "Terjadi kesalahan";
    let subMessage = "Kami sedang memperbaiki masalah ini.";
    
    if (code === 400) {
        title = "400";
        message = "Bad Request";
        subMessage = "Permintaan tidak valid. Silakan periksa kembali data Anda.";
    } else if (code === 401) {
        title = "401";
        message = "Unauthorized";
        subMessage = "Anda tidak memiliki akses. Silakan login terlebih dahulu.";
    } else if (code === 403) {
        title = "403";
        message = "Forbidden";
        subMessage = "Akses ditolak. Anda tidak diizinkan melihat halaman ini.";
    } else if (code === 404) {
        title = "404";
        message = "Not Found";
        subMessage = "Halaman yang Anda cari mungkin telah dihapus atau dipindahkan.";
    }

    return (
        <div className="animate-fade-in w-full h-full relative">
            {/* Header / Breadcrumb */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">System Error</h1>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <span className="text-teal-500 font-medium">Dashboard</span> 
                    <span className="text-gray-300">/</span> 
                    <span>Error {code}</span>
                </p>
            </div>
            
            {/* Main Error Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-10 md:p-20 flex flex-col items-center justify-center min-h-[65vh] overflow-hidden group">
                
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-[2.5rem]">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Animated Icon Container */}
                <div className="relative mb-8 z-10 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="w-32 h-32 flex items-center justify-center text-yellow-500 drop-shadow-[0_10px_15px_rgba(234,179,8,0.3)] animate-bounce" style={{ animationDuration: '3s' }}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="130px" width="130px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                        </svg>
                    </div>
                </div>
                
                {/* Error Details */}
                <div className="text-center z-10">
                    <h2 className="text-[7rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-400 mb-2 drop-shadow-sm">
                        {title}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">{message}</h3>
                    <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">{subMessage}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 z-10">
                    <button 
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                        <FiRefreshCcw /> Muat Ulang
                    </button>
                    <Link 
                        to="/" 
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40"
                    >
                        <FiHome size={20} />
                        Kembali ke Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

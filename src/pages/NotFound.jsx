import { Link } from 'react-router-dom';
import { FiAlertTriangle, FiHome } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center border border-gray-100 animate-fade-in">
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiAlertTriangle size={50} />
                </div>
                
                <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Halaman Tidak Ditemukan</h2>
                <p className="text-gray-500 mb-8">
                    Maaf, halaman yang Anda tuju tidak tersedia atau Anda salah memasukkan URL.
                </p>
                
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-1"
                >
                    <FiHome size={20} />
                    Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}

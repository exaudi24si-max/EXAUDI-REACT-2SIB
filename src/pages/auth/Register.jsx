import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                Buat Akun Apoteker ✨
            </h2>

            <form>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="John Doe"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Username / Email
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="••••••••"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Konfirmasi Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="••••••••"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition-all"
                >
                    Daftar
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Sudah punya akun? <Link to="/login" className="font-semibold text-teal-600 hover:text-teal-500">Masuk</Link>
            </p>
        </div>
    );
}

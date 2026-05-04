import { Link } from "react-router-dom";

export default function Forgot() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
                Lupa Password?
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center leading-relaxed">
                Masukkan email Anda, kami akan mengirimkan tautan untuk mereset password Anda.
            </p>

            <form>
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Alamat Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="anda@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition-all"
                >
                    Kirim Link Reset
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Kembali ke <Link to="/login" className="font-semibold text-teal-600 hover:text-teal-500">Halaman Login</Link>
            </p>
        </div>
    );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        axios.post("https://dummyjson.com/user/login", {
            username: dataForm.email,
            password: dataForm.password,
            expiresInMins: 30, // optional, from dummyjson docs
        })
        .then((response) => {
            if (response.status !== 200) {
                setError("Login gagal.");
                return;
            }
            navigate("/");
        })
        .catch((err) => {
            if (err.response) {
                setError(err.response.data.message || "Terjadi kesalahan sistem.");
            } else {
                setError(err.message || "Error tidak diketahui.");
            }
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const errorInfo = error ? (
        <div className="bg-red-100 mb-5 p-4 text-sm font-medium text-red-700 rounded-lg flex items-center border border-red-200 shadow-sm">
            <BsFillExclamationDiamondFill className="text-red-500 me-3 text-xl shrink-0" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-teal-50 border border-teal-100 mb-5 p-4 text-sm font-medium text-teal-700 rounded-lg flex items-center shadow-sm">
            <ImSpinner2 className="me-3 animate-spin text-teal-600 text-xl shrink-0" />
            Memproses otentikasi...
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                Selamat Datang 👋
            </h2>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Username (Gunakan: emilys)
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="emilys"
                        value={dataForm.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Password (Gunakan: emilyspass)
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                        placeholder="••••••••"
                        value={dataForm.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <input id="remember" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Ingat saya</label>
                    </div>
                    <div className="text-sm">
                        <Link to="/forgot" className="font-semibold text-teal-600 hover:text-teal-500">Lupa password?</Link>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? "Masuk..." : "Masuk"}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Belum punya akun? <Link to="/register" className="font-semibold text-teal-600 hover:text-teal-500">Daftar sekarang</Link>
            </p>
        </div>
    );
}

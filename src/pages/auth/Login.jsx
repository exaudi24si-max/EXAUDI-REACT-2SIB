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
        <div className="bg-red-50 mb-5 p-4 text-sm font-medium text-red-600 rounded-lg flex items-center border border-red-100">
            <BsFillExclamationDiamondFill className="text-red-500 me-3 text-xl shrink-0" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-primary/5 border border-primary/10 mb-5 p-4 text-sm font-medium text-primary rounded-lg flex items-center">
            <ImSpinner2 className="me-3 animate-spin text-primary text-xl shrink-0" />
            Memproses otentikasi...
        </div>
    ) : null;

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-dark">
                    Selamat Datang 👋
                </h2>
                <p className="text-slate-500 text-sm mt-1">Silakan masuk ke akun Anda</p>
            </div>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-bold text-dark mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full px-4 py-3 bg-slate-50 border border-stroke rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark"
                        placeholder="Masukkan username"
                        value={dataForm.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold text-dark mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="w-full px-4 py-3 bg-slate-50 border border-stroke rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark"
                        placeholder="••••••••"
                        value={dataForm.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <input id="remember" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-stroke rounded" />
                        <label htmlFor="remember" className="ml-2 block text-sm text-slate-600 font-medium">Ingat saya</label>
                    </div>
                    <div className="text-sm">
                        <Link to="/forgot" className="font-bold text-primary hover:underline">Lupa password?</Link>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? "Masuk..." : "Masuk"}
                </button>
            </form>
            <p className="mt-8 text-center text-sm text-slate-600 font-medium">
                Belum punya akun? <Link to="/register" className="font-bold text-primary hover:underline">Daftar sekarang</Link>
            </p>
        </div>
    );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authAPI } from "../../services/authAPI";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [dataForm, setDataForm] = useState({
        fullName: "",
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
        setError("");
        setSuccess("");

        try {
            // Check if email already exists
            const existingUser = await authAPI.checkEmail(dataForm.email);
            if (existingUser.length > 0) {
                setError("Email sudah terdaftar!");
                setLoading(false);
                return;
            }

            // Register user
            await authAPI.registerUser({
                full_name: dataForm.fullName,
                email: dataForm.email,
                password: dataForm.password
            });

            setSuccess("Pendaftaran berhasil! Silahkan login.");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-black text-indigo-950 tracking-tighter">Sign up</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">Start your 30-day free trial.</p>
            </div>

            {error && (
                <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl text-xs font-bold border border-rose-100 flex items-center gap-3 animate-shake">
                    <FiAlertCircle size={18} />
                    {error}
                </div>
            )}
            
            {success && (
                <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl text-xs font-bold border border-emerald-100 flex items-center gap-3">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiUser className="text-slate-300 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-bold"
                            placeholder="Enter your name"
                            value={dataForm.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiMail className="text-slate-300 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-bold"
                            placeholder="Enter your email"
                            value={dataForm.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Password</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiLock className="text-slate-300 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-bold"
                            placeholder="••••••••"
                            value={dataForm.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-indigo-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all transform active:scale-[0.98] disabled:opacity-50"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Creating account...</span>
                        </div>
                    ) : "Get started"}
                </button>
            </form>

            <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-600 active:scale-[0.98]">
                <FcGoogle size={20} />
                <span>Sign up with Google</span>
            </button>

            <p className="text-center text-sm font-bold text-slate-400">
                Already a member? <Link to="/auth" className="text-primary hover:underline">Login</Link>
            </p>
        </div>
    );
}

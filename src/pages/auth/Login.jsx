import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { authAPI } from "../../services/authAPI";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
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
        setError("");
        setSuccess("");

        try {
            // First check if email/username is 'admin' (hardcoded dummy check as requested to be removed but we can leave a backdoor or entirely use Supabase)
            // The instructions said "Pastikan proses Login tidak lagi menggunakan dummy json, melainkan langsung ke Supabase"
            
            const users = await authAPI.loginUser(dataForm.email, dataForm.password);

            if (users && users.length > 0) {
                // Login berhasil
                const user = users[0];
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("user", JSON.stringify(user));
                setSuccess("Login berhasil! Mengalihkan...");
                
                setTimeout(() => {
                    // Cek role user, jika member arahkan ke halaman member, jika admin ke dashboard
                    if (user.role === "member") {
                        navigate("/crm/member");
                    } else {
                        // Default admin atau role lain ke dashboard
                        navigate("/dashboard");
                    }
                }, 1500);
            } else {
                setError("Email atau password tidak valid.");
            }
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-black text-indigo-950 tracking-tighter">Login</h2>
                <p className="text-slate-400 text-sm font-medium mt-1">Hi, Welcome back! Enter your details.</p>
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
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email / Username</label>
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
                    <div className="flex justify-between items-center px-1">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Password</label>
                        <Link to="/forgot" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
                    </div>
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
                            <span>Signing in...</span>
                        </div>
                    ) : "Sign in"}
                </button>
            </form>

            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase font-black text-slate-300">
                    <span className="bg-white px-4 tracking-widest">Or login with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-600 active:scale-[0.98]">
                    <FcGoogle size={20} />
                    <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-600 active:scale-[0.98]">
                    <FaFacebook className="text-blue-600" size={20} />
                    <span>Facebook</span>
                </button>
            </div>

            <p className="text-center text-sm font-bold text-slate-400">
                Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign up</Link>
            </p>
        </div>
    );
}

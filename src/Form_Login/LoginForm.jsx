import { useState } from "react";
import "./Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan Password wajib diisi!");
      return;
    }

    alert(`Login Berhasil!\nEmail: ${email}`);
  };

  return (
    <div className="modern-wrapper">
      {/* 
        =========================================
        KODE JSX LAMA (TIDAK DIHAPUS)
        =========================================
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      */}

      {/* =========================================
          KODE JSX BARU (MODERN & PREMIUM)
          ========================================= */}
      <div className="modern-container">
        <h2 className="modern-title">Selamat Datang</h2>
        <p className="modern-subtitle">Silakan login untuk melanjutkan</p>
        
        <form onSubmit={handleSubmit} className="modern-form">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              placeholder="contoh@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modern-input"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="modern-input"
              required
            />
          </div>

          <button type="submit" className="modern-button">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

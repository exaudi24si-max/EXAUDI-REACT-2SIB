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
  );
}

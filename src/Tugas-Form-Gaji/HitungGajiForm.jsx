  import { useState } from "react";
  import InputField from "./components/InputField";

  export default function HitungGajiForm() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [gaji, setGaji] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [status, setStatus] = useState("");
    const [showResult, setShowResult] = useState(false);

    // Validasi (3 syarat per input)
    const errNama = !nama ? "Nama wajib diisi" : nama.length < 3 ? "Minimal 3 huruf" : /\d/.test(nama) ? "Tidak boleh angka" : "";
    const errEmail = !email ? "Email wajib diisi" : !email.includes("@") ? "Harus pakai @" : email.length < 5 ? "Terlalu pendek" : "";
    const errGaji = !gaji ? "Gaji wajib diisi" : isNaN(gaji) ? "Harus angka" : gaji < 1000000 ? "Minimal 1 Juta" : "";

    const isValid = !errNama && !errEmail && !errGaji && jabatan && status;

    return (
      // Container Utama: Membuat form tepat di tengah layar dengan background halus
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        
        {/* Card Form: Putih bersih, sudut sangat bulat, dan bayangan dalam */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md">
          
          <header className="mb-8">
            <h2 className="text-2xl font-extrabold text-center text-slate-800 tracking-tight">
              Form Penggajian <span className="text-blue-600">Karyawan</span>
            </h2>
            <p className="text-center text-slate-400 text-sm mt-1">Lengkapi data untuk menghitung THP</p>
          </header>
          
          {/* Menggunakan space-y agar antar input otomatis ada jaraknya */}
          <div className="space-y-5">
            <InputField label="Nama Lengkap" type="text" placeholder="Masukkan nama..." value={nama} onChange={(e) => setNama(e.target.value)} error={errNama} />
            <InputField label="Email Kantor" type="email" placeholder="contoh@kantor.com" value={email} onChange={(e) => setEmail(e.target.value)} error={errEmail} />
            <InputField label="Gaji Pokok (Rp)" type="number" placeholder="Contoh: 5000000" value={gaji} onChange={(e) => setGaji(e.target.value)} error={errGaji} />

            {/* Grid untuk Dropdown agar sejajar kiri-kanan */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-slate-700 font-bold text-sm mb-1 ml-1">Jabatan</label>
                <select 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-600"
                  onChange={(e) => setJabatan(e.target.value)}
                >
                  <option value="">-- Pilih --</option>
                  <option value="Manager">Manager</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-slate-700 font-bold text-sm mb-1 ml-1">Status</label>
                <select 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-600"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">-- Pilih --</option>
                  <option value="Tetap">Tetap</option>
                  <option value="Kontrak">Kontrak</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tombol Submit: Muncul dengan animasi halus (Conditional Rendering) */}
          {isValid && (
            <button 
              onClick={() => setShowResult(true)} 
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Submit & Hitung Gaji
            </button>
          )}

          {/* Hasil Perhitungan: Dibuat seperti struk/nota kecil */}
          {showResult && isValid && (
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200 animate-in fade-in zoom-in duration-300">
              <h3 className="text-blue-800 font-bold text-center mb-4 uppercase tracking-widest text-xs">Hasil Perhitungan</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama</span>
                  <span className="font-bold text-slate-800">{nama}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Jabatan</span>
                  <span className="font-semibold text-slate-700">{jabatan} ({status})</span>
                </div>
                <div className="pt-3 border-t border-blue-200 flex justify-between items-center">
                  <span className="text-blue-800 font-bold text-base">Gaji Bersih</span>
                  <span className="text-xl font-black text-blue-600">
                    Rp {(gaji * 0.89).toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[10px] text-blue-400 text-center mt-2 italic">*Potongan PPN 11%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
// src/Tugas-Form-Gaji/components/InputField.jsx

export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="mb-4 text-left">
      {/* Label Input */}
      <label className="block text-gray-700 font-semibold mb-1">
        {label}
      </label>

      {/* Input Field dengan Border Merah jika ada Error */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-md outline-none transition duration-200 focus:ring-2 ${
          error 
            ? "border-red-500 focus:ring-red-200 bg-red-50" 
            : "border-gray-300 focus:ring-blue-300 bg-white"
        }`}
      />

      {/* Kriteria Tugas: Informasi error tampil sebagai alert di bawah inputan */}
      {error && (
        <div className="mt-1 flex items-center gap-1 text-red-600 text-xs font-medium bg-red-100 p-2 rounded border border-red-200 animate-pulse">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
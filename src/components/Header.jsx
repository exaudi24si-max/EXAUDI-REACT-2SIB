export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      <h2 className="text-xl font-bold text-gray-800">Panel Admin Apotek</h2>
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-gray-800">Apoteker Exaudi Banjarnahor</p>
          <p className="text-xs text-teal-600 font-medium">Admin Utama</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-700 font-bold shadow-sm">
          
        </div>
      </div>
    </header>
  );
}

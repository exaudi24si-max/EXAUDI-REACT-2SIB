// Komponen untuk mendemonstrasikan Responsive Design
function ResponsiveDemo() {
  return (
    <div className="mb-6">
      {/* Banner Info */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-4 mb-4 shadow-lg">
        <h3 className="font-bold text-lg mb-2">📱 Demo Responsive Design</h3>
        <p className="text-sm mb-3">
          Ubah ukuran browser untuk melihat perubahan layout (Grid System):
        </p>
        
        {/* Indikator Breakpoint yang aktif */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Default (mobile): 1 kolom
          </span>
          <span className="hidden sm:inline-block bg-green-400 text-black px-3 py-1 rounded-full font-bold">
            sm (640px+): 2 kolom
          </span>
          <span className="hidden lg:inline-block bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
            lg (1024px+): 3 kolom
          </span>
          <span className="hidden xl:inline-block bg-pink-400 text-black px-3 py-1 rounded-full font-bold">
            xl (1280px+): 4 kolom
          </span>
        </div>
      </div>

      {/* Visual Demo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-4">
        <div className="bg-red-200 p-4 rounded text-center">
          <p className="font-bold text-red-800">Kolom 1</p>
          <p className="text-xs text-red-600">Selalu muncul</p>
        </div>
        <div className="hidden sm:block bg-blue-200 p-4 rounded text-center">
          <p className="font-bold text-blue-800">Kolom 2</p>
          <p className="text-xs text-blue-600">Muncul di sm (640px+)</p>
        </div>
        <div className="hidden lg:block bg-green-200 p-4 rounded text-center">
          <p className="font-bold text-green-800">Kolom 3</p>
          <p className="text-xs text-green-600">Muncul di lg (1024px+)</p>
        </div>
        <div className="hidden xl:block bg-purple-200 p-4 rounded text-center">
          <p className="font-bold text-purple-800">Kolom 4</p>
          <p className="text-xs text-purple-600">Muncul di xl (1280px+)</p>
        </div>
      </div>

      {/* Keterangan Breakpoint */}
      <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600">
        <p className="font-semibold mb-1">Breakpoint Tailwind:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-mono bg-gray-200 px-1 rounded">default</span>: 0px - 639px (mobile)</li>
          <li><span className="font-mono bg-gray-200 px-1 rounded">sm:</span> 640px - 1023px (tablet)</li>
          <li><span className="font-mono bg-gray-200 px-1 rounded">lg:</span> 1024px - 1279px (laptop)</li>
          <li><span className="font-mono bg-gray-200 px-1 rounded">xl:</span> 1280px+ (desktop)</li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveDemo;
import { useState } from 'react';
import MovieSearchFilter from './MovieSearchFilter';
import ResponsiveDemo from './ResponsiveDemo';

function App() {
  // State untuk toggle Guest/Admin view
  const [viewMode, setViewMode] = useState('guest');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold">🎬 Koleksi Film Premium</h1>
          
          {/* Toggle Button Guest / Admin */}
          <div className="flex bg-indigo-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('guest')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                viewMode === 'guest' 
                  ? 'bg-white text-indigo-600 shadow' 
                  : 'text-white hover:bg-indigo-600'
              }`}
            >
              👤 Guest View
            </button>
            <button
              onClick={() => setViewMode('admin')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                viewMode === 'admin' 
                  ? 'bg-white text-indigo-600 shadow' 
                  : 'text-white hover:bg-indigo-600'
              }`}
            >
              ⚙️ Admin View
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Demo Responsive Design */}
        <ResponsiveDemo />
        
        {/* Search, Filter, dan Movie List */}
        <MovieSearchFilter viewMode={viewMode} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          <p className="mb-1">Pertemuan 4 - Framework Lanjutan</p>
          <p className="text-gray-400 text-xs">
            Data JSON • Search & Filter • Responsive Grid Design
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useState, useMemo } from 'react';
import data from './movies.json';
import GuestView from './GuestView';
import AdminView from './AdminView';

function MovieSearchFilter({ viewMode }) {
  // State untuk search dan 2 filter
  const [search, setSearch] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Ambil genre unik dari data
  const genres = useMemo(() => {
    return [...new Set(data.movies.map(m => m.genre))];
  }, []);

  // Logic filter
  const filteredMovies = useMemo(() => {
    return data.movies.filter(movie => {
      // 1 Kolom Search: judul atau sutradara
      const matchSearch = 
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.director.toLowerCase().includes(search.toLowerCase());
      
      // Filter 1: Genre
      const matchGenre = filterGenre === '' || movie.genre === filterGenre;
      
      // Filter 2: Status ketersediaan
      const matchStatus = 
        filterStatus === '' || 
        (filterStatus === 'tersedia' && movie.available) ||
        (filterStatus === 'kosong' && !movie.available);

      return matchSearch && matchGenre && matchStatus;
    });
  }, [search, filterGenre, filterStatus]);

  return (
    <div>
      {/* Section Search dan 2 Filter */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🔍 Pencarian & Filter
        </h2>
        
        {/* Responsive Grid: Mobile 1 kolom, Tablet 2, Desktop 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1 Kolom Search */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cari Film
            </label>
            <input
              type="text"
              placeholder="Ketik judul atau nama sutradara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Filter 1: Genre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter Genre
            </label>
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="">Semua Genre</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          {/* Filter 2: Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter Ketersediaan
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="">Semua Status</option>
              <option value="tersedia">Tersedia</option>
              <option value="kosong">Kosong</option>
            </select>
          </div>
        </div>

        {/* Info hasil filter */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <p>
            Menampilkan <span className="font-bold text-indigo-600">{filteredMovies.length}</span> dari {data.movies.length} film
          </p>
          {(search || filterGenre || filterStatus) && (
            <button 
              onClick={() => {setSearch(''); setFilterGenre(''); setFilterStatus('')}}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Render view sesuai mode */}
      {viewMode === 'guest' ? (
        <GuestView movies={filteredMovies} />
      ) : (
        <AdminView movies={filteredMovies} />
      )}
    </div>
  );
}

export default MovieSearchFilter;
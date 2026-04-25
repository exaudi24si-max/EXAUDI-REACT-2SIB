// ADMIN VIEW - Tampilan Tabel dengan baris dan kolom
function AdminView({ movies }) {
  return (
    <div className="overflow-x-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-4 text-left text-sm font-semibold">ID</th>
              <th className="p-4 text-left text-sm font-semibold">Poster</th>
              <th className="p-4 text-left text-sm font-semibold">Judul Film</th>
              <th className="p-4 text-left text-sm font-semibold">Sutradara</th>
              <th className="p-4 text-left text-sm font-semibold">Genre</th>
              <th className="p-4 text-left text-sm font-semibold">Tahun</th>
              <th className="p-4 text-left text-sm font-semibold">Rating</th>
              <th className="p-4 text-left text-sm font-semibold">Status</th>
              <th className="p-4 text-left text-sm font-semibold">Studio (Nested)</th>
              <th className="p-4 text-left text-sm font-semibold">Detail (Nested)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {movies.map((movie, index) => (
              <tr 
                key={movie.id} 
                className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="p-4 text-sm font-medium text-gray-900">{movie.id}</td>
                <td className="p-4">
                  <img 
                    src={movie.poster} 
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded shadow"
                  />
                </td>
                <td className="p-4">
                  <div className="font-medium text-gray-900">{movie.title}</div>
                </td>
                <td className="p-4 text-sm text-gray-700">{movie.director}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {movie.genre}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-700">{movie.year}</td>
                <td className="p-4 text-sm font-medium text-yellow-600">⭐ {movie.rating}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    movie.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {movie.available ? 'Tersedia' : 'Kosong'}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  {/* Nested: Studio */}
                  <div className="font-medium text-gray-800">{movie.studio.name}</div>
                  <div className="text-gray-500 text-xs">{movie.studio.country}</div>
                  <div className="text-gray-400 text-xs">Est. {movie.studio.founded}</div>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {/* Nested: Details */}
                  <div>{movie.details.duration}</div>
                  <div className="text-gray-500">{movie.details.language}</div>
                  <div className="font-medium text-indigo-600">{movie.details.budget}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {movies.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Tidak ada data yang ditemukan
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminView;
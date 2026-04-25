// GUEST VIEW - Tampilan Card yang menarik
function GuestView({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <div 
          key={movie.id} 
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          {/* Gambar Poster */}
          <div className="h-56 overflow-hidden relative">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-lg text-sm shadow">
              ⭐ {movie.rating}
            </div>
          </div>
          
          {/* Konten Card */}
          <div className="p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                {movie.genre}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                movie.available 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {movie.available ? 'Tersedia' : 'Habis'}
              </span>
            </div>
            
            <h3 className="font-bold text-lg mb-1 text-gray-800 truncate" title={movie.title}>
              {movie.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{movie.director}</p>
            
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>{movie.year}</span>
              <span>{movie.details.duration}</span>
            </div>
            
            {/* Nested Data: Studio */}
            <div className="border-t pt-3">
              <p className="text-xs text-gray-500 mb-1">Studio:</p>
              <p className="text-sm font-medium text-gray-700">{movie.studio.name}</p>
              <p className="text-xs text-gray-500">{movie.studio.country} • Est. {movie.studio.founded}</p>
            </div>
            
            {/* Nested Data: Details */}
            <div className="mt-3 pt-3 border-t flex justify-between text-xs text-gray-500">
              <span>{movie.details.language}</span>
              <span className="font-medium text-indigo-600">{movie.details.budget}</span>
            </div>
          </div>
        </div>
      ))}
      
      {movies.length === 0 && (
        <div className="col-span-full text-center py-10 text-gray-500">
          Tidak ada film yang ditemukan
        </div>
      )}
    </div>
  );
}

export default GuestView;
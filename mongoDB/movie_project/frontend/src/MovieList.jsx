import { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        console.log("FROM BACKEND:", data);
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg font-medium text-gray-600">
          Loading movies...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg font-medium text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-48 relative group">
            <img
              src={movie.posterImage}
              alt={movie.title}
              className="w-50 h-64 object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              +
            </button>
            <div className="p-3 bg-gray-800 rounded-b-lg">
              <h3 className="text-sm font-medium truncate mb-1">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                {movie.genre} • {movie.releaseYear}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-yellow-400">
                  <span className="mr-1">⭐</span>
                  {movie.rating}/10
                </span>
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-semibold">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {movies.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No movies found.</div>
      )}
    </div>
  );
}

export default MovieList;

import { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
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
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (!term) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(term.toLowerCase()) ||
          movie.genre.toLowerCase().includes(term.toLowerCase()) ||
          movie.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleAddMovie = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setFormData({
      title: "",
      genre: "",
      releaseYear: "",
      rating: "",
      description: "",
      posterImage: "",
    });
  };

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    rating: "",
    description: "",
    posterImage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add movie");
        }
        return res.json();
      })
      .then(() => {
        closeModal();
        fetchMovies();
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding movie: " + err.message);
      });
  };

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">MoviesHub</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-100 pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button
          onClick={handleAddMovie}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Movie
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-48 relative group">
            <img
              src={movie.posterImage}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-tr-2xl rounded-tl-2xl"
            />
            <button className="absolute top-2 right-2 w-6 h-6 bg-black cursor-pointer bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <svg
                stroke="#ffffff"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7L17 17M7 17L17 7"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
                <button className="bg-blue-700 hover:bg-blue-600 cursor-pointer px-3 py-1 rounded-full text-xs font-semibold">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z"
                      fill="#ffffff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredMovies.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No movies found.</div>
      )}

      {/* Add Movie Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                name="genre"
                placeholder="Genre"
                value={formData.genre}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="number"
                name="releaseYear"
                placeholder="Release Year"
                value={formData.releaseYear}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rating (0-10)"
                min="0"
                max="10"
                step="0.1"
                value={formData.rating}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="url"
                name="posterImage"
                placeholder="Poster Image URL"
                value={formData.posterImage}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="flex gap-2 justify-end pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 text-white"
                >
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;

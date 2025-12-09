import { useState } from "react";
import DataFetching from "./DataFetching";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchMovie";
import AddMovieModal from "./AddMovie";

function MovieList() {
  const { movies, loading, error, fetchMovies } = DataFetching();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    rating: "",
    description: "",
    posterImage: "",
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      setShowAddModal(false);
      fetchMovies();
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">MoviesHub</h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-green-600 rounded-full cursor-pointer hover:bg-green-700 transition"
        >
          + Add Movie
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      {showAddModal && (
        <AddMovieModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          closeModal={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}

export default MovieList;

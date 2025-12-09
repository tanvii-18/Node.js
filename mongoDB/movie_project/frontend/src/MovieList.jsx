import { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <div>
          {" "}
          <li key={movie.id}>{movie.title}</li>
          <p>{movie.description}</p>
          <p>{movie.genre}</p>
          <p>{movie.releaseYear}</p>
          <p>{movie.rating}</p>
        </div>
      ))}
    </ul>
  );
}
export default MovieList;

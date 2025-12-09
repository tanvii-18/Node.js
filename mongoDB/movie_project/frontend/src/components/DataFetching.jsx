import { useState, useEffect } from "react";

export default function DataFetching() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movies");
        return res.json();
      })
      .then((data) => {
        console.log("FROM BACKEND:", data);
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, error, fetchMovies };
}

function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 w-48 relative group">
      <img
        src={movie.posterImage}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-tr-2xl rounded-tl-2xl"
      />

      <div className="p-3 bg-gray-800 rounded-b-lg">
        <h3 className="text-sm font-medium truncate">{movie.title}</h3>
        <p className="text-xs text-gray-400">
          {movie.genre} • {movie.releaseYear}
        </p>
        <p className="text-xs text-yellow-400 mt-1">⭐ {movie.rating}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;

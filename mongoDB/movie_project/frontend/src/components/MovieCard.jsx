function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 w-48 relative group">
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
        <h3 className="text-sm font-medium truncate mb-1">{movie.title}</h3>
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
  );
}

export default MovieCard;

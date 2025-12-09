function SearchBar({ searchTerm, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={handleSearch}
      className="w-100 pl-4 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white"
    />
  );
}

export default SearchBar;

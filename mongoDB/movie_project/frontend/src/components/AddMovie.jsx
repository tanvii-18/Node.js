function AddMovieModal({
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4"> Add New Movie</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="input"
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="input"
          />

          <input
            type="number"
            name="releaseYear"
            placeholder="Year"
            value={formData.releaseYear}
            onChange={handleInputChange}
            className="input"
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="input"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="input"
          />

          <input
            type="url"
            name="posterImage"
            placeholder="Poster URL"
            value={formData.posterImage}
            onChange={handleInputChange}
            className="input"
          />

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovieModal;

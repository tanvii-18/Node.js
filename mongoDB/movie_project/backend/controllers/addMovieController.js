import movies from "../models/movieModel.js";

export const addMovie = async (req, res) => {
  try {
    const { title, description, releaseYear } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Poster image is required!" });
    }

    const posterImage = req.file.path;

    if (!title || !description || !releaseYear) {
      return res.status(400).json({
        error:
          "title, description, realse-year and Movie Poster must required !",
      });
    }

    const movie = new movies({ title, description, releaseYear, posterImage });
    await movie.save();

    res.json({ message: "movie added!", movie });
  } catch (error) {
    console.log("catch block", error);
    res.status(500).json({ error: "error in adding data" });
  }
};

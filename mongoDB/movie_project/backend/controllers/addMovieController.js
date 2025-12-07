import movies from "../models/movieModel.js";

export const addMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, posterImage } = req.body;

    if (!title || !description || !releaseYear || !posterImage) {
      return res.status(400).json({
        error:
          "title, description, realse-year and Movie Poster must required !",
      });
    }

    const movie = new movies(req.body);
    await movie.save();

    res.json({ message: "movie added!", movie });
  } catch (error) {
    res.json({ error: "error in adding data" });
  }
};

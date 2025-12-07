import movies from "../models/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const movieList = await movies.find();
    res.json(movieList);
  } catch (err) {
    res.json({ err: "error in fetching data" });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const findMovie = await movies.findById(id);
    res.json(findMovie);
  } catch (error) {
    res.json({ err: "error in fetching data" });
  }
};

import movies from "../models/movieModel.js";

export const addMovie = async (req, res) => {
  const movie = new movies(req.body);
  await movie.save();
  res.json({ message: "Product added!", movie });
};

export const getMovies = async (req, res) => {
  try {
    const movieList = await movies.find();
    res.json(movieList);
  } catch (err) {
    res.json({ err: "server error" });
  }
};

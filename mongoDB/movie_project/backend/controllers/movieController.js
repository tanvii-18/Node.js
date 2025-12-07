import movies from "../models/movieModel";
import mongoose from "mongoose";

export const addMovie = async (req, res) => {
  const movieData = {
    title: "saiyaara",
    description: "abc",
    genre: "abc",
    releaseYear: 2025,
    posterImage: "abc",
  };

  const movie = new movies(movieData);
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

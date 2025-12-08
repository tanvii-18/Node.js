import movies from "../models/movieModel.js";
import mongoose from "mongoose";

export const addMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      releaseYear,
      genre = [],
      duration = 0,
      cast = [],
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Poster image is required!" });
    }

    const posterImage = req.file.path;

    if (!title || !description || !releaseYear) {
      return res.status(400).json({
        error: "title, description, releaseYear and Movie Poster are required!",
      });
    }

    const movie = new movies({
      title,
      description,
      releaseYear,
      posterImage,
      genre,
      duration,
      cast,
    });
    await movie.save();

    res.json({ message: "movie added!", movie });
  } catch (error) {
    console.log("catch block", error);
    res.status(500).json({ error: "error in adding data" });
  }
};

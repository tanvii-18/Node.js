import movies from "../models/movieModel";
import mongoose from "mongoose";

export const addMovie = async (req, res) => {
  const product = new movies({
    title: "saiyaara",
    description: "abc",
    gener: "abc",
    releaseYear: "2025",
    posterImage: "abc",
  });
  await product.save();
  res.json({ message: "Product added!", product });
};

addMovie;

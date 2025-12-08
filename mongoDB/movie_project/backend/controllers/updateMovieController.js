import mongoose from "mongoose";
import movies from "../models/movieModel.js";

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Id!" });
    }

    const updateData = await movies.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateData) {
      return res.status(404).json({ message: "movie not found!" });
    }

    res
      .status(200)
      .json({ message: "movie-infos updated! ", movies: updateData });
  } catch (error) {
    res.status(400).json({ message: "update failed", error: error.message });
  }
};

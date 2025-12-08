import movies from "../models/movieModel.js";
import { ObjectId } from "mongodb";

export const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Movie ID format" });
    }

    const result = await movies.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "delete Failed!", error: message });
  }
};

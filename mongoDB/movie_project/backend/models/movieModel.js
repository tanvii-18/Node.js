import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
    default: "English",
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  posterImage: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
});

export default mongoose.model("Movies", movieSchema);

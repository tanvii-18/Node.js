import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: string,
    require: true,
  },
  description: {
    type: string,
    require: true,
  },
  gener: {
    type: string,
    require: true,
  },
  releaseYear: {
    type: Number,
    require: true,
  },
  posterImage: {
    type: string,
    imageUrl: string,
    require: true,
  },
});

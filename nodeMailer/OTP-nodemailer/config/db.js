import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("mongoDB connected");
  } catch (error) {
    console.log("error in mongodb connection", error);
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("http://localhost:27017/movies");
    console.log("database connected");
  } catch (error) {
    console.log("error in connection", error);
  }
};

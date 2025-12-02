import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connection("mongodb://localhost:27017/store");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Database Connection Failed", err);
  }
};

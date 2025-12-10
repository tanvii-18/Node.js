import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/products")
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.error("Error in connecting MongoDB:", err);
  });

export default mongoose;

import mongoose from "mongoose";

// schema of products
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  category: String,
  brand: String,
  price: Number,
  rating: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);

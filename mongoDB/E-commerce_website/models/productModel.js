import mongoose from "mongoose";

// schema of products
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Products", productSchema);

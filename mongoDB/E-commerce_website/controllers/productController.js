import products from "../models/productModel.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// get poducts
export const getProduct = async (req, res) => {
  try {
    const product = await products.find();
    res.json(product);
  } catch (err) {
    res.json({ err: "server error" });
  }
};

export const addProduct = async (req, res) => {
  const product = new products(req.body);
  await product.save();
  res.json({ message: "Product added!", product });
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const updatedProduct = await products.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

// DELETE Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    const objectId = new ObjectId(id);

    const result = await products.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};

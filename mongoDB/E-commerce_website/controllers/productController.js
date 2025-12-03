import products from "../models/productModel.js";

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

    const result = await products.updateOne({ _id: id }, { $set: req.body });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await products.findOne({ _id: id });

    res.json({ message: "Updated!", product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await products.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

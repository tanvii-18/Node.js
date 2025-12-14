import products from "../model/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const product = await products.find();
    res.json(product);
  } catch (err) {
    res.json({ err: "server error" });
  }
};

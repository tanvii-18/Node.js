import Product from "../model/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    let query = {};

    // Search by productName (case insensitive)
    if (req.query.name) {
      query.productName = { $regex: req.query.name, $options: "i" };
    }

    // Search by brand (exact match)
    if (req.query.brand) {
      query.brand = req.query.brand;
    }

    // Filter by category (exact match, from query parameter)
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by price range (min and max from query)
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = Number(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        query.price.$lte = Number(req.query.maxPrice);
      }
    }

    // Filter by rating above a given value
    if (req.query.minRating) {
      query.rating = { $gte: Number(req.query.minRating) };
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Sorting by price (asc or desc based on query parameter)
    let sortOptions = {};
    if (req.query.sort) {
      sortOptions.price = req.query.sort === "asc" ? 1 : -1;
    }

    // Build and execute query
    let productsQuery = Product.find(query);
    if (Object.keys(sortOptions).length > 0) {
      productsQuery = productsQuery.sort(sortOptions);
    }
    const products = await productsQuery.skip(skip).limit(limit).exec();

    // Total count and pages (j)
    const total = await Product.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    // Bonus: All filters work together (e.g., ?category=electronics&minPrice=100&minRating=4&sort=desc&page=1&limit=5)
    res.json({
      products,
      pagination: {
        currentPage: page,
        totalPages,
        total,
        limit,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "No product found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

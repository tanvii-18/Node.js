import Product from "../model/productModel.js";

export const getAllProducts = async (req, res) => {
  const totalAll = await Product.countDocuments({});
  console.log("TOTAL IN DB:", totalAll);

  try {
    let query = {};

    // search by name
    if (req.query.name) {
      query.productName = { $regex: req.query.name, $options: "i" };
    }

    // filter by brand
    if (req.query.brand) {
      query.brand = req.query.brand;
    }

    // filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }

    // price range
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = Number(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        query.price.$lte = Number(req.query.maxPrice);
      }
    }

    // rating filter
    if (req.query.minRating) {
      query.rating = { $gte: Number(req.query.minRating) };
    }

    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // sorting
    let sortOptions = {};
    if (req.query.sort) {
      sortOptions.price = req.query.sort === "asc" ? 1 : -1;
    }

    const total = await Product.countDocuments(query);

    // fetch products
    let productsQuery = Product.find(query);
    if (Object.keys(sortOptions).length > 0) {
      productsQuery = productsQuery.sort(sortOptions);
    }

    const products = await productsQuery.skip(skip).limit(limit);

    res.json({
      products,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        total,
        limit,
      },
    });
  } catch (error) {
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

import blogSchema from "../models/blogModel.js";

// post blogs
export const createBlog = async (req, res) => {
  try {
    const { title, content, author, image } = req.body;
    const newBlog = await blogSchema.create({
      title,
      content,
      author,
      image,
    });
    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// fetch all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await blogSchema.find().populate("author", "name email");
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// fetch by id
export const getBlogById = async (req, res) => {
  try {
    const blog = await blogSchema
      .findById(req.params.id)
      .populate("author", "name email");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// update
export const updateBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const updatedBlog = await blogSchema.findByIdAndUpdate(
      req.params.id,
      { title, content, image },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// delete
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogSchema.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

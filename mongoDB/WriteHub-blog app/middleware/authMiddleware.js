import user from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    const userId = req.cookies.userId;
    if (!userId) {
      return res.status(401).json({ message: "login required" });
    }
    const existingUser = await user.findById(userId);
    if (!existingUser) {
      return res.status(401).json({ message: "invalid user" });
    }
    req.user = existingUser;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default authMiddleware;

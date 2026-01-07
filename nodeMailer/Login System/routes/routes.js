import express from "express";
import {
  registerUser,
  verifyOTP,
  loginUser,
  home,
  logout,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/home", authMiddleware, home);

export default router;

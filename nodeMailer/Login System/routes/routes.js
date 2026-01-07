import express from "express";
import {
  signup,
  verifyOtp,
  login,
  home,
  logout,
} from "../controller/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/home", authMiddleware, home);

export default router;

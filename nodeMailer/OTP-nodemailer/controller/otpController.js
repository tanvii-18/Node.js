import { OTP } from "../model/otpModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const generateOTP = () => {
  console.log(100000 + Math.floor(Math.random() * 900000));
};

// generateOTP();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendOTP = () => {};

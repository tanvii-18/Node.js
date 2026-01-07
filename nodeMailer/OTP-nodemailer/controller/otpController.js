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

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  const expiryAt = new Date(Date.now() + 1000 * 60 * 2);

  try {
    await transporter.sendMail({
      from: `OTP Verification !! <${process.env.EMAIL}>`,
      to: email,
      subject: "OTP Testing !",
      text: `Your otp for verification is ${otp}, valid upto 2 minutes`,
    });
    await OTP.create({ email, otp, expiryAt });

    res.json({ message: "OTP Sent successfully !!" });
  } catch (err) {
    res.json({ message: "otp not sent !", err });
  }
};

import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  console.log("EMAIL:", process.env.EMAIL);
  console.log("PASS:", process.env.PASS);

  await transporter.sendMail({
    from: `Login-system! <${process.env.EMAIL}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It will expiry in 2 minuts.`,
  });
};

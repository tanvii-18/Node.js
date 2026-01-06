import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

const app = express();
dotenv.config();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const mailSender = async () => {
  await transporter.sendMail({
    from: `DAY 1!! <${process.env.EMAIL}>`,
    to: process.env.MYEMAIL,
    subject: "subject",
    text: "Hello, it's Monday",
  });
};

app.post("/mail", async (req, res) => {
  try {
    await mailSender();
    res.json({ message: "mail sent !" });
  } catch (err) {
    console.log(err);
    res.json({ message: "mail not sent !" });
  }
});

app.listen(4000, () =>
  console.log("server started on http://localhost:4000 !")
);

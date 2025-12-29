import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(3000, () => {
  console.log("server started! http://localhost:3000");
});

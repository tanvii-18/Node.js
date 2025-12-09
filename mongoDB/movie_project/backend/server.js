import { connectDB } from "./config/db.js";
import movieRouter from "./routes/movieRoute.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/movies", movieRouter);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000/api/movies");
});

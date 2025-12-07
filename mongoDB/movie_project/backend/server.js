import { connectDB } from "./config/db.js";
import movieRouter from "./routes/movieRoute.js";
import express from "express";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/movies", movieRouter);

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000/api/movies");
});

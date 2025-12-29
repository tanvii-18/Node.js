import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import blogRoutes from "./routes/blogRoute.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(3000, () => {
  console.log("server started! http://localhost:3000");
});

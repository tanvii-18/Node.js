import express from "express";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("http://localhost:3000/api/products");
});

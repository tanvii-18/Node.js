import express from "express";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/", productRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

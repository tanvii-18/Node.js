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

// {
//     "name": "Portable Phone Charger 10000mAh",
//     "price": 29.99,
//     "image": "https://example.com/images/powerbank.jpg",
//     "description": "Compact power bank with fast charging and dual USB ports.",
//     "category": "Electronics",
//     "stock": 300
//   }

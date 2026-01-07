import { connectDB } from "./config/db";
import express from "express";

const app = express();
app.use(express.json());
connectDB();

app.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
});

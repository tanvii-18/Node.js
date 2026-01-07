import { connectDB } from "./config/db.js";
import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());
connectDB();

app.use(cookieParser());

app.use("/", router);

app.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
});

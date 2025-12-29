import express from "express";
import { connectDB } from "./config/db";

const app = express();
app.use(express.json());

connectDB();

app.listen(2000, () => console.log(`Server running on http://localhost:2000`));

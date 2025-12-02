import express from "express";
import { addEmployees, readEmployees } from "./mongodb_driver.js";

const app = express();
app.use(express.json());

app.get("/api", async (req, res) => {
  const customer = await readEmployees();
  res.json(customer);
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});

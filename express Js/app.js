// Create a basic express Js server that returns “Server is Running Successfully”.

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running Successfully");
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});

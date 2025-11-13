// Create a server that writes the current date and time in a file every time a GET request is received.

import express from "express";

const app = express();

app.get("/", (req, res) => {
  const now = new Date();

  //   const hour = now.getHours();
  //   const min = now.getMinutes();
  //   const sec = now.getSeconds();
  //   console.log(hour, min, sec);
  res.send(`${now}`);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

//  Tasks
// Create an Express server using the Express module on port 5000.
// Serve HTML pages using fs.readFile():

// / → index.html
// /about → about.html
// /contact → contact.html
// Any other → 404.html
// Use path module to handle file paths.

// Log each request (URL + time) in logs/server.log.
// (Bonus) Add /data route that returns JSON response.

import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      console.log("Error in reading file", err);
      res.status(500).send("Error in reading file");
    } else {
      res.send(data);
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf8", (err, data) => {
    if (err) {
      console.log("Error in reading file", err);
      res.status(500).send("Error in reading file");
    } else {
      res.send(data);
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("contact.html", "utf8", (err, data) => {
    if (err) {
      console.log("Error in reading file", err);
      res.status(500).send("Error in reading file");
    } else {
      res.send(data);
    }
  });
});

app.use((req, res) => {
  res.status(404).send("<h2>Sorry that route doesn't exist!</h2>");
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});

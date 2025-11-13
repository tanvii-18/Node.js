// Create a server that returns JSON data when accessed from the browser.

import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/data", (req, res) => {
  const data = {
    posts: [
      { id: 1, title: "JSON Server Introduction", author: "John Doe" },
      { id: 2, title: "Getting Started with Mock APIs", author: "Jane Smith" },
    ],
    comments: [
      { id: 1, body: "Great post!", postId: 1 },
      { id: 2, body: "Very helpful.", postId: 2 },
    ],
    profile: {
      name: "typicode",
    },
  };

  res.json(data);
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

import express from "express";

const app = express();

const todos = [
  {
    id: 1,
    todo: "book reading",
    desc: "page no. 191 The mountain is you",
    isCompleted: true,
  },
  {
    id: 2,
    todo: "New skills",
    desc: "node.js , express",
    isCompleted: false,
  },
];

app.get("/", (req, res) => {
  res.json(todos);
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

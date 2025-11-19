import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// get todo By id
app.get("/api/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ err: "Todo Not Found!" });
  }
  res.json(todo);
});

//add tasks
let nextId = 3;
app.post("/api/todos", (req, res) => {
  const { todo, desc } = req.body;

  if (!todo || todo.trim() === "") {
    res.status(400).send("Todo must be add");
  }

  const newTodo = {
    id: nextId++,
    todo: todo.trim(),
    desc,
    isCompleted: false,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

//delete task
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // findindex find value in ascending order, if find value returns value and if not fount return -1
  const index = todos.findIndex((task) => task.id === id);

  if (index !== -1) {
    res.status(404).json({ err: "todo not found" });
  }

  todos.splice(index, 1);
  res.send("todo deleted");
});

app.listen(4000, () => {
  console.log("http://localhost:4000/api/todos");
});

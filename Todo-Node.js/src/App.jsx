import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.log("Error in fetching data", err));
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    fetch("http://localhost:4000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: newTask, desc: "" }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodo([...todo, newTodo]);
        setNewTask("");
      });
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodo(todo.filter((task) => task.id !== id));
    });
  };

  // const handleToggleComplete = (index) => {
  //   const updatedTasks = tasks.map((task, i) =>
  //     i === index ? { ...task, completed: !task.completed } : task
  //   );
  //   setTodo(updatedTasks);
  // };

  return (
    <div className="h-full w-full">
      <div className="h-auto w-96 m-auto py-8">
        <h1 className="text-center mb-2"> Todo App</h1>

        <div className="h-auto w-80 m-auto py-2 flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add task here..."
            className="border p-2 rounded-3xl"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 px-4 text-white rounded-4xl"
          >
            +
          </button>
        </div>

        {/* showing todos */}
        <div className="todo-section h-auto w-80 m-auto">
          <ul
            className="todo-list"
            style={{
              listStyle: "none",
              margin: "20px 0",
              textAlign: "start",
            }}
          >
            {todo.map((task) => (
              <li
                key={task.id}
                className={`todo-item ${task.isCompleted ? "completed" : ""}`}
              >
                <span className="task-text mb-2">
                  <strong>{task.todo}</strong>{" "}
                  <span className="text-[10px] text-gray-400">{task.desc}</span>
                </span>

                <div className="actions mb-4">
                  <button>{task.isCompleted ? "Completed" : "Pending"}</button>
                  <button
                    className="delete-btn text-red-700 ps-2 cursor-pointer"
                    onClick={handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

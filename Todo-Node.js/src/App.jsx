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
    if (newTask.trim() !== "") {
      setTodo([...todo, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTodo(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTodo(updatedTasks);
  };

  return (
    <div>
      <div>
        <h1>React Todo App</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* showing todos */}
      <div className="todo-section">
        {todo.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.isCompleted ? "completed" : ""}`}
          >
            <span className="task-text">
              <strong>{task.todo}</strong>{" "}
              <span className="text-[10px] text-gray-400">{task.desc}</span>
            </span>

            <div className="actions">
              <button>{task.isCompleted ? "Completed" : "Pending"}</button>
              <button className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const now = new Date().toDateString();
  console.log(now);

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
      body: JSON.stringify({ todo: newTask, desc: newDesc }),
    })
      .then((res) => res.json())
      .then((createTodo) => {
        setTodo((prev) => [...prev, createTodo]);
        setNewTask("");
        setNewDesc("");
      });
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodo((delTodo) => delTodo.filter((task) => task.id !== id));
    });
  };

  const handleToggleComplete = (id) => {
    fetch(`http://localhost:4000/api/todos/${id}`, { method: "PUT" }).then(
      () => {
        setTodo(
          todo.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
          )
        );
      }
    );

    console.log("click for toggle");
  };

  return (
    <div className="h-full w-ful">
      <h1 className="text-center text-3xl font-['Josefin_Sans'] my-4 text-white">
        {" "}
        Todo App
      </h1>

      <div className="h-auto w-[100%] m-auto py-8 flex">
        <div className="h-auto w-100 m-auto py-6 flex flex-col gap-4 p-4 shadow-[4px_4px_15px_rgba(0,0,0,0.3)] rounded-2xl bg-[#ffffff21]">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add task here..."
            className="border p-3 rounded-3xl text-[10px] border-white text-white"
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Add desc here..."
            className="border p-3 rounded-3xl text-[10px] border-white text-white"
          />{" "}
          <button
            onClick={handleAddTask}
            className="bg-blue-600 h-11 w-15 text-white rounded-3xl justify-end content-end cursor-pointer"
          >
            +
          </button>
        </div>

        {/* showing todos */}
        <div className="todo-section h-auto w-100 m-auto">
          <h2 className="flex flex-col">
            <strong className="text-white">Today's tasks</strong>
            <span className="text-[8px] text-gray-400">{now}</span>
          </h2>
          <ul
            className="todo-list"
            style={{
              listStyle: "none",
              margin: "20px 0",
              textAlign: "start",
            }}
          >
            {todo.map((task) => (
              <div className="flex flex-row w-[90%] justify-between items-center">
                <button onClick={() => handleToggleComplete(task.id)}>
                  {task.isCompleted ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z"
                        fill="#0b19ba"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                        fill="#0b19ba"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b19ba"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    </svg>
                  )}
                </button>
                <li
                  key={task.id}
                  className={`todo-item ${task.isCompleted ? "completed" : ""}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <div className="task-text mb-2 flex flex-col">
                    <p
                      className={
                        task.isCompleted
                          ? "line-through text-gray-400 transition-[2s ease] font-medium"
                          : "font-bold text-white"
                      }
                    >
                      {task.todo}
                    </p>{" "}
                    <span className="text-[10px] text-gray-400">
                      {task.desc}
                    </span>
                  </div>

                  <div className="actions mb-4">
                    <button
                      className="delete-btn text-red-700 ps-2 cursor-pointer"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                          stroke="#ba0b2e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                          stroke="#ba0b2e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

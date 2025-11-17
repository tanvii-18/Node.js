import { useState } from "react";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="m-5">Todo App</h2>

      <div className="flex flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Add todo..."
          className="h-[40px] w-[100%] bg-amber-600 rounded-2xl p-2"
        />
        <button>Add Todo</button>
      </div>

      {/* showing todos */}
      <div>
        <p>Todo</p>
      </div>
    </div>
  );
}

export default App;

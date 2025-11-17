import "./index.css";

function App() {
  return (
    <div>
      <h2>Todo App</h2>

      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Add todo..."
          className="h-[40px] w-[25%] bg-amber-600 rounded-2xl p-2"
        />
        <button>Add Todo</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => setCount(count - 1)}
        >
          discount
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => setCount(count + 1)}
        >
          count
        </button>
      </header>
    </div>
  );
}

export default App;

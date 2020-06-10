import React, { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";

export default () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [currentNumber, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" id="textinput" value={currentNumber}></input>
        </div>
        <div className="numbersRoot">
          {numbers.map((number) => (
            <button
              value={number}
              key={number}
              className="btn btn-outline-primary"
              onClick={(event) => setNumber(event.target.value)}
            >
              {number}
            </button>
          ))}
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            7
          </button>
          <button type="button" class="btn btn-outline-primary">
            8
          </button>
          <button type="button" class="btn btn-outline-primary">
            9
          </button>
          <button type="button" class="btn btn-info">
            x
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            4
          </button>
          <button type="button" class="btn btn-outline-primary">
            5
          </button>
          <button type="button" class="btn btn-outline-primary">
            6
          </button>
          <button type="button" class="btn btn-info">
            -
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            1
          </button>
          <button type="button" class="btn btn-outline-primary">
            2
          </button>
          <button type="button" class="btn btn-outline-primary">
            3
          </button>
          <button type="button" class="btn btn-info">
            +
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            0
          </button>
          <button type="button" class="btn btn-outline-success">
            .
          </button>
          <button type="button" class="btn btn-outline-success" id="equal">
            =
          </button>
        </div>
      </header>
    </div>
  );
};

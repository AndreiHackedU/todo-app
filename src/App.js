import React, { useState } from "react";

import "./App.css";

export default () => {
  const numbers = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "x"];
  const [currentNumber, setNumber] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div id="calculator">
          <div>
            <input type="text" id="textinput" value={currentNumber}></input>
          </div>
          <div className="numbersRoot">
            {numbers.map((number) => (
              <button
                value={number}
                key={number}
                className="btn btn-info"
                onClick={(event) => setNumber(event.target.value)}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="multiply">
            <div id="insideCalc">
              <button type="button" className="btn btn-info">
                0
              </button>

              <button type="button" className="btn btn-info">
                .
              </button>
              <button type="button" className="btn btn-info" id="equal">
                =
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

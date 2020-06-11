import React, { useState } from "react";

import "./App.css";

const sum = (a, b) => a + b;
const difference = (a, b) => a - b;
const multiply = (a, b) => a * b;
const calculate = (a, b, operator) => {
  if (operator === "+") {
    return sum(a, b);
  } else if (operator === "-") {
    return difference(a, b);
  } else {
    return multiply(a, b);
  }
};

export default () => {
  const numbers = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "x"];
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div id="calculator">
          <div>
            <h3>{`${firstNumber ? firstNumber : ""} ${
              operator ? operator : ""
            } ${secondNumber ? secondNumber : ""} = ${result}`}</h3>
          </div>
          <div className="numbersRoot">
            {numbers.map((number) => (
              <button
                value={number}
                key={number}
                className="btn btn-info"
                onClick={(event) => {
                  if (!firstNumber) {
                    setFirstNumber(parseFloat(event.target.value));
                  } else if (!operator) {
                    setOperator(event.target.value);
                  } else {
                    setSecondNumber(parseFloat(event.target.value));
                  }
                }}
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
              <button
                type="button"
                className="btn btn-info"
                id="equal"
                onClick={() =>
                  setResult(calculate(firstNumber, secondNumber, operator))
                }
              >
                =
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

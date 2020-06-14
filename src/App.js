import React, { useState } from "react";

import "./App.css";
import Button from "./Button";

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

const App = (props) => {
  const numbers = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "x"];
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(null);
  const assignNumber = (event) => {
    if (!firstNumber) {
      setFirstNumber(parseFloat(event.target.value));
    } else if (!operator) {
      setOperator(event.target.value);
    } else {
      setSecondNumber(parseFloat(event.target.value));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {props.name}
        <div id="calculator">
          <div>
            <div id="textinput" type="text">{`${
              firstNumber ? firstNumber : ""
            } ${operator ? operator : ""} ${
              secondNumber ? secondNumber : ""
            } = ${result ? result : "0"}`}</div>
          </div>
          <div className="numbersRoot">
            {numbers.map((number) => (
              <Button number={number} assignNumber={assignNumber} />
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
export default App;

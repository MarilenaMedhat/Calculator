const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn:not(.operator)");
const operators = document.querySelectorAll(".operator");

let currentInput = "";
let variableOne = "";
let variableTwo = "";
let operator = "";
let result = "";

function operate(variableOne, variableTwo, operator) {
  switch (operator) {
    case "+":
      return variableOne + variableTwo;
    case "-":
      return variableOne - variableTwo;
    case "*":
      return variableOne * variableTwo;
    case "/":
      if (variableTwo === 0) {
        return (display.textContent = "ntnt");
      }
      return variableOne / variableTwo;
    default:
      return variableOne;
  }
}
// determines variable one and two according to if an operator is pressed or not
// and sets character limit
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (result) {
      if (operator) {
        variableOne = result;
        variableTwo += value;
        display.textContent = value;
        return;
      }
      variableOne = value;
      variableTwo = "";
      result = "";
      operator = "";
      display.textContent = value;
      return;
    }

    if (!operator) {
      if (
        variableOne.length >= 7 ||
        (variableOne.includes(".") && value === ".")
      ) {
        return;
      }
      variableOne += value;
    } else {
      if (!variableTwo) {
        display.textContent = "";
      }
      if (
        variableTwo.length >= 7 ||
        (variableTwo.includes(".") && value === ".")
      ) {
        return;
      }
      variableTwo += value;
    }
    console.log({ variableOne, variableTwo });
    display.textContent += value;
  });
});

// extracts the operator value
// if equal is pressed calculates
operators.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if ("+*/-".includes(value) && !operator) {
      operator = value;
      //   display.textContent = value;
      return;
    }
    if (value === "=") {
      result = operate(Number(variableOne), Number(variableTwo), operator);

      // rounds result if it exceeds character limit
      if (`${result}`.includes(".")) {
        const roundedResult = parseFloat(result.toFixed(6));
        display.textContent = roundedResult;
        variableOne = roundedResult;
        variableTwo = "";
        operator = "";
        return;
      }
      display.textContent = result;
      variableOne = result;
      variableTwo = "";
      operator = "";
      return;
    }
  });
});

// sets functionality for clear button
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  variableOne = "";
  variableTwo = "";
  operator = "";
});

// sets functionality for sign change button
const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
  if (operator === "" && variableTwo === "") {
    variableOne = `${variableOne}`;
    if (variableOne.startsWith("-")) {
      variableOne = variableOne.slice(1);
    } else {
      variableOne = "-" + variableOne;
    }
    display.textContent = variableOne;
  } else if (variableTwo) {
    variableTwo = `${variableTwo}`;
    if (variableTwo.startsWith("-")) {
      variableTwo = variableTwo.slice(1);
    } else {
      variableTwo = "-" + variableTwo;
    }
    display.textContent = variableTwo;
  }
});

// sets functionality for percentage button
const percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
  if (variableOne && !variableTwo) {
    const percentageResult = Number(variableOne) / 100;
    variableOne = percentageResult;
    display.textContent = percentageResult;
  } else if (variableTwo) {
    const percentageResult = Number(variableTwo) / 100;
    variableTwo = percentageResult;
    display.textContent = percentageResult;
  }
});

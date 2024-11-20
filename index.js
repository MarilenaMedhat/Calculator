const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn:not(.operator)");
const operators = document.querySelectorAll(".operator");

let currentInput = "";
let variableOne = "";
let variableTwo = "";
let operator = "";

function operate(variableOne, variableTwo, operator) {
  switch (operator) {
    case "+":
      return variableOne + variableTwo;
    case "-":
      return variableOne - variableTwo;
    case "*":
      return variableOne * variableTwo;
    case "/":
      return variableOne / variableTwo;
    default:
      return variableOne;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!operator) {
      if (variableOne.length >= 7) {
        return;
      }
      variableOne += value;
    } else {
      if (!variableTwo) {
        display.textContent = "";
      }
      if (variableTwo.length >= 7) {
        return;
      }
      variableTwo += value;
    }
    console.log({ variableOne, variableTwo });
    display.textContent += value;
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if ("+*/-".includes(value) && !operator) {
      operator = value;
      //   display.textContent = value;
      return;
    }
    if (value === "=") {
      const result = operate(
        Number(variableOne),
        Number(variableTwo),
        operator
      );
      display.textContent = result;
      variableOne = result;
      variableTwo = "";
      operator = "";
      return;
    }
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  variableOne = "";
  variableTwo = "";
  operator = "";
});
// const sign = document.querySelector("#sign");
// sign.addEventListener("click", () => {
//   currentInput = "-" + currentInput;
//   display.textContent = currentInput;
// });

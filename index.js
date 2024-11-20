function add(a, b) {
  const variableOne = a;
  const variableTwo = b;
  const operator = "+";
  operation(variableOne, variableTwo, operator);
  return a + b;
}

function substract(a, b) {
  const variableOne = a;
  const variableTwo = b;
  const operator = "-";
  operation(variableOne, variableTwo, operator);
  return a - b;
}

function multiply(a, b) {
  const variableOne = a;
  const variableTwo = b;
  const operator = "*";
  operation(variableOne, variableTwo, operator);
  return a * b;
}

function divide(a, b) {
  const variableOne = a;
  const variableTwo = b;
  const operator = "/";
  operation(variableOne, variableTwo, operator);
  return a / b;
}

function operation(variableOne, variableTwo, operator) {
  return console.log(variableOne, variableTwo, operator);
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    // if(value==="+"){
    //     add();
    // }if(value==="-"){
    //     substract();
    // }if(value==="*"){
    //     multiply();
    // if(value==="/"){
    //     divide();
    currentInput += value;
    display.textContent = currentInput;
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  currentInput = "";
});
const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
  currentInput = "-" + currentInput;
  display.textContent = currentInput;
});

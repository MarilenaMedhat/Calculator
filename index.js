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

operation(multiply(5, 5));

// Variables
let result;
let number;
let operator;
let number1;
let hasPoint = false;
let screenValue = "";
let operation = [];

// Functions
const additionFunction = function (num1, num2) {
  return Number(num1) + Number(num2);
};

const multiplyFunction = function (num1, num2) {
  return num1 * num2;
};

const divideFunction = function (num1, num2) {
  return num1 / num2;
};

const subtractFunction = function (num1, num2) {
  return num1 - num2;
};

// Chooses operation, fixes decimal place
const operate = function (operator, num1, num2) {
  if (operator === "-") {
    result = subtractFunction(num1, num2);
  } else if (operator === "+") {
    result = additionFunction(num1, num2);
  } else if (operator === "*") {
    result = multiplyFunction(num1, num2);
  } else if (operator === "/") {
    result = divideFunction(num1, num2);
  }

  console.log(typeof result);
  if (`${result}`.length >= 7) {
    return result.toFixed(4);
  } else return result;
};

// updates screen with number if it's not an operator
const checkForOperator = function (value) {
  if (value !== "+" && value !== "-" && value !== "/" && value !== "*") {
    screenValue += value;
    // console.log(screenValue);
  }
};

const updateScreen = function (value) {
  if (value === "." && hasPoint === false) {
    hasPoint = true;
    screen.value += ".";
    checkForOperator(value);
  } else if (value !== ".") {
    screen.value += value;
    checkForOperator(value);
  }
};

const pushToOperation = function (num, operator) {
  operation.push(num);
  operation.push(operator);
  screenValue = "";
  // console.log(operation);
};

const equalNotPressed = function (value) {
  if (operation.length === 2) {
    operation.push(screenValue);
    result = operate(operation[1], operation[0], operation[2]);
    // console.log(result);
    operation = [];
    screenValue = "";
    screen.value = "";
    updateScreen(result);
    updateScreen(value);
  }
};

// const getNumber = function () {
//   number = screenValue;
//   screenValue = "";
// };

// const getNumber1 = function () {
//   number1 = screenValue;
// };

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const addition = document.querySelector(".add");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".mc");
const mPlus = document.querySelector(".M--plus");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
let screen = document.querySelector(".screen");

one.addEventListener("click", function () {
  updateScreen("1");
});
two.addEventListener("click", function () {
  updateScreen("2");
});
three.addEventListener("click", function () {
  updateScreen("3");
});
four.addEventListener("click", function () {
  updateScreen("4");
});
five.addEventListener("click", function () {
  updateScreen("5");
});
six.addEventListener("click", function () {
  updateScreen("6");
});
seven.addEventListener("click", function () {
  updateScreen("7");
});
eight.addEventListener("click", function () {
  updateScreen("8");
});
nine.addEventListener("click", function () {
  updateScreen("9");
});
addition.addEventListener("click", function () {
  // getNumber();
  // operator = "+";
  updateScreen("+");
  equalNotPressed("+");
  hasPoint = false;
  pushToOperation(screenValue, "+");
});
divide.addEventListener("click", function () {
  // getNumber();
  // operator = "/";
  updateScreen("/");
  equalNotPressed("/");
  hasPoint = false;
  pushToOperation(screenValue, "/");
});
multiply.addEventListener("click", function () {
  // getNumber();
  // operator = "*";
  updateScreen("*");
  equalNotPressed("*");
  hasPoint = false;
  pushToOperation(screenValue, "*");
});
subtract.addEventListener("click", function () {
  // getNumber();
  // operator = "-";
  updateScreen("-");
  equalNotPressed("-");
  hasPoint = false;
  pushToOperation(screenValue, "-");
});
clear.addEventListener("click", function () {
  operation = [];
  screenValue = "";
  hasPoint = false;
  screen.value = "";
});
mPlus;
zero.addEventListener("click", function () {
  updateScreen("0");
});
point.addEventListener("click", function () {
  updateScreen(".");
});

equal.addEventListener("click", function () {
  // getNumber1();
  operation.push(screenValue);
  // console.log(operation);
  result = operate(operation[1], operation[0], operation[2]);
  operation = [];
  screenValue = "";
  screen.value = "";
  updateScreen(result);
});

// let example = 1.001923458102394;
// console.log(example.toFixed(4));

/* 

let example = []
example.push[number]
example.push[operator]
example.push[number1]

if (example.length = 2) {
   = operator(example[0], example[1], example[2])
  updateScreen(result)
}

*/

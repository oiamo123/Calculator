const button = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const operators = ["+", "-", "*", "/", "^"];
let toOperate = [];
let operator = false;
let number = "";

// operates on toOperate Array... Loops through the array while it includes a certain operator. Takes the operator position and splices -1 + 3 position
const operate = function () {
  let num;
  while (toOperate.includes("^")) {
    for (let i = 0; i < toOperate.length; i++) {
      if (toOperate[i] === "^") {
        num = toOperate[i - 1] ** toOperate[i + 1];
        toOperate.splice(i - 1, 3, num);
      }
    }
  }
  while (toOperate.includes("*")) {
    for (let i = 0; i < toOperate.length; i++) {
      if (toOperate[i] === "*") {
        num = toOperate[i - 1] * toOperate[i + 1];
        toOperate.splice(i - 1, 3, num);
      }
    }
  }
  while (toOperate.includes("/")) {
    for (let i = 0; i < toOperate.length; i++) {
      if (toOperate[i] === "/") {
        num = toOperate[i - 1] / toOperate[i + 1];
        toOperate.splice(i - 1, 3, num);
      }
    }
  }
  while (toOperate.includes("+")) {
    for (let i = 0; i < toOperate.length; i++) {
      if (toOperate[i] === "+") {
        num = Number(toOperate[i - 1]) + Number(toOperate[i + 1]);
        toOperate.splice(i - 1, 3, num);
      }
    }
  }
  while (toOperate.includes("-")) {
    for (let i = 0; i < toOperate.length; i++) {
      if (toOperate[i] === "-") {
        num = toOperate[i - 1] - toOperate[i + 1];
        toOperate.splice(i - 1, 3, num);
      }
    }
  }
  number = toOperate[0];
  number = String(number);
  if (toOperate[0].length > 20) {
    screen.value = "Thats a big ass numba bro";
  } else {
    screen.value = toOperate[0];
  }
  toOperate = [];
};

document.querySelector("body").addEventListener("keypress", function (e) {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "/" ||
    e.key === "*" ||
    e.key === "-" ||
    e.key === "+" ||
    e.key === "^" ||
    e.key === "Enter" ||
    e.key === "Delete" ||
    e.key === "."
  ) {
    mainFunctions(e.key);
  }
});

button.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonTC = button.textContent;
    mainFunctions(buttonTC);
  });
});

const mainFunctions = function (value) {
  // Checks to see if button pressed is equal button
  if (value === "=" || value === "Enter") {
    toOperate.push(number);
    operate();

    // Checks to see if button is an operator
  } else if (operators.includes(value) && operator === false) {
    operator = true;
    toOperate.push(number);
    toOperate.push(value);
    number = "";
    screen.value += value;

    // If a button is not an operator (a number, . or clear)
  } else if (!operators.includes(value)) {
    // button is clear
    if (value === "MC" || value === "Delete") {
      screen.value = "";
      number = "";
      toOperate = [];

      // button isn't clear or "." (A number)
    } else if (value !== "MC" && value !== ".") {
      operator = false;
      number += value;
      screen.value += value;

      //button is "."
    } else if (value === ".") {
      console.log(number);
      if (!number.includes(".")) {
        number += value;
        screen.value += value;
        operator = false;
      }
    }
  }
};

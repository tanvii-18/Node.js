// Create a module with multiple functions: add, subtract, multiply, and divide — import all and use them.

const add = (a, b) => {
  console.log(a + b);
};

const sub = (a, b) => {
  console.log(a - b);
};

const multiply = (a, b) => {
  console.log(a * b);
};

const divide = (a, b) => {
  console.log(a / b);
};

module.exports = { add, sub, multiply, divide };

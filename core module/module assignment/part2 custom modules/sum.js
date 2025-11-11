// Create a module that exports a function to add two numbers and import it in another file.

const sum = (a, b) => {
  console.log(a + b);
};

module.exports = sum;

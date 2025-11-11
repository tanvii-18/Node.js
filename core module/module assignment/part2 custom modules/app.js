// Create a custom module that exports a function to print your name.

const name = require("./name.js");
const sum = require("./sum.js");
const { add, sub, multiply, divide } = require("./mathematical-operations.js");

name("tanvi");
sum(4, 5);

// mathematical
add(7, 8);
sub(9, 6);
multiply(6, 9);
divide(20, 8);

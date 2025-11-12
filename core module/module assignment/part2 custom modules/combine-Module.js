// Combine all above modules in one project and use them together in a single app.js file.

const wordcount = require("./countNum");
const dateTimeUtility = require("./dateUtility");
const fileExistOrNot = require("./file-checking");
const { add, sub, multiply, divide } = require("./mathematical-operations");
const name = require("./name");
const randomNumber = require("./randomNum");

wordcount("Hello Node.js");
dateTimeUtility();
fileExistOrNot();
name("Github");
randomNumber();

// mathematical
add(5, 8);
sub(90, 8);
multiply(6, 9);
divide(5, 7);

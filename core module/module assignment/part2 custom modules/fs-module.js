// Create a module that writes data to a file, and another module that reads data from the same file.

const fs = require("fs");

fs.writeFileSync(
  "notes.txt",
  "Node.js is open-source, javaScript runtime environment"
);

const readfile = fs.readFileSync("notes.txt", "utf8");
console.log(readfile);

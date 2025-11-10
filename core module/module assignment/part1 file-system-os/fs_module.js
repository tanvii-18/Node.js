// Create a new file and write some text inside it.
// Read the content of a file and display it in the console.
// Append new content to an existing file.
// Delete a specific file.

const fs = require("fs");

fs.writeFileSync("index.html", "Hello, from Node.js");

const read = fs.readFileSync("index.html", "utf8");
console.log(read);

fs.appendFileSync(
  "index.html",
  "\n Node.js is a open-source , javaScript runtime environment."
);

fs.unlinkSync("index.html", (err) => {
  if (err) {
    console.log("There is an Error in deleting file");
  }
  console.log("File delete successfully!!");
});

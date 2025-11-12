// Create a module that checks if a file exists before performing read/write operations.

const fs = require("fs");

export const fileExistOrNot = () => {
  if (fs.existsSync("index.txt")) {
    fs.readFile("index.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file exist", data);
      }
    });
  } else {
    console.log("file doesn't exist");
  }
};

// Tasks
// Create an HTTP server using the http module on port 5000.

// Serve HTML pages using fs.readFile():

// / → index.html
// /about → about.html
// /contact → contact.html
// Any other → 404.html
// Use path module to handle file paths.

// Log each request (URL + time) in logs/server.log.

// (Bonus) Add /data route that returns JSON response.

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filepath;
  const now = new Date();

  console.log(`[request time : ${now.toISOString()}] Request URL : ${req.url}`);

  // json data
  if (req.url === "/jsondata") {
    const data = {
      BookName: "Atomic habits",
      price: 5.89,
      rating: "4.5 / 5",
      inStock: true,
    };

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
    return;
  }

  if (req.url === "/") {
    filepath = path.join(__dirname, "home.html");
  }
  //   about page
  else if (req.url == "/about") {
    filepath = path.join(__dirname, "about.html");
  }

  //   contact page
  else if (req.url == "/contact") {
    filepath = path.join(__dirname, "contact.html");
  }

  //   client error
  else {
    filepath = path.join(__dirname, "404.html");
  }

  // read data from another files
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("server Error");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});

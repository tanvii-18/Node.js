// Create a basic HTTP server that returns “Server is Running Successfully”.

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("server is running successfully");
});

server.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

// Create a server that returns JSON data when accessed from the browser.

const jsonServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
});

jsonServer.listen(5000, () => {
  console.log("http://localhost:5000");
});

const data = {
  posts: [
    { id: 1, title: "JSON Server Introduction", author: "John Doe" },
    { id: 2, title: "Getting Started with Mock APIs", author: "Jane Smith" },
  ],
  comments: [
    { id: 1, body: "Great post!", postId: 1 },
    { id: 2, body: "Very helpful.", postId: 2 },
  ],
  profile: {
    name: "typicode",
  },
};

// Create a server that writes the current date and time in a file every time a GET request is received.

const fs = require("fs");

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    const now = new Date().toString();

    fs.appendFile("date.txt", now, (err) => {
      console.error("Error writing to file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");
    });
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(now);
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Only GET requests are allowed");
  }
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

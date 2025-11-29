const express = require("express");
const app = express();

// Fake user (in real app this comes from token/session)
const currentUser = { name: "John", role: "admin" };

// MIDDLEWARE 1: Fake login check
function requireLogin(req, res, next) {
  if (!currentUser) {
    return res.send("Login first! Blocked by middleware");
  }
  req.user = currentUser; // attach user to request
  next(); // continue
}

// MIDDLEWARE 2: Admin only
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.send("Admins only! Blocked by middleware");
  }
  next();
}

// Now the routes become super short and clean
app.get("/", (req, res) => {
  res.send("Home - everyone can see");
});

app.get("/profile", requireLogin, (req, res) => {
  res.send(`Hello ${req.user.name}, welcome to your profile!`);
});

app.get("/admin", requireLogin, requireAdmin, (req, res) => {
  res.send("Welcome to secret admin panel!");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

🛒 Express + MongoDB Product Filter API

This project is a backend REST API built using Node.js, Express, MongoDB, and Mongoose.
The main goal is to demonstrate how to fetch and filter product data using different query parameters like search, category, price range, rating, sorting, and pagination.

The API is designed for learning and practical purposes, focusing on real-world backend concepts such as dynamic queries, pagination logic, and proper error handling. No frontend is included.

🚀 Features

Fetch all products

Fetch a single product by ID

Search products by product name (case-insensitive)

Filter products by brand and category

Combine multiple filters together (name, category, brand)

Filter products by price range (min & max)

Filter products by rating above a given value

Sort products by price (ascending or descending)

Pagination with page number, limit, total count, and total pages

Graceful error handling when no products are found

🧠 Pagination Explained (Student Friendly)

Pagination helps divide large datasets into smaller chunks.
Instead of sending all products at once, the API sends a limited number of products per page.

Example:

Total products: 100

Limit: 10

Page 1 → Products 1–10

Page 2 → Products 11–20

Page 3 → Products 21–30

This improves performance and makes APIs scalable.

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Postman (for API testing)

📂 Product Schema Fields

Each product contains:

productName

category

brand

price

rating

description

createdAt

🔍 Sample API Endpoints

GET /api/products → Fetch all products

GET /api/products/:id → Fetch product by ID

GET /api/products?name=iPhone → Search by product name

GET /api/products?brand=Apple → Filter by brand

GET /api/products?category=electronics → Filter by category

GET /api/products?minPrice=500&maxPrice=2000 → Price range filter

GET /api/products?minRating=4 → Rating filter

GET /api/products?sort=asc → Sort by price (ascending)

GET /api/products?page=1&limit=5 → Pagination

GET /api/products?category=electronics&minPrice=500&minRating=4&sort=desc&page=1&limit=5 → Combined filters (Bonus)

✅ Project Outcome

This project demonstrates how to:

Build scalable REST APIs

Use MongoDB queries dynamically

Implement pagination and sorting logic

Test APIs using Postman

Handle real-world backend filtering scenarios

🛒 Express + MongoDB Product Filter API

A backend REST API built using Node.js, Express, MongoDB, and Mongoose.
This project focuses on real-world backend concepts like filtering, searching, sorting, and pagination using query parameters.

It’s designed purely for learning and practical understanding. No frontend involved.

🚀 Features

Fetch all products

Fetch a single product by ID

Search products by product name (case-insensitive)

Filter products by brand

Filter products by category

Combine multiple filters (name + category + brand)

Filter products by price range (min & max)

Filter products by rating above a given value

Sort products by price (ascending or descending)

Pagination with:

Page number

Limit

Total product count

Total pages

Graceful error handling when no products are found

🧠 Pagination Explained (Student-Friendly)

Pagination is used to divide large datasets into smaller parts.
Instead of sending all products at once, the API sends a limited number of products per request.

Example:

Total products: 100

Limit: 10

Page Products Returned
Page 1 1 – 10
Page 2 11 – 20
Page 3 21 – 30

This improves performance, reduces load, and makes APIs scalable.

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Postman (for API testing)

📂 Product Schema Fields

Each product document contains the following fields:

productName

category

brand

price

rating

description

createdAt

🔍 API Endpoints
📌 Basic Routes
GET /api/products

Fetch all products

GET /api/products/:id

Fetch a product by its ID

🔎 Search & Filter Routes
GET /api/products?name=iPhone

Search by product name (case-insensitive)

GET /api/products?brand=Apple

Filter by brand

GET /api/products?category=electronics

Filter by category

GET /api/products?minPrice=500&maxPrice=2000

Filter by price range

GET /api/products?minRating=4

Filter by rating above a given value

🔃 Sorting
GET /api/products?sort=asc

Sort by price (ascending)

GET /api/products?sort=desc

Sort by price (descending)

📄 Pagination
GET /api/products?page=1&limit=5

Pagination with page number and limit

⭐ Bonus: Combined Filters
GET /api/products?category=electronics&minPrice=500&minRating=4&sort=desc&page=1&limit=5

Multiple filters working together in a single API call.

❌ Error Handling

If no products match the filter criteria, the API responds with:

{
"message": "No products found"
}

✅ Project Outcome

Through this project, you learn how to:

Build scalable REST APIs

Write dynamic MongoDB queries

Implement pagination and sorting logic

Handle real-world filtering scenarios

Test APIs efficiently using Postman

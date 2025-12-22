# 🛒 Express + MongoDB Product Filter API

A backend REST API built using Node.js, Express, MongoDB, and Mongoose.
This project focuses on real-world backend concepts like filtering, searching, sorting, and pagination using query parameters.

It’s designed purely for learning and practical understanding. No frontend involved.

Output Video : https://drive.google.com/file/d/1eZZ5YSgtLXjBCBg0G28rfCTSskTiI1xm/view?usp=sharing

## 🚀 Features

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

## 🧠 Pagination Explained (Student-Friendly)

Pagination is used to divide large datasets into smaller parts.
Instead of sending all products at once, the API sends a limited number of products per request.

Example:

Total products: 20

Limit: 3

Page Products Returned
Page 1 1 – 3
Page 2 4 – 6
Page 3 7 – 9

This improves performance, reduces load, and makes APIs scalable.

## 🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Postman (for API testing)

## 📂 Product Schema Fields

Each product document contains the following fields:

productName

category

brand

price

rating

description

createdAt

## ✅ Project Outcome

Through this project, you learn how to:

Build scalable REST APIs

Write dynamic MongoDB queries

Implement pagination and sorting logic

Handle real-world filtering scenarios

Test APIs efficiently using Postman

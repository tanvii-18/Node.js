## ✍️ WriteHub – Blog Management System Backend

WriteHub is a backend-only Blog Management System built using Node.js, Express, MongoDB, and Mongoose.
The project follows a clean MVC architecture and focuses on cookie-based authentication, secure user access, and blog CRUD operations. All APIs are tested using Postman and are ready for frontend integration.


<h2 style="color:#4f46e5;">✨ Features</h2>


🔐 Authentication

User signup (register new users)

User signin (login existing users)

Password hashing using bcrypt

Cookie-based authentication

Logout functionality

Protected routes for authenticated users only


<h2>📝 Blog Management</h2>


Create blog posts

Update own blog posts

Delete own blog posts

Get all blog posts

Get a single blog post by ID

### 🖼 Image Upload

Image upload using Multer

Images stored on the server

Image path saved in MongoDB

Public access to uploaded images

<h2>📁 Folder Structure</h2> 

/config → Database connection

/controllers → Auth & blog controller logic

/middleware → Authentication middleware

/models → User & Blog schemas

/routes → Auth & blog routes

/uploads → Uploaded blog images

/server.js → App entry point

<h2>⚙️ Tech Stack</h2>

Node.js

Express.js

MongoDB

Mongoose

Multer

bcrypt

Cookie-based authentication

<h2> 🔧 How to Run Locally</h2>

npm install

node server.js

<h2>📌 Note :</h2>

This is a backend-only project.

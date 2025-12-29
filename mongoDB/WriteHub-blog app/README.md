## ✍️ WriteHub – Blog Management System Backend

WriteHub is a backend-only Blog Management System built using Node.js, Express, MongoDB, and Mongoose.
The project follows a clean MVC architecture and focuses on cookie-based authentication, secure user access, and blog CRUD operations. All APIs are tested using Postman and are ready for frontend integration.


<h3 style="color:#4f46e5;">✨ Features</h3>


🔐 Authentication

User signup (register new users)

User signin (login existing users)

Password hashing using bcrypt

Cookie-based authentication

Logout functionality

Protected routes for authenticated users only


<h3>📝 Blog Management</h3>


Create blog posts

Update own blog posts

Delete own blog posts

Get all blog posts

Get a single blog post by ID

<h3>🖼 Image Upload</h3> 

Image upload using Multer

Images stored on the server

Image path saved in MongoDB

Public access to uploaded images

<h3>📁 Folder Structure</h3>  

/config → Database connection

/controllers → Auth & blog controller logic

/middleware → Authentication middleware

/models → User & Blog schemas

/routes → Auth & blog routes

/uploads → Uploaded blog images

/server.js → App entry point

<h3>⚙️ Tech Stack</h3>

Node.js

Express.js

MongoDB

Mongoose

Multer

bcrypt

Cookie-based authentication

<h3> 🔧 How to Run Locally</h3>

npm install

node server.js

<h3>📌 Note :</h3>

This is a backend-only project.

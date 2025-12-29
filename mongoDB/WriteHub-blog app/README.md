✍️ WriteHub – Blog Management System Backend

WriteHub is a backend-only Blog Management System built using Node.js, Express, MongoDB, and Mongoose.
The project follows a clean MVC architecture and focuses on cookie-based authentication, secure user access, and blog CRUD operations. All APIs are tested using Postman and are ready for frontend integration.

✨ Features
🔐 Authentication

User signup (register new users)

User signin (login existing users)

Password hashing using bcrypt

Cookie-based authentication

Logout functionality

Protected routes for authenticated users only

📝 Blog Management

Create blog posts

Update own blog posts

Delete own blog posts

Get all blog posts

Get a single blog post by ID

🖼 Image Upload

Image upload using Multer

Images stored on the server

Image path saved in MongoDB

Public access to uploaded images

📁 Folder Structure
/config → Database connection
/controllers → Auth & blog controller logic
/middleware → Authentication middleware
/models → User & Blog schemas
/routes → Auth & blog routes
/uploads → Uploaded blog images
/server.js → App entry point

⚙️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Multer

bcrypt

Cookie-based authentication

🔧 How to Run Locally
npm install
node server.js

📌 Note :

This is a backend-only project.

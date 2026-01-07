# 🔐 Login System
A secure, modern, and fast authentication system built with Node.js  + Express.js  + MongoDB.
Robust user authentication with OTP-based email verification, JWT-protected routes, and clean error handling — perfect for learning and production use!


## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-00599C?style=for-the-badge&logo=lock&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-009688?style=for-the-badge&logo=gmail&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


## ✨ Features
User registration with email & password

Password hashing using bcrypt with salt

OTP-based email verification via Nodemailer (Gmail SMTP)

Login with JWT token generation

Protected routes (Home accessible only with valid JWT)

Logout functionality (client-side token removal)

Proper error handling & validation with HTTP status codes



## ▶️ Getting Started

bash
### Clone the repository
git clone https://github.com/your-username/login-system.git

### Navigate into project folder
cd login-system

## Run the server
npm start
🔒 Security Implementation
Password hashing with bcrypt + salt

Stateless authentication using JWT

OTP verification for email validation

Protected routes with JWT middleware

Sensitive data stored in .env

Unauthorized access prevention for Home page

## 📌 Future Improvements
Role-based access control (Admin/User)

Refresh tokens for extended sessions

Password reset via email

Multi-factor authentication

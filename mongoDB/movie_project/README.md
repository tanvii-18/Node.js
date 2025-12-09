---
# 🎬 **MoviesHub – Movie Management App**

<p>A full-stack movie app where you can add, search and view movies with their poster, rating, genre and description.
Built with a simple backend (Node + Express + MongoDB) and a clean React frontend.</p>
---

## 🚀 **Features**

- Add movies with poster, rating, genre, year and description
- Search movies instantly
- Auto-updated movie list
- Clean UI with horizontal scrolling movie cards
- Image uploading with Multer
- Fully modular folder structure
- React components split into clean files

---

## 🛠 **Tech Stack**

### **Frontend**

- React (Vite)
- Tailwind CSS
- Custom hooks + components

### **Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (for image uploads)
- CORS enabled
- REST API routes

---

## 📁 **Folder Structure**

### **Backend**

```
backend/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middleware/
 ├── uploads/
 ├── config/
 ├── server.js
```

### **Frontend**

```
src/
 ├── components/
 │     ├── MovieList.jsx
 │     ├── MovieCard.jsx
 │     ├── AddMovie.jsx
 │     ├── SearchBar.jsx
 │     └── DataFetching.js
 ├── App.jsx
 ├── main.jsx
```

---

## 🔗 **API Routes**

```
GET    /api/movies
GET    /api/movies/:id
POST   /api/movies/post
PUT    /api/movies/update/:id
DELETE /api/movies/delete/:id
```

---

## 💡 **How It Works**

- User uploads movie data + poster
- Backend saves the image in `/uploads` and stores a full URL
- React fetches movies and displays posters on the UI
- Search input filters movies live

---

## 📸 **Screenshots**

<img width="1919" height="825" alt="Screenshot 2025-12-09 222820" src="https://github.com/user-attachments/assets/71be8a8e-a377-4ccb-bc56-ee638880ee21" />


---

## 🧩 **Future Enhancements**

- Edit movie feature
- Better card animations
- Categories & filters
- Cloud image upload

---

## 🧑‍💻 **Setup Instructions**

### **Backend**

```
cd backend
npm install
npm run dev
```

### **Frontend**

```
cd frontend
npm install
npm run dev
```

---

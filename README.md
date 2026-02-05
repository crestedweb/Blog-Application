📝 Full-Stack Blog Application

A modern full-stack blog platform where users can create posts, read articles, and engage through comments.

Built to demonstrate real-world CRUD operations, REST APIs, and full-stack integration.

🚀 Features
📰 Blog Posts

✍️ Create new blog posts

📖 View all posts

🔍 View single post details

✏️ Edit posts

🗑️ Delete posts

💬 Comments

➕ Add comments to posts

👀 View comments per post

❌ Delete comments

🛠 Tech Stack
Frontend

React (Vite)

Axios

React Router

Modern CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

📂 Project Structure
blog-project/
│
├── blog-frontend/     # React frontend
└── blog-backend/      # Express backend API

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/crestedweb/blog-project.git
cd blog-project

2️⃣ Backend Setup
cd blog-backend
npm install


Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run the backend server:

npm run dev

3️⃣ Frontend Setup

Open a new terminal:

cd blog-frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173


🎯 Purpose of This Project

This project was built to demonstrate:

Full-stack application development

RESTful API design

Database modeling with MongoDB

Frontend & backend integration

Clean UI and reusable components

📸 Future Improvements

User authentication (Login/Register)

Like & share posts

Rich text editor

Image upload for posts

👨‍💻 Author

Crestedweb Michael
Full-Stack Developer

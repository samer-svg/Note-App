# 📝 Note App

A full-stack note-taking app built with React, Tailwind CSS, TypeScript, Express.js, Prisma, and PostgreSQL.

---

## 🔧 Features

- ✅ Create, Read, Update, Delete (CRUD) notes
- ⚡ Instant UI updates without page refresh
- 🎨 Clean responsive UI with Tailwind CSS
- ⚙️ Express.js API with Prisma ORM
- 🗃️ PostgreSQL database

---

## 📁 Project Structure

note-app/
├── backend/ # Express server + Prisma + DB
│ ├── src/
│ ├── .env
│ └── package.json
├── frontend/ # React + TypeScript + Tailwind
│ ├── src/
│ ├── .env
│ └── package.json
├── README.md
└── .gitignore

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (18+)
- PostgreSQL installed & running locally

---

### ⚙️ Backend Setup

1. Go to the backend folder:
   ```bash
   cd backend
Install dependencies:
npm install

Create a .env file:
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/notesdb

Run Prisma setup:
npx prisma migrate dev --name init

Start the backend:
npm run dev

💻 Frontend Setup
Go to the frontend folder:

cd frontend
Install dependencies:

npm install
Create a .env file:

VITE_API_BASE=http://localhost:3000/notes
Start the frontend:

npm run dev
🌐 Usage
Open your browser at the frontend dev URL (usually http://localhost:5173)

Create, edit, and delete notes — all changes appear instantly

🛠️ Tech Stack
Frontend: React, Vite, TypeScript, Tailwind CSS

Backend: Node.js, Express.js, Prisma, PostgreSQL

Other: Git, RESTful API, Environment Variables

📝 License
MIT © 2025 YourName
# 📝 Note App

A full-stack note-taking app with a modern UI and instant updates, built using React, TypeScript, Tailwind CSS, Express.js, Prisma, and PostgreSQL.

---

## 🔧 Features

- Create, read, update, and delete (CRUD) notes
- Instant UI updates without page refresh
- Responsive, clean interface with Tailwind CSS
- RESTful API with Express.js and Prisma ORM
- PostgreSQL database for persistent storage

---

## 📁 Project Structure

```
note-app/
├── note app/         # Frontend (React + Vite + Tailwind + TypeScript)
│   ├── src/
│   │   ├── components/   # Header, NoteForm, NoteList
│   │   ├── pages/        # Home page
│   │   └── services/     # API integration
│   ├── public/
│   ├── package.json
│   └── ...
├── note app API/     # Backend (Express + Prisma + PostgreSQL)
│   ├── src/
│   │   └── server.js     # Main server
│   ├── routes/           # API routes
│   ├── controllers/      # Route handlers
│   ├── prisma/           # Prisma schema/migrations
│   ├── package.json
│   └── ...
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (18+ recommended)
- PostgreSQL installed & running locally

---

### ⚙️ Backend Setup

1. Go to the backend folder:
   ```bash
   cd "note app API"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/notesdb
   ```
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000/notes`.

---

### 💻 Frontend Setup

1. Go to the frontend folder:
   ```bash
   cd "note app"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_BASE=http://localhost:3000/notes
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

---

## 🌐 Usage
- Open your browser at the frontend dev URL (usually http://localhost:5173)
- Create, edit, and delete notes — all changes appear instantly

---

## 🛠️ API Endpoints

All endpoints are prefixed with `/notes`:

- `GET    /notes`         — List all notes
- `GET    /notes/:id`     — Get a single note by ID
- `POST   /notes`         — Create a new note (`title`, `content` required)
- `PUT    /notes/:id`     — Update a note (`title`, `content` required)
- `DELETE /notes/:id`     — Delete a note by ID

All responses are JSON. Errors return appropriate status codes and messages.

---

## 🖥️ Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma, PostgreSQL
- **Other:** RESTful API, Environment Variables, Git

---

## 📝 License
MIT © 2025 YourName

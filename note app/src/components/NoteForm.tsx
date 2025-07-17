import { useState } from "react";
import { createNote } from "../services/api";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postNote = async () => {
      await createNote({ title, content });
      // optionally update notes list here if passed as props
    };
    postNote();
    setTitle("");
    setContent("");
    setShowForm(false); // hide form after submission (optional)
  };

  return (
    <div className="p-5 flex justify-center items-center flex-col">
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl shadow-lg hover:bg-amber-600 transition duration-300 pb-1.5"
      >
        +
      </button>

      {/* Animated wrapper */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showForm ? "max-h-[500px] mt-5" : "max-h-0"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md"
        >
          <input
            required
            type="text"
            name="title"
            placeholder="Title"
            className="border p-2 rounded focus:outline-amber-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            required
            type="text"
            name="content"
            placeholder="Content"
            className="border p-2 rounded focus:outline-amber-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

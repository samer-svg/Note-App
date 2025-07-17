import { useEffect, useRef, useState } from "react";
import { getNotes, updateNote, deleteNote } from "../services/api";
import deleteImg from "../assets/backspace.png";
import editImg from "../assets/eraser.png";

export type Note = {
  id: number;
  title: string;
  content: string;
};

export default function NoteList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getNotes();
      setNotes(response); // assuming getNotes() returns JSON
    };
    fetchNotes();
  }, [notes]);

  useEffect(() => {
    if (editingNoteId !== null) {
      ref.current?.focus();
    }
  }, [editingNoteId]);

  const update = async (
    id: number,
    note: { title: string; content: string }
  ) => {
    try {
      const response = await updateNote(id, note);
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === id ? response : n))
      );
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const deleteNoteFun = async (id: number) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen overflow-hidden px-10 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-2xl transition-shadow duration-300 flex justify-between flex-col"
          >
            {editingNoteId === note.id ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await update(note.id, {
                    title: editTitle,
                    content: editContent,
                  });
                  setEditingNoteId(null);
                }}
              >
                <input
                  className="w-full border p-2 rounded mb-2"
                  type="text"
                  ref={ref}
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Title"
                />
                <textarea
                  className="w-full border p-2 rounded mb-2"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="Content"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-300 px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingNoteId(null)}
                    className="text-red-500 underline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    {note.title}
                  </h2>
                  <p className="text-xl text-gray-600">{note.content}</p>
                </div>
                <div className="flex gap-1 mt-4 justify-end">
                  <button
                    className="px-2 py-0.5 rounded-full hover:bg-amber-200"
                    onClick={() => {
                      setEditingNoteId(note.id);
                      setEditTitle(note.title);
                      setEditContent(note.content);
                    }}
                  >
                    <img className="h-7 w-7" src={editImg} alt="edit" />
                  </button>
                  <button
                    className="px-2 py-0.5 pl-0.5 rounded-full hover:bg-red-200"
                    onClick={() => deleteNoteFun(note.id)}
                  >
                    <img className="h-7 w-7" src={deleteImg} alt="delete" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

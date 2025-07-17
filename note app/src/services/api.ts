import { type Note } from "../components/NoteList.tsx";

const API_BASE = import.meta.env.VITE_API_BASE;

export async function getNotes() {
  try {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("Failed to fetch notes");
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("getNotes error:", err.message);
    } else {
      console.error("getNotes unknown error:", err);
    }
    return null;
  }
}

export async function createNote(note: {
  title: string;
  content: string;
}): Promise<Note | null> {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (!res.ok) throw new Error("Failed to create note");
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("createNote error:", err.message);
    } else {
      console.error("getNotes unknown error:", err);
    }
    return null;
  }
}

export async function updateNote(
  id: number,
  note: { title: string; content: string }
) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (!res.ok) throw new Error("Failed to update note");
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("updateNote error:", err.message);
    } else {
      console.error("getNotes unknown error:", err);
    }
    return null;
  }
}

export async function deleteNote(id: number) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete note");
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("deleteNote error:", err.message);
    } else {
      console.error("getNotes unknown error:", err);
    }
    return null;
  }
}

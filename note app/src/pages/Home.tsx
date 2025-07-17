import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Home() {
  return (
    <div>
      <Header />
      <NoteForm />
      <NoteList />
    </div>
  );
}

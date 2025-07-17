import NoteImg2 from '../assets/download (5).jpeg'

export default function Header() {
  return (
    <div className="bg-amber-200 flex justify-between items-center h-20 px-10 ">
      <span className="text-black font-serif text-3xl -tracking-wide hover:text-white transition duration-300 ease-in-out">My Notes</span>
      <img className="h-15 w-15 bg-amber-200 rounded-3xl " src={NoteImg2} alt="note img" />
    </div>
  )
}

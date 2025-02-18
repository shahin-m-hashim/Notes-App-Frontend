import ArchiveNoteBtn from "components/note/ArchiveNoteBtn";
import DeleteNoteBtn from "components/note/DeleteNoteBtn";

export default function ArchivedNoteCard({ note }) {
  return (
    <li
      style={{ backgroundColor: note.color }}
      className="relative p-4 flex flex-col justify-between h-[250px] border border-gray-200 rounded-lg shadow-md"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold underline underline-offset-4">
          {note.title}
        </h2>
        <p>{note.content}</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold">{note.category}</p>
        <p className="text-sm">
          {new Date(note.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="absolute top-2 right-2">
        <DeleteNoteBtn id={note.id} />
      </div>

      <div className="absolute bottom-2 right-2">
        <ArchiveNoteBtn id={note.id} isArchived={note.archived} />
      </div>
    </li>
  );
}

import PinNoteBtn from "components/note/PinNoteBtn";
import EditNoteBtn from "components/note/EditNoteBtn";
import ArchiveNoteBtn from "components/note/ArchiveNoteBtn";

export default function NoteCard({ note }) {
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
        <EditNoteBtn id={note.id} />
      </div>

      <div className="absolute bottom-2 right-2">
        <div className="flex items-center gap-2">
          <PinNoteBtn id={note.id} isPinned={note.pinned} />

          {!note.pinned && (
            <ArchiveNoteBtn id={note.id} isArchived={note.archived} />
          )}
        </div>
      </div>
    </li>
  );
}

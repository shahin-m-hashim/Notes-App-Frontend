import useStore from "store/_store";

export default function EditNoteBtn({ id }) {
  const setEditNote = useStore((store) => store.setEditNote);

  return (
    <button
      type="button"
      onClick={() => setEditNote(id)}
      className="bg-[#0a0806] cursor-pointer size-8 rounded-full flex items-center justify-center"
    >
      <img alt="edit note" className="p-2.5" src="icons/pencil.svg" />
    </button>
  );
}

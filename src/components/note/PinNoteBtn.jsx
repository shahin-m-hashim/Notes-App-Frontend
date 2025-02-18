import { pinNote } from "api/noteApi";
import queryClient from "config/queryClientConfig";
import { useMutation } from "@tanstack/react-query";

export default function PinNoteBtn({ id, isPinned }) {
  const mutation = useMutation({
    mutationFn: () => pinNote(id, isPinned),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  return (
    <button
      type="button"
      onClick={mutation.mutate}
      className="bg-[#0a0806] cursor-pointer size-8 rounded-full flex items-center justify-center"
    >
      {isPinned ? (
        <img alt="archive" className="p-2.5" src="icons/unpin.svg" />
      ) : (
        <img alt="archive" className="p-2.5" src="icons/pin.svg" />
      )}
    </button>
  );
}

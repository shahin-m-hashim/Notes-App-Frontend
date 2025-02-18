import queryClient from "config/queryClientConfig";
import { useMutation } from "@tanstack/react-query";

import { deleteNote } from "api/noteApi";

export default function DeleteNoteBtn({ id }) {
  const mutation = useMutation({
    mutationFn: () => deleteNote(id),
    onSuccess: () => {
      queryClient.refetchQueries(["archive"]);
    },
  });

  return (
    <button
      type="button"
      onClick={mutation.mutate}
      className="bg-[#0a0806] cursor-pointer size-8 rounded-full flex items-center justify-center"
    >
      <img alt="delete note" className="p-2.5" src="icons/delete.svg" />
    </button>
  );
}

import { useMutation } from "@tanstack/react-query";

import { archiveNote } from "api/noteApi";
import queryClient from "config/queryClientConfig";

export default function ArchiveNoteBtn({ id, isArchived }) {
  const mutation = useMutation({
    mutationFn: () => archiveNote(id, isArchived),
    onSuccess: () => {
      queryClient.refetchQueries(["notes"]);
      queryClient.refetchQueries(["archive"]);
    },
  });

  return (
    <button
      type="button"
      onClick={mutation.mutate}
      className="bg-black cursor-pointer size-8 rounded-full flex items-center justify-center"
    >
      <img
        alt="unarchive"
        className="p-2.5"
        src={isArchived ? "icons/unarchive.svg" : "icons/archive.svg"}
      />
    </button>
  );
}

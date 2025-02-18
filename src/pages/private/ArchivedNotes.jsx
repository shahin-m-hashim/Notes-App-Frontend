import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";

import useStore from "store/_store";
import { getArchivedNotes } from "api/notesApi";
import EmptyNotes from "components/notes/EmptyNotes";
import NotesError from "components/notes/NotesError";
import Pagination from "components/notes/Pagination";
import ArchivedNoteCard from "components/notes/ArchivedNoteCard";

export default function ArchivedNotesPage() {
  const [searchParams] = useSearchParams();
  const setArchivedNotes = useStore((state) => state.setArchivedNotes);

  const page = searchParams.get("page") || "1";

  const { isError, isFetched, isFetching, data } = useQuery({
    queryFn: () => getArchivedNotes(page),
    queryKey: ["archive", page],
  });

  useEffect(() => {
    if (isFetched) {
      setArchivedNotes(data.notes, data.total);
    }
  }, [data]);

  if (isFetching)
    return (
      <main className="flex flex-col h-scroll pt-14 overflow-auto">
        <ThreeDots
          color="#0967d2"
          ariaLabel="loading-products"
          wrapperClass="h-3/4 flex flex-col items-center justify-center flex-1"
        />
      </main>
    );

  if (isError)
    return (
      <main className="flex flex-col h-scroll pt-14 overflow-auto">
        <NotesError />
      </main>
    );

  return (
    <main className="flex flex-col h-scroll pt-14 overflow-auto">
      {data.notes.length > 0 ? (
        <div className="p-4 flex flex-col gap-4 justify-between flex-1">
          <ul className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.notes.map((note, id) => (
              <ArchivedNoteCard key={id} note={note} />
            ))}
          </ul>

          <Pagination total={data.total} />
        </div>
      ) : (
        <EmptyNotes />
      )}
    </main>
  );
}

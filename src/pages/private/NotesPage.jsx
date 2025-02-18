import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";

import useStore from "store/_store";
import { getNotes } from "api/notesApi";
import NoteCard from "components/notes/NoteCard";
import EmptyNotes from "components/notes/EmptyNotes";
import NotesError from "components/notes/NotesError";
import Pagination from "components/notes/Pagination";

export default function NotesPage() {
  const [searchParams] = useSearchParams();
  const setNotes = useStore((state) => state.setNotes);

  const page = searchParams.get("page") || "1";
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "ALL";

  const { isError, isFetched, isFetching, data } = useQuery({
    queryFn: () => getNotes(search, category, page),
    queryKey: ["notes", search, category, page],
  });

  useEffect(() => {
    if (isFetched) {
      setNotes(data.notes, data.total);
    }
  }, [data]);

  if (isFetching)
    return (
      <main className="flex flex-col h-scroll pt-[35vh] xs:pt-14 overflow-auto xs:pl-[140px]">
        <ThreeDots
          color="#0967d2"
          ariaLabel="loading-products"
          wrapperClass="h-3/4 flex flex-col items-center justify-center flex-1"
        />
      </main>
    );

  if (isError)
    return (
      <main className="flex flex-col h-scroll pt-[35vh] xs:pt-14 overflow-auto xs:pl-[140px]">
        <NotesError />
      </main>
    );

  return (
    <main className="flex flex-col h-scroll pt-[35vh] xs:pt-14  xs:pl-[140px]">
      {data.notes.length > 0 ? (
        <div className="p-4 overflow-auto flex flex-col gap-4 justify-between flex-1">
          <ul className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.notes.map((note, id) => (
              <NoteCard key={id} note={note} />
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

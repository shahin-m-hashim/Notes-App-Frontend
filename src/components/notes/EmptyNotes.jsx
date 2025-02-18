import { useLocation } from "react-router";

export default function EmptyNotes() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center text-center items-center bg-gray-200 size-full">
      <img
        alt="empty notes"
        src="images/empty-notes.png"
        className="hidden md:inline w-1/2 h-full"
      />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl xs:text-5xl">Empty Notes !</h1>

        <p className=" xs:text-xl">
          Currently, you don&apos;t have any{" "}
          {pathname === "/archive" && "archived"} notes.
        </p>

        {pathname === "/notes" && (
          <p className="text-lg xs:text-2xl">
            How about adding one from your sidebar?
          </p>
        )}
      </div>
    </div>
  );
}

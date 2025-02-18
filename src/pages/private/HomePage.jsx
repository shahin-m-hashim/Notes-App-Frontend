import { cn } from "utils/cn";
import { Link, useLocation } from "react-router";

export default function HomePage() {
  // console.log("Rendering Notes Page");

  const { pathname } = useLocation();

  return (
    <main
      className={cn(
        "flex flex-col h-scroll overflow-auto pt-14 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white",
        pathname === "/" ? "items-center" : "pl-[140px]"
      )}
    >
      <div className="flex flex-1 justify-center items-center">
        <div className="flex items-center gap-6 flex-col w-11/12 md:w-2/3 lg:w-1/2 text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Your New Home for Writing
          </h1>

          <p className="text-lg md:text-2xl mt-4 leading-relaxed">
            Welcome to <span className="font-semibold">Notes App</span>, your
            new place for writing, editing, tracking, and organizing your notes.
            Experience a simple way of note-taking with powerful features and a
            sleek design.
          </p>

          <Link
            to="/notes"
            className="mt-6 bg-white text-indigo-600 hover:text-indigo-700 font-medium px-6 py-3 rounded-lg transition duration-300 hover:scale-105 shadow-lg"
          >
            Visit Your Notes
          </Link>

          <div className="mt-10 flex flex-col md:flex-row gap-8">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold">
                Effortless Organization
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-200">
                Categorize and organize your notes with ease. Find everything
                you need in seconds.
              </p>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold">Stay Productive</h3>
              <p className="mt-2 text-sm md:text-base text-gray-200">
                Keep track of tasks, ideas, and important information. Never
                miss a detail again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

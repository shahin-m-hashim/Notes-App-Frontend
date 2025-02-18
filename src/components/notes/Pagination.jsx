import { cn } from "utils/cn";
import { useSearchParams } from "react-router";

export default function Pagination({ total = 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activePage = Number(searchParams.get("page")) || 1;

  if (total <= 10) return null;

  const totalPages = Math.ceil(total / 10);

  const changePage = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  return (
    <ul className="flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;
        return (
          <li
            key={pageNum}
            className={cn(
              pageNum === activePage
                ? "bg-green-500"
                : "bg-black text-white hover:bg-gray-800 cursor-pointer",
              "flex items-center justify-center font-semibold text-xs size-6 rounded-full"
            )}
            onClick={() => changePage(pageNum)}
          >
            {pageNum}
          </li>
        );
      })}
    </ul>
  );
}

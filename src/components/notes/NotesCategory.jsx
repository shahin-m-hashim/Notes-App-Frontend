import { cn } from "utils/cn";
import { useSearchParams } from "react-router";

import ClearFiltersBtn from "components/ClearFiltersBtn";
import { getQueryParam, removeQueryParam } from "utils/queryParams";

import { CATEGORIES } from "schemas/noteSchema";

export default function NotesCategory() {
  const [, setSearchParams] = useSearchParams();
  const activeCategory = getQueryParam("category");

  const handleClick = (category) => {
    const existingQueryParams = removeQueryParam("page");
    setSearchParams({ ...existingQueryParams, category });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">CATEGORY</h1>
        <div className="xs:hidden">
          <ClearFiltersBtn />
        </div>
      </div>

      <div className="flex xs:flex-col items-center text-xs gap-4 xs:text-base">
        {CATEGORIES.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleClick(category)}
            className={cn(
              "cursor-pointer",
              category === activeCategory && "font-semibold text-blue-500"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

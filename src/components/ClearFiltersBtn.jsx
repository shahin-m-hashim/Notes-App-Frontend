import { useSearchParams } from "react-router";
import { getQueryParam } from "utils/queryParams";

export default function ClearFiltersBtn() {
  const [, setSearchParams] = useSearchParams();

  return (
    <button
      type="button"
      onClick={() => {
        const page = getQueryParam("page");
        page ? setSearchParams({ page }) : setSearchParams({});
      }}
      className="font-semibold cursor-pointer border border-[#0967d2] text-[#0967d2] rounded-md py-1 px-2 lg:px-4 lg:py-2 w-fit text-xs"
    >
      CLEAR FILTERS
    </button>
  );
}

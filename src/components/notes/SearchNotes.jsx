import { useRef } from "react";
import { useSearchParams } from "react-router";
import { setQueryParam } from "utils/queryParams";

export default function SearchNotes() {
  const [, setSearchParams] = useSearchParams();

  const searchNoteInputRef = useRef();

  const handleSearch = (searchQuery) => {
    const updatedQueryParams = setQueryParam("search", searchQuery);
    setSearchParams(updatedQueryParams);
  };

  const handleChange = () => {
    const searchQuery = searchNoteInputRef.current.value;
    if (!searchQuery) handleSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchNoteInputRef.current.value;
    handleSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-8 border border-gray-500 rounded-md"
    >
      <input
        type="search"
        id="search-notes"
        autoComplete="off"
        name="search-notes"
        onChange={handleChange}
        ref={searchNoteInputRef}
        placeholder="Search Notes"
        className="w-full p-2 outline-none"
      />

      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center w-10 h-full p-2 bg-gray-400"
      >
        <img alt="search icon" className="size-full" src="icons/search.svg" />
      </button>
    </form>
  );
}

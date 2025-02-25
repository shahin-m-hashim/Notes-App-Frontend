import { cn } from "utils/cn";
import { useShallow } from "zustand/shallow";
import { useMutation } from "@tanstack/react-query";

import useStore from "store/_store";
import { editNote } from "api/noteApi";
import queryClient from "config/queryClientConfig";
import { RotatingLines } from "react-loader-spinner";

import { CATEGORIES, COLORS } from "schemas/noteSchema";

export default function EditNoteModal() {
  const [
    editNoteForm,
    showEditNoteModal,
    resetEditNoteSlice,
    setEditNoteFormField,
  ] = useStore(
    useShallow((store) => [
      store.editNoteSlice.form,
      store.editNoteSlice.showEditNoteModal,
      store.resetEditNoteSlice,
      store.setEditNoteFormField,
    ])
  );

  const mutation = useMutation({
    mutationFn: editNote,
    onSuccess: () => {
      resetEditNoteSlice();
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  const isFormValid = editNoteForm.title && editNoteForm.content;

  return (
    <div
      style={{
        display: showEditNoteModal ? "block" : "none",
      }}
      className="hidden absolute backdrop-brightness-75 inset-0 z-[100]"
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="relative min-w-[300px] px-6 py-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold md:text-3xl">Edit Note</h1>

            <label className="text-xl font-medium" htmlFor="title">
              Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={editNoteForm.title}
              placeholder="Enter Note Title"
              className="p-2 border rounded-md"
              onChange={(e) => setEditNoteFormField("title", e.target.value)}
            />

            <label className="text-xl font-medium" htmlFor="content">
              Content
            </label>

            <textarea
              type="text"
              id="content"
              name="content"
              value={editNoteForm.content}
              placeholder="Enter Note Content"
              className="p-2 border rounded-md resize-none"
              onChange={(e) => setEditNoteFormField("content", e.target.value)}
            />

            <div className="flex flex-row md:flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium" htmlFor="category">
                  CATEGORY
                </h2>

                <ul className="flex flex-col gap-4 text-sm md:flex-row md:text-base">
                  {CATEGORIES.map((category) => (
                    <li
                      key={category}
                      className="flex items-center gap-2 font-medium"
                    >
                      <input
                        type="radio"
                        id={category}
                        name="category"
                        value={category}
                        className="cursor-pointer"
                        checked={category === editNoteForm.category}
                        onChange={(e) =>
                          setEditNoteFormField("category", e.target.value)
                        }
                      />
                      <label htmlFor={category}>{category}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium" htmlFor="category">
                  COLOR
                </h2>

                <ul className="flex flex-col gap-4 justify-between text-sm md:flex-row md:text-base">
                  {COLORS.map((color) => (
                    <li key={color} className="flex items-center gap-2 text-sm">
                      <input
                        id={color}
                        type="radio"
                        name="color"
                        value={color}
                        className="cursor-pointer"
                        checked={color === editNoteForm.color}
                        onChange={(e) =>
                          setEditNoteFormField("color", e.target.value)
                        }
                      />
                      <label
                        htmlFor={color}
                        className="px-2"
                        style={{ backgroundColor: color }}
                      >
                        Color
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className={cn(
                "p-1 text-sm md:text-base md:p-2 flex justify-center font-semibold border rounded-md",
                mutation.isPending
                  ? "opacity-75 cursor-not-allowed "
                  : "cursor-pointer",
                isFormValid
                  ? "bg-green-500 cursor-pointer"
                  : "border-[#0967d2] cursor-not-allowed text-[#0967d2]"
              )}
            >
              {mutation.isPending ? (
                <RotatingLines
                  width="20"
                  height="20"
                  strokeColor="black"
                  animationDuration="0.75"
                />
              ) : (
                "Save Changes"
              )}
            </button>

            {mutation.isError && (
              <div className="text-center text-red-500">
                <p>{mutation.error?.message || "Something went wrong !!!"}</p>
                <p>Please try again later.</p>
              </div>
            )}
          </form>

          <button
            type="button"
            onClick={resetEditNoteSlice}
            disabled={mutation.isPending}
            className={cn(
              "absolute top-2 right-2",
              mutation.isPending ? "cursor-not-allowed" : "cursor-pointer"
            )}
          >
            <img src="icons/x-icon.svg" className="size-6" alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
}

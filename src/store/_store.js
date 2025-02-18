import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createAuthSlice from "store/authSlice";
import createNotesSlice from "store/notesSlice";
import createNewNoteSlice from "store/newNoteSlice";
import createEditNoteSlice from "store/editNoteSlice";
import createArchivedNotesSlice from "store/archivedNotesSlice";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || "production";

const useStore = create(
  devtools(
    immer((set, get) => ({
      ...createAuthSlice(set, get),
      ...createNotesSlice(set, get),
      ...createNewNoteSlice(set, get),
      ...createEditNoteSlice(set, get),
      ...createArchivedNotesSlice(set, get),
    })),
    {
      name: "store",
      enabled: ENVIRONMENT === "development",
    }
  )
);

export default useStore;

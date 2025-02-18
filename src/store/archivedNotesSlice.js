const createArchivedNotesSlice = (set) => ({
  archivedNotesSlice: {
    total: 0,
    notes: null,
  },

  setArchivedNotes: (notes, total) =>
    set(
      (state) => {
        state.archivedNotesSlice.notes = notes;
        state.archivedNotesSlice.total = total;
      },
      undefined,
      "setArchivedNotes"
    ),
});

export default createArchivedNotesSlice;

const createNotesSlice = (set) => ({
  notesSlice: {
    total: 0,
    notes: null,
  },

  setNotes: (notes, total) =>
    set(
      (state) => {
        state.notesSlice.notes = notes;
        state.notesSlice.total = total;
      },
      undefined,
      "setNotes"
    ),
});

export default createNotesSlice;

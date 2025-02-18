const initialEditNoteSlice = {
  form: {
    id: null,
    title: "",
    content: "",
    color: "#fec971",
    category: "OTHER",
  },
  showEditNoteModal: false,
};

const createEditNoteSlice = (set) => ({
  editNoteSlice: initialEditNoteSlice,

  setEditNote: (id) => {
    set(
      (store) => {
        const note = store.notesSlice.notes.find((note) => note.id === id);

        store.editNoteSlice.form = {
          id: note.id,
          title: note.title,
          color: note.color,
          content: note.content,
          category: note.category,
        };

        store.editNoteSlice.showEditNoteModal = true;
      },
      undefined,
      "setEditNote"
    );
  },

  setEditNoteFormField: (field, value) => {
    set(
      (state) => {
        state.editNoteSlice.form[field] = value;
      },
      undefined,
      "setEditNoteFormField"
    );
  },

  resetEditNoteSlice: () => {
    set(
      (store) => {
        store.editNoteSlice = initialEditNoteSlice;
      },
      undefined,
      "resetEditNoteSlice"
    );
  },
});

export default createEditNoteSlice;

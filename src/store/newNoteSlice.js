const initialNewNoteSlice = {
  form: {
    title: "",
    content: "",
    color: "#fec971",
    category: "OTHER",
  },
  showCreateNewNoteModal: false,
};

const createNewNoteSlice = (set) => ({
  newNoteSlice: initialNewNoteSlice,

  setNewNoteFormField: (field, value) => {
    set(
      (state) => {
        state.newNoteSlice.form[field] = value;
      },
      undefined,
      "setNewNoteFormField"
    );
  },

  showCreateNewNoteModal: (color = "#fec971") => {
    set(
      (state) => {
        state.newNoteSlice.form.color = color;
        state.newNoteSlice.showCreateNewNoteModal = true;
      },
      undefined,
      "showCreateNewNoteModal"
    );
  },

  resetNewNoteSlice: () => {
    set(
      (store) => {
        store.newNoteSlice = initialNewNoteSlice;
      },
      undefined,
      "resetNewNoteSlice"
    );
  },
});

export default createNewNoteSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalCreateTaskOpen: false,
  modalConfirmOpen: false,
  modalCreateSubOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalCreateTask(state) {
      state.modalCreateTaskOpen = true;
    },
    closeModalCreateTask(state) {
      state.modalCreateTaskOpen = false;
    },
    openModalConfirm(state) {
      state.modalConfirmOpen = true;
    },
    closeModalConfirm(state) {
      state.modalConfirmOpen = false;
    },
    openModalCreateSub(state) {
      state.modalCreateSubOpen = true;
    },
    closeModalCreateSub(state) {
      state.modalCreateSubOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;

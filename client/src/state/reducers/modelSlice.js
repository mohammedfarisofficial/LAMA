import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: false,
    children: null,
  },
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
      state.children = action.payload;
    },
    closeModel: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;
export default modelSlice.reducer;

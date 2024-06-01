import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  children: null,
  title: "",
  logo: null,
  onAction: null,
  actionLabel: "",
  actionVariant: "",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openModel: (state, action) => {
      const {
        isOpen,
        children,
        title,
        logo,
        actionLabel,
        onAction,
        actionVariant,
      } = action.payload;
      state.isOpen = isOpen;
      state.children = children;
      state.title = title;
      state.logo = logo;
      state.onAction = onAction;
      state.actionLabel = actionLabel;
      state.actionVariant = actionVariant;
    },
    closeModel: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;
export default modelSlice.reducer;

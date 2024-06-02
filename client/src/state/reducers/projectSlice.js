import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: null,
};

const projectSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;

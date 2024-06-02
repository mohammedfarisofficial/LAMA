import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: null,
};

const authSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.js";
import projectReducer from "./reducers/projectSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./reducers/modelSlice.js";

export default configureStore({
  reducer: {
    model: modelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

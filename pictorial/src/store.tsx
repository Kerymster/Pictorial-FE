import { configureStore } from "@reduxjs/toolkit";
import { pictorialApi } from "./Services/pictorialApi";

export const store = configureStore({
  reducer: {
    [pictorialApi.reducerPath]: pictorialApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pictorialApi.middleware),
});

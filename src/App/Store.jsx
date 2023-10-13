import { configureStore } from "@reduxjs/toolkit";
import BookApi from "../Component/Feature/BookApi/BookApi";

const store = configureStore({
  reducer: {
    [BookApi.reducerPath]: BookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BookApi.middleware),
});

export default store;

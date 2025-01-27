import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import movieReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

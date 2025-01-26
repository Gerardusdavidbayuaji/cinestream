import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../apis/movies";

interface FavoriteState {
  favorites: MovieDetail[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<MovieDetail>) => {
      const exists = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

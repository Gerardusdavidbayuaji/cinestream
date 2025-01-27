import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../apis/movies";

interface FavoriteState {
  favorites: MovieDetail[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const loadFavoritesFromLocalStorage = (): FavoriteState => {
  if (typeof window !== "undefined") {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }
  }
  return initialState;
};

const saveFavoritesToLocalStorage = (state: FavoriteState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(state));
  }
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    addToFavorite: (state, action: PayloadAction<MovieDetail>) => {
      const exists = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        saveFavoritesToLocalStorage(state);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      saveFavoritesToLocalStorage(state);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

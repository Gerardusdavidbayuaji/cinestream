import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Response, Movie } from "../apis/movies";

interface MovieState {
  popular: Response<Movie[]> | null;
  nowPlaying: Response<Movie[]> | null;
  topRated: Response<Movie[]> | null;
  upcoming: Response<Movie[]> | null;
}

const initialState: MovieState = {
  popular: null,
  nowPlaying: null,
  topRated: null,
  upcoming: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieState>) => {
      state.popular = action.payload.popular;
      state.nowPlaying = action.payload.nowPlaying;
      state.topRated = action.payload.topRated;
      state.upcoming = action.payload.upcoming;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Response, Movie, getMoviesbyList } from "../apis/movies";

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

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const popular = await getMoviesbyList({ list: "popular" });
  const nowPlaying = await getMoviesbyList({ list: "now_playing" });
  const topRated = await getMoviesbyList({ list: "top_rated" });
  const upcoming = await getMoviesbyList({ list: "upcoming" });

  return { popular, nowPlaying, topRated, upcoming };
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.popular = action.payload.popular;
      state.nowPlaying = action.payload.nowPlaying;
      state.topRated = action.payload.topRated;
      state.upcoming = action.payload.upcoming;
    });
  },
});

export default movieSlice.reducer;

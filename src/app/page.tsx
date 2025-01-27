"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { AppDispatch, RootState } from "@/services/store/store";
import { fetchMovies } from "@/services/store/movieSlice";

import Home from "@/modules/home";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popular, nowPlaying, topRated, upcoming } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Home
      popular={popular}
      nowPlaying={nowPlaying}
      topRated={topRated}
      upcoming={upcoming}
    />
  );
};

export default HomePage;

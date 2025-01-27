"use client";

import React, { useEffect } from "react";
import Home from "@/modules/home";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/services/store/movieSlice";
import { AppDispatch, RootState } from "@/services/store/store";

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

"use client";

import React, { useEffect } from "react";
import Home from "@/modules/home";
import { getMoviesbyList } from "@/services/apis/movies";
import { setMovies } from "@/services/store/movieSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/store/store";

const HomePage = async () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await getMoviesbyList({ list: "popular" });
      const nowPlaying = await getMoviesbyList({ list: "now_playing" });
      const topRated = await getMoviesbyList({ list: "top_rated" });
      const upcoming = await getMoviesbyList({ list: "upcoming" });

      dispatch(
        setMovies({
          popular,
          nowPlaying,
          topRated,
          upcoming,
        })
      );
    };

    fetchMovies();
  }, [dispatch]);

  return <Home />;
};

export default HomePage;

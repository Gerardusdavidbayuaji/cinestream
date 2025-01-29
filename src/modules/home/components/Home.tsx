import React from "react";
import MovieList from "./movie/MovieList";

import CarouselHeader from "./CarouselHeader";
import { Movie, Response } from "@/services/apis/movies";

interface HomePageProps {
  popular: Response<Movie[]>;
  now_playing: Response<Movie[]>;
  top_rated: Response<Movie[]>;
  upcoming: Response<Movie[]>;
}

export default function HomePage({
  popular,
  now_playing,
  top_rated,
  upcoming,
}: HomePageProps) {
  return (
    <>
      <CarouselHeader />
      <MovieList
        dataPopular={popular}
        dataNowPlaying={now_playing}
        dataTopRated={top_rated}
        dataUpcoming={upcoming}
      />
    </>
  );
}

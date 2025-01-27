import React from "react";
import MovieList from "./movie/MovieList";
import CarouselHeader from "./CarouselHeader";
import { Response } from "@/cammon/types/api";
import { Movie } from "@/services/apis/movies/type";

interface HomeProps {
  popular: Response<Movie[]> | null;
  nowPlaying: Response<Movie[]> | null;
  topRated: Response<Movie[]> | null;
  upcoming: Response<Movie[]> | null;
}

const Home = ({ popular, nowPlaying, topRated, upcoming }: HomeProps) => {
  return (
    <>
      <CarouselHeader />
      <MovieList
        dataPopular={popular}
        dataNowPlaying={nowPlaying}
        dataTopRated={topRated}
        dataUpcoming={upcoming}
      />
    </>
  );
};

export default Home;

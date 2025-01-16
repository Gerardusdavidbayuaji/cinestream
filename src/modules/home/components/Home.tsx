import React from "react";
import MovieList from "./movie/MovieList";
import CarouselHeader from "./CarouselHeader";
import { Response } from "@/cammon/types/api";
import { Movie } from "@/services/apis/movies/type";

interface HomeProps {
  popular: Response<Movie[]>;
  now_playing: Response<Movie[]>;
  top_rated: Response<Movie[]>;
  upcoming: Response<Movie[]>;
}

const Home = ({ popular, now_playing, top_rated, upcoming }: HomeProps) => {
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
};

export default Home;

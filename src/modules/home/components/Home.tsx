import React from "react";
import MovieList from "./movie/MovieList";
import CarouselHeader from "./CarouselHeader";
// import { Response } from "@/cammon/types/api";
// import { Movie } from "@/services/apis/movies/type";

import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";

// interface HomeProps {
//   popular: Response<Movie[]>;
//   now_playing: Response<Movie[]>;
//   top_rated: Response<Movie[]>;
//   upcoming: Response<Movie[]>;
// }

const Home = () => {
  const { popular, nowPlaying, topRated, upcoming } = useSelector(
    (state: RootState) => state.movies
  );

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

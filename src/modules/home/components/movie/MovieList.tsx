import React from "react";

// import { Response } from "@/cammon/types/api";
// import { Movie } from "@/services/apis/movies/type";

import Container from "@/components/element/Container";
import NowPlaying from "./NowPlaying";
import Upcoming from "./UpComing";
import TopRated from "./TopRated";
import Popular from "./Popular";

// interface MovieListProps {
//   dataPopular: Response<Movie[]>;
//   dataNowPlaying: Response<Movie[]>;
//   dataTopRated: Response<Movie[]>;
//   dataUpcoming: Response<Movie[]>;
// }

const MovieList = () => {
  return (
    <Container>
      <section className="space-y-20">
        <Popular />
        <NowPlaying />
        <TopRated />
        <Upcoming />
      </section>
    </Container>
  );
};

export default MovieList;

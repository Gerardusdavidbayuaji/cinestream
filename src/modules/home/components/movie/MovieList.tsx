import React from "react";

import { Response, Movie } from "@/services/apis/movies/type";

import Container from "@/components/element/Container";
import NowPlaying from "./NowPlaying";
import Upcoming from "./UpComing";
import TopRated from "./TopRated";
import Popular from "./Popular";

interface MovieListProps {
  dataPopular: Response<Movie[]> | null;
  dataNowPlaying: Response<Movie[]> | null;
  dataTopRated: Response<Movie[]> | null;
  dataUpcoming: Response<Movie[]> | null;
}

const MovieList = ({ dataPopular }: MovieListProps) => {
  return (
    <Container>
      <section className="space-y-20">
        <Popular datas={dataPopular} />
        <NowPlaying />
        <TopRated />
        <Upcoming />
      </section>
    </Container>
  );
};

export default MovieList;

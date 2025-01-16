import React from "react";
import Popular from "./Popular";
import NowPlaying from "./NowPlaying";
import Container from "@/components/element/Container";
import { Response } from "@/cammon/types/api";
import { Movie } from "@/services/apis/movies/type";
import TopRated from "./TopRated";
import Upcoming from "./UpComing";

interface MovieListProps {
  dataPopular: Response<Movie[]>;
  dataNowPlaying: Response<Movie[]>;
  dataTopRated: Response<Movie[]>;
  dataUpcoming: Response<Movie[]>;
}

const MovieList = ({
  dataPopular,
  dataNowPlaying,
  dataTopRated,
  dataUpcoming,
}: MovieListProps) => {
  return (
    <Container>
      <section className="space-y-20">
        <Popular datas={dataPopular} />
        <NowPlaying datas={dataNowPlaying} />
        <TopRated datas={dataTopRated} />
        <Upcoming datas={dataUpcoming} />
      </section>
    </Container>
  );
};

export default MovieList;

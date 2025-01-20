import React from "react";

import { Movie } from "@/services/apis/movies";
import { Response } from "@/cammon/types/api";

import ContainerCard from "@/components/element/ContainerCard";

interface NowPlayingProps {
  datas: Response<Movie[]>;
}

const NowPlaying = ({ datas }: NowPlayingProps) => {
  return <ContainerCard title="Now Playing" datas={datas} />;
};

export default NowPlaying;

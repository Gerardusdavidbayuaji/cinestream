import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import ContainerCard from "@/components/element/ContainerCard";

const NowPlaying = () => {
  const nowPlaying = useSelector((state: RootState) => state.movies.nowPlaying);
  return <ContainerCard title="Now Playing" datas={nowPlaying} />;
};

export default NowPlaying;

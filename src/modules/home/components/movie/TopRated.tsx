import React from "react";

import { Movie } from "@/services/apis/movies";
import { Response } from "@/cammon/types/api";

import ContainerCard from "@/components/element/ContainerCard";

interface TopRatedProps {
  datas: Response<Movie[]>;
}

export default function TopRated({ datas }: TopRatedProps) {
  return <ContainerCard title="Top Rated" datas={datas} />;
}

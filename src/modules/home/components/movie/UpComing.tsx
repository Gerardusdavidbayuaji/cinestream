import React from "react";

import { Movie } from "@/services/apis/movies";
import { Response } from "@/cammon/types/api";

import ContainerCard from "@/components/element/ContainerCard";

interface UpcomingProps {
  datas: Response<Movie[]>;
}

export default function Upcoming({ datas }: UpcomingProps) {
  return <ContainerCard title="Upcoming" datas={datas} />;
}

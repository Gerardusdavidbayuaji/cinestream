import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";

import ContainerCard from "@/components/element/ContainerCard";

export default function TopRated() {
  const topRated = useSelector((state: RootState) => state.movies.topRated);
  return <ContainerCard title="Top Rated" datas={topRated} />;
}

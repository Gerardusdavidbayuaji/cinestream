import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import ContainerCard from "@/components/element/ContainerCard";

export default function Upcoming() {
  const upcoming = useSelector((state: RootState) => state.movies.upcoming);
  return <ContainerCard title="Upcoming" datas={upcoming} />;
}

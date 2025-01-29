import React from "react";
import Trailer from "./Trailer";
import Info from "./Info";
import { Separator } from "@/components/ui/separator";

import { MovieDetail } from "@/services/apis/movies";

interface Props {
  movie: MovieDetail;
}

export default function Detail({ movie }: Props) {
  return (
    <>
      <Trailer data={movie} />
      <Separator className="my-6" />
      <Info data={movie} />
    </>
  );
}

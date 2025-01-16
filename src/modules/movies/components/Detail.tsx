import React from "react";
import Trailer from "./Trailer";
import Info from "./Info";
import { Separator } from "@/components/ui/separator";

import { MovieDetail } from "@/services/apis/movies";

interface DetailProps {
  movie: MovieDetail;
}

const Detail = ({ movie }: DetailProps) => {
  return (
    <>
      <Trailer data={movie} />
      <Separator className="my-6" />
      <Info data={movie} />
    </>
  );
};

export default Detail;

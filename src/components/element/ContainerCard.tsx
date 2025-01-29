import React from "react";

import { Movie } from "@/services/apis/movies";
import { Response } from "@/services/apis/movies";

import MovieCard from "./MovieCard";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

interface ContainerCardProps {
  title: string;
  datas: Response<Movie[]> | null;
}

const ContainerCard = ({ title, datas }: ContainerCardProps) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-auto rounded-md"
      >
        <div className="flex items-center justify-between">
          <p className="pl-4 border-l-4 border-red-600">{title}</p>
          <div className="flex items-center gap-x-8">
            <div>
              <CarouselPrevious className="relative top-0 w-6 h-6 -left-2 -translate-y-0" />
              <CarouselNext className="relative top-0 w-6 h-6 -right-0 -translate-y-0" />
            </div>
          </div>
        </div>
        <CarouselContent className="py-4">
          {datas?.results.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
            >
              <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ContainerCard;

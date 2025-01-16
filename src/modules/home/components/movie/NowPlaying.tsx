import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import MovieCard from "@/components/element/MovieCard";
import { Movie } from "@/services/apis/movies";
import { Response } from "@/cammon/types/api";

interface NowPlayingProps {
  title?: string;
  datas: Response<Movie[]>;
}

const NowPlaying = ({ title, datas }: NowPlayingProps) => {
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
          <p className="pl-4 border-l-4 border-red-600">Now Playing</p>
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
              <MovieCard data={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NowPlaying;

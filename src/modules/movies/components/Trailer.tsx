import React from "react";

import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

import { MovieDetail } from "@/services/apis/movies/type";

interface TrailerProps {
  data: MovieDetail;
}

const Trailer = ({ data }: TrailerProps) => {
  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.videos?.results.map((item) => (
            <CarouselItem key={item.id}>
              <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                allowFullScreen
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-[540px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Trailer;

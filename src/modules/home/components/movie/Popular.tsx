import React from "react";

import { Movie, Response } from "@/services/apis/movies/type";

import MovieCardPages from "@/components/element/MovieCardPages";

interface PopularProps {
  datas: Response<Movie[]> | null;
}

const Popular = ({ datas }: PopularProps) => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <p className="pl-4 border-l-4 border-red-600">Featured</p>
      </div>
      <ul className="grid grid-cols-2 gap-6 pt-6 mb-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {datas?.results.map((movie) => (
          <li key={movie.id}>
            <MovieCardPages data={movie} href={`/movies/detail/${movie.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;

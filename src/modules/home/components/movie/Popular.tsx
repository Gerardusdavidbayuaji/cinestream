import React from "react";

import { Movie } from "@/services/apis/movies/type";
import { Response } from "@/cammon/types/api";

import MovieCardPages from "@/components/element/MovieCardPages";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";

// interface PopularProps {
//   datas: Response<Movie[]>;
// }

const Popular = () => {
  const popular = useSelector((state: RootState) => state.movies.popular);

  return (
    <div>
      <div className="flex items-center justify-start">
        <p className="pl-4 border-l-4 border-red-600">Featured</p>
      </div>
      <ul className="grid grid-cols-2 gap-6 pt-6 mb-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {popular?.results.map((movie) => (
          <li key={movie.id}>
            <MovieCardPages data={movie} href={`/movies/detail/${movie.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;

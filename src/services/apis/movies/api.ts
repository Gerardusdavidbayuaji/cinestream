import { Request, Response } from "@/cammon/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Movie, MovieDetail } from "./type";

export const getPopulerMovies = async () => {
  const response = await axiosWithConfig.get(`/movie/popular`);
  return response.data as Response<Movie[]>;
};

export const getMoviesbyList = async (params?: Request) => {
  const response = await axiosWithConfig.get(`/movie/${params?.list}`);
  return response.data as Response<Movie[]>;
};

export const getDetailMovies = async (movie_id: number) => {
  const response = await axiosWithConfig.get(
    `/movie/${movie_id}?append_to_response=videos`
  );
  return response.data as MovieDetail;
};

import axiosWithConfig from "../axiosWithConfig";
import { Response, Request, Movie, MovieDetail } from "./type";

export const getPopulerMovies = async () => {
  const response = await axiosWithConfig.get(`/movie/popular`);
  return response.data as Response<Movie[]>;
};

export const getMoviesbyList = async (params?: Request) => {
  const response = await axiosWithConfig.get(`/movie/${params?.list}`);
  return response.data as Response<Movie[]>;
};

export const getDetailMovie = async (movie_id: number) => {
  const response = await axiosWithConfig.get(
    `/movie/${movie_id}?append_to_response=videos`
  );
  return response.data as MovieDetail;
};

export const getMovies = async (params?: Request) => {
  const response = await axiosWithConfig.get(
    `/search/movie?query=${params?.title}`
  );
  return response.data as Response<Movie[]>;
};

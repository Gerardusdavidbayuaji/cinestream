import { Response } from "@/cammon/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Movie } from "./type";

export const getPopulerMovies = async () => {
  const response = await axiosWithConfig.get(`/movie/popular`);
  return response.data as Response<Movie[]>;
};

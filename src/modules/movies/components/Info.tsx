"use client";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { useToast } from "@/hooks/use-toast";

import {
  addToFavorite,
  removeFromFavorite,
} from "@/services/store/favoriteSlice";

import { UserCircle, Plus, Check } from "lucide-react";

import { formatDate, formatRunTime } from "@/utils/formatter";
import { MovieDetail } from "@/services/apis/movies";

import { Button } from "@/components/ui/button";

interface Props {
  data: MovieDetail;
}

export default function Info({ data: movie }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const { toast } = useToast();

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(movie.id));

      toast({
        title: "Deleted Movie",
        description:
          "The movie has been successfully removed from the favorites list.",
        variant: "destructive",
      });
    } else {
      dispatch(addToFavorite(movie));

      toast({
        title: "Added Movie",
        description:
          "The movie has been successfully added to the favorites list.",
        variant: "default",
      });
    }
  };

  return (
    <div className="flex flex-col w-full gap-6 p-6 mb-6 h-fit">
      <div className="flex w-full gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={140}
          height={200}
          className="hidden md:block"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <h1 className="flex flex-col text-2xl font-semibold leading-none">
              <span>{movie.title}</span>
              <span className="text-base font-light dark:text-slate-100 ">
                {movie.tagline}
              </span>
            </h1>
            <Button
              variant={isFavorite ? "secondary" : "destructive"}
              onClick={handleFavoriteToggle}
              className="hover:bg-[#801d1d]/80 p-2"
            >
              {isFavorite ? <Check /> : <Plus />}
            </Button>
          </div>
          <p className="space-x-2 text-xs font-light dark:text-slate-200">
            <span className="dark:text-slate-400">
              {formatDate(movie.release_date)}
            </span>
            <span>{movie.original_language.toUpperCase()}</span>
            <span>{formatRunTime(movie.runtime)}</span>
          </p>
          <hr />
          <div className="flex items-center gap-3">
            <p className="p-2 dark:bg-[#222121] bg-slate-200 w-fit my-2 rounded text-3xl font-bold">
              {movie.vote_average.toString().slice(0, 3)}
            </p>
            <p className="space-y-1">
              <span className="flex">
                {Array.from({ length: movie.vote_average }).map(() => `⭐`)}
              </span>
              <span className="flex items-center gap-1 text-sm dark:text-slate-400">
                <UserCircle size={16} />
                {movie.vote_count}
                <span>votes</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="mb-6 text-2xl font-semibold">Synopsis</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

"use client";

import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { removeFromFavorite } from "@/services/store/favoriteSlice";
import { RootState } from "@/services/store/store";
import { formatDate } from "@/utils/formatter";

import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const FavoriteCard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRemoveToggle = (id: number) => {
    dispatch(removeFromFavorite(id));

    toast({
      title: "Deleted Movie",
      description:
        "The movie has been successfully removed from the favorites list.",
      variant: "destructive",
    });
  };

  if (!isClient) return null;

  return (
    <>
      {favorites.length === 0 ? (
        <Link href="/">
          <Badge className="flex justify-center items-center bg-red-600 hover:bg-red-600/80">
            <p className="text-white">No favorite movie yet.</p>
          </Badge>
        </Link>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="w-full h-full flex flex-col scale-100 hover:scale-[1.01] rounded-md transition-all duration-200 bg-slate-300"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                priority
                alt={movie.title}
                width="0"
                height="0"
                sizes="100vw"
                className="relative object-cover w-full h-full rounded"
              />
              <div className="flex absolute top-0 w-full p-4 justify-end cursor-pointer">
                <div
                  onClick={() => handleRemoveToggle(movie.id)}
                  className="hover:bg-[#801d1d]/80 bg-secondary/80 rounded-md p-1"
                >
                  <Check />
                </div>
              </div>
              <div className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black/70 to-black/0 h-[200px] w-full rounded p-4">
                <h1 className="font-medium text-white truncate">
                  {movie.title}
                </h1>
                <p className="text-xs font-light text-slate-300">
                  {formatDate(movie.release_date!)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FavoriteCard;

import { useCallback, useState } from "react";

import debounce from "lodash.debounce";

import { Button } from "../ui/button";
import { Search, Star } from "lucide-react";
import Image from "next/image";

import { Command, CommandGroup } from "@/components/ui/command";

import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";

import { getMovies } from "@/services/apis/movies";
import { Input } from "../ui/input";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

const SearchBox = () => {
  const [results, setResults] = useState<Movie[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const fetchMovies = async (searchQuery: string) => {
    try {
      const data = await getMovies({ title: searchQuery });
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setResults([]);
    }
  };

  // const debouncedFetchMovies = useCallback(
  //   debounce((searchQuery: string) => fetchMovies(searchQuery), 300),
  //   [fetchMovies]
  // );

  const debouncedFetchMovies = useCallback(
    debounce(async (searchQuery: string) => {
      try {
        const data = await getMovies({ title: searchQuery });
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setResults([]);
      }
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      debouncedFetchMovies(value);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[350px] justify-between bg-transparent border-slate-300 hover:bg-transparent text-slate-300 hover:text-slate-200"
          >
            <p className="truncate">{query || "Search movie..."}</p>
            <Search className="w-4 h-4 ml-2 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[350px] p-0 bg-background/50 backdrop-blur">
          <Command className="bg-transparent">
            <Input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search"
              className=" placeholder:italic"
            />
            <CommandGroup>
              {results
                .map((movie) => (
                  <div key={movie.id} className="flex gap-4 cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      priority
                      width={60}
                      height={100}
                      alt={movie.title}
                      className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black"
                    />
                    <h1>
                      <span>{movie.title}</span>
                      <span className="flex items-center gap-2">
                        <Star size={16} />{" "}
                        {movie.vote_average.toLocaleString().slice(0, 4)}
                      </span>
                    </h1>
                  </div>
                ))
                .slice(0, 5)}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchBox;

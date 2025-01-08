import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SearchBox = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-[350px] justify-between bg-transparent border-slate-300 hover:bg-transparent text-slate-300 hover:text-slate-200"
          >
            <p>Search movie...</p>
            <Search />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[350px] p-0 bg-background/50 backdrop-blur">
          List search film
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchBox;

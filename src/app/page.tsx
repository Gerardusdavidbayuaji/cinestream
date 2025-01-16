import React from "react";
import ReactQueryProvider from "@/services/providers/react-query-provider";
import Home from "@/modules/home";
import { getMoviesbyList } from "@/services/apis/movies";

const HomePage = async () => {
  const popular = await getMoviesbyList({ list: "popular" });
  const now_playing = await getMoviesbyList({ list: "now_playing" });
  const top_rated = await getMoviesbyList({ list: "top_rated" });
  const upcoming = await getMoviesbyList({ list: "upcoming" });

  return (
    <>
      <ReactQueryProvider>
        <Home
          popular={popular}
          now_playing={now_playing}
          top_rated={top_rated}
          upcoming={upcoming}
        />
      </ReactQueryProvider>
    </>
  );
};

export default HomePage;

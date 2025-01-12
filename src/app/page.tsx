import React from "react";
import CarouselHeader from "@/modules/home/components/CarouselHeader";
import ReactQueryProvider from "@/services/providers/react-query-provider";

const Home = () => {
  return (
    <>
      <ReactQueryProvider>
        <CarouselHeader />
      </ReactQueryProvider>
    </>
  );
};

export default Home;

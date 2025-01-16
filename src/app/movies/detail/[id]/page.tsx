import React from "react";

import { getDetailMovies } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

interface DetailPageProps {
  params: { id: number };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const movie = await getDetailMovies(params.id);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
};

export default DetailPage;

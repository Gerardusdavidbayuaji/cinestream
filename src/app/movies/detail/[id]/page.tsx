import React from "react";

import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

interface DetailPageProps {
  params: { id: number };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const movie = await getDetailMovie(id);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
};

export default DetailPage;

import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies";
import Container from "@/components/element/Container";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const movie = await getDetailMovie(id);
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const movie = await getDetailMovie(id);

  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

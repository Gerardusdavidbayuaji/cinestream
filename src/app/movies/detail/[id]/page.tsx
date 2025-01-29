import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies";
import Container from "@/components/element/Container";

type DetailMoviePageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const movieId = await params;
  const movie = await getDetailMovie(Number(movieId.id));
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const movieId = await Promise.resolve(params);
  const movie = await getDetailMovie(Number(movieId.id));
  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

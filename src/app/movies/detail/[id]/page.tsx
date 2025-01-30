import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies";
import Container from "@/components/element/Container";

type DetailMoviePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const idMovie = (await params).id;
  const movie = await getDetailMovie(idMovie);
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const idMovie = (await params).id;
  const movie = await getDetailMovie(idMovie);

  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

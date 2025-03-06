import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies/components/Detail";
import Container from "@/components/element/Container";

type DetailMoviePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const { id } = await params;
  const movie = await getDetailMovie(id);
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const { id } = await params;
  const movie = await getDetailMovie(id);

  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

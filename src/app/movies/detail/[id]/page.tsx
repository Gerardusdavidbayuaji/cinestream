import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies";
import Container from "@/components/element/Container";

type DetailMoviePageProps = {
  params: Promise<{ id: number }>;
};

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const movie = await getDetailMovie((await params).id);
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const movie = await getDetailMovie((await params).id);

  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

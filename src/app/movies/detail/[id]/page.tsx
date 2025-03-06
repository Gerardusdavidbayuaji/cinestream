import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

type DetailMoviePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const { id } = await params;
  const movie = await getDetailMovie(Number(id));
  return {
    title: movie.title + " | CineStream",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const { id } = await params;
  const movie = await getDetailMovie(Number(id));
  console.log("tampilkan id", id);

  return (
    <>
      <Container>
        <Detail movie={movie} />
      </Container>
    </>
  );
}

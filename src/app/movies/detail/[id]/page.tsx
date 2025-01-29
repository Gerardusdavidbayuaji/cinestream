import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

interface DetailMoviePageProps {
  params: { id: number };
}

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const movieId = params.id;
  const movie = await getDetailMovie(movieId);

  return {
    title: `${movie.title} | CineStream`,
  };
}

export default async function DetailPage({ params }: DetailMoviePageProps) {
  // const movieId = params.id;
  const movie = await getDetailMovie(params.id);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
}

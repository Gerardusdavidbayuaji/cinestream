import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movieId = Number(params.id);
  const movie = await getDetailMovie(movieId);

  return {
    title: `${movie.title} | CineStream`,
  };
}

const DetailPage = async ({ params }: Props) => {
  const movieId = Number(params.id);
  const movie = await getDetailMovie(movieId);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
};

export default DetailPage;

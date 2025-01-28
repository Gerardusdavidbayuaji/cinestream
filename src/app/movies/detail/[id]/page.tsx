import { Metadata } from "next";

import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

interface DetailPageProps {
  params: { id: number };
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const movie = await getDetailMovie(params.id);
  return {
    title: movie.title + " | CineStream",
  };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const movie = await getDetailMovie(params.id);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
};

export default DetailPage;

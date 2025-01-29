import { getDetailMovie } from "@/services/apis/movies";
import Container from "@/components/element/Container";
import Detail from "@/modules/movies";

interface DetailMoviePageProps {
  params: { id: number };
}

export default async function DetailPage({ params }: DetailMoviePageProps) {
  const movie = await getDetailMovie(params.id);
  return (
    <div>
      <Container>
        <Detail movie={movie} />
      </Container>
    </div>
  );
}

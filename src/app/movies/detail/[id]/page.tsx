import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDetailMovie } from "@/services/apis/movies";
import Detail from "@/modules/movies";
import Container from "@/components/element/Container";

// Define the type for Detail Page Props
type DetailMoviePageProps = {
  params: { id: string } | Promise<{ id: string }>;
};

// Generate Metadata for SEO
export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const movie = await getDetailMovie(resolvedParams.id);
  if (!movie) return {};

  return {
    title: `${movie.title} | CineStream`,
  };
}

// Detail Movie Page Component
export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const resolvedParams = await params;
  const movie = await getDetailMovie(resolvedParams.id);

  // Handle Not Found Case
  if (!movie) {
    return notFound();
  }

  return (
    <Container>
      <Detail movie={movie} />
    </Container>
  );
}

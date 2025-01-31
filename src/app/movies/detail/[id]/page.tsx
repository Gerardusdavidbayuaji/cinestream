"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

import Detail from "@/modules/movies";
import Container from "@/components/element/Container";
import axiosWithConfig from "@/services/apis/axiosWithConfig";

const fetchMovieDetail = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(
      `/movie/${id}?append_to_response=videos`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export default function DetailMoviePage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetchMovieDetail(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return notFound();
  }

  return (
    <Container>
      <Detail movie={movie} />
    </Container>
  );
}

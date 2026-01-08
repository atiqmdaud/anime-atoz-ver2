import { useParams } from "react-router-dom";
import { useGetAnimeByIdQuery } from "../animeApi";
import ErrorMessage from "@/components/feedback/ErrorMessage";
import NotFound from "@/components/feedback/NotFound";

export default function AnimeDetailsPage() {
  const { id } = useParams();
  const {
    data: anime,
    isLoading,
    isError,
    refetch,
  } = useGetAnimeByIdQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return (
      <ErrorMessage
        message="Failed to load anime details."
        onRetry={() => refetch()}
      />
    );
  }

  if (!anime) {
    return (
      <NotFound title="Anime not found" description="Try another anime." />
    );
  }

  return (
    <div className="p-6 space-y-4">
      <img src={anime?.image} className="w-full max-w-md rounded" />
      <h1 className="text-3xl font-bold">{anime?.title}</h1>
      <p className="text-gray-700">{anime?.synopsis}</p>
      <p className="text-lg">⭐ Score: {anime?.score}</p>
    </div>
  );
}

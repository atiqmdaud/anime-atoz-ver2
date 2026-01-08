import AnimeCard from "./AnimeCard";
import { useSearchAnimeQuery } from "../animeApi";
import ErrorMessage from "@/components/feedback/ErrorMessage";
import NotFound from "@/components/feedback/NotFound";

export default function AnimeList({ search }: { search: string }) {
  const query = search.trim() === "" ? "doraemon" : search.trim();

  const { data, isLoading, isError, refetch, isFetching } = useSearchAnimeQuery(
    query
    // {
    //   refetchOnMountOrArgChange: true,
    // }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isFetching) return <p>Fetching...</p>;

  if (isError) {
    return (
      <ErrorMessage
        message="Failed to load anime. Please try again."
        onRetry={() => refetch()}
      />
    );
  }

  if (!data?.length) {
    return (
      <NotFound title="No anime found" description="Try another keyword." />
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}

import Input from "@/components/ui/Input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearch } from "@/feactures/anime/animeSlice";
import AnimeList from "@/feactures/anime/components/AnimeList";
import { useDebounce } from "@/hooks/useDebounce";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((s) => s.anime.search);

  // Debounce the search term
  const debouncedSearch = useDebounce(search, 1000);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
        Anime AtoZ
      </h1>
      <Input
        className="max-w-md mx-auto"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <AnimeList search={debouncedSearch} />
    </div>
  );
}

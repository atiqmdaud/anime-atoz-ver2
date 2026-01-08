import { Link } from "react-router-dom";
import Card from "@/components/ui/Card";
import type { Anime } from "../models/Anime";

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Link to={`/anime/${anime.id}`}>
      <Card className="hover:shadow-lg transition cursor-pointer">
        <img src={anime.image} className="w-full h-48 object-cover rounded" />
        <h3 className="font-semibold mt-2">{anime.title}</h3>
        <p className="text-sm text-gray-600">⭐ {anime.score}</p>
      </Card>
    </Link>
  );
}

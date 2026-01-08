import type { Anime } from "../models/Anime";
import type { AnimeDto } from "../dtos/AnimeDto";

export function mapAnimeDto(dto: AnimeDto): Anime {
  return {
    id: dto.mal_id,
    title: dto.title,
    image: dto.images.jpg.image_url,
    score: dto.score,
    synopsis: dto.synopsis,
  };
}

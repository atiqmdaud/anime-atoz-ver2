import { describe, it, expect } from "vitest";
import { mapAnimeDto } from "./animeMapper";
import type { AnimeDto } from "../dtos/AnimeDto";

describe("mapAnimeDto", () => {
  it("maps AnimeDto to Anime correctly", () => {
    const dto: AnimeDto = {
      mal_id: 123,
      title: "Test Anime",
      images: {
        jpg: { image_url: "https://example.com/image.jpg" },
      },
      score: 9.0,
      synopsis: "A test synopsis.",
    };

    const result = mapAnimeDto(dto);

    expect(result).toEqual({
      id: 123,
      title: "Test Anime",
      image: "https://example.com/image.jpg",
      score: 9.0,
      synopsis: "A test synopsis.",
    });
  });

  it("handles missing score and synopsis", () => {
    const dto: AnimeDto = {
      mal_id: 456,
      title: "Another Anime",
      images: {
        jpg: { image_url: "https://example.com/another.jpg" },
      },
      score: undefined as any, // Simulate missing
      synopsis: undefined as any,
    };

    const result = mapAnimeDto(dto);

    expect(result).toEqual({
      id: 456,
      title: "Another Anime",
      image: "https://example.com/another.jpg",
      score: undefined,
      synopsis: undefined,
    });
  });
});

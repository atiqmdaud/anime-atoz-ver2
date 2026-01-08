import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AnimeDto } from "./dtos/AnimeDto";
import { mapAnimeDto } from "./mappers/animeMapper";
import type { Anime } from "./models/Anime";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    searchAnime: builder.query<Anime[], string>({
      query: (q) => `anime?q=${q}`,
      // keepUnusedDataFor: 0, // disable caching

      transformResponse: (response: { data: AnimeDto[] }) =>
        response.data.map(mapAnimeDto),
    }),
    getAnimeById: builder.query<Anime, number>({
      query: (id) => `anime/${id}`,
      transformResponse: (response: { data: AnimeDto }) =>
        mapAnimeDto(response.data),
    }),
  }),
});

export const { useSearchAnimeQuery, useGetAnimeByIdQuery } = animeApi;

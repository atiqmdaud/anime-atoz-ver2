import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.jikan.moe/v4/anime", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";

    // Mocked response structure based on Jikan API
    return HttpResponse.json({
      data: [
        {
          mal_id: 1,
          title: `Mocked Anime for "${q}"`,
          images: {
            jpg: { image_url: "https://example.com/mock.jpg" },
          },
          score: 8.5,
          synopsis: "A mocked synopsis.",
        },
      ],
    });
  }),
];

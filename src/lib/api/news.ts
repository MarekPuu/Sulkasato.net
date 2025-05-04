import type { NewsItem } from "../../types";

const API_URL = import.meta.env.PUBLIC_DIRECTUS_API_URL;

type NewsQueryParams = {
  limit?: number;
  filter?: Record<string, unknown>;
  sort?: string;
};

export async function fetchNews(
  params: NewsQueryParams = {}
): Promise<NewsItem[]> {
  const searchParams = new URLSearchParams();

  if (params.sort) searchParams.set("sort", params.sort);
  if (params.limit) searchParams.set("limit", String(params.limit));
  if (params.filter) {
    for (const [key, value] of Object.entries(params.filter)) {
      searchParams.set(`filter[${key}]`, String(value));
    }
  }

  const url = `${API_URL}/items/Post?${searchParams.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
    const data = await res.json();
    return data.data ?? [];
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw err;
  }
}

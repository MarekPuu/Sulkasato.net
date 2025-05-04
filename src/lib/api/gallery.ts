import type { GalleryItem } from "../../types";

const API_URL = import.meta.env.PUBLIC_DIRECTUS_API_URL;

export async function fetchGallery(): Promise<GalleryItem[]> {
  const params = new URLSearchParams({
    filter: JSON.stringify({ status: { _eq: "Visible" } }),
    sort: "StartDate",
    fields: "Title,Url,ThumbnailImageUrl,StartDate,EndDate",
  });

  const url = `${API_URL}/items/Gallery?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
    const data = await res.json();
    const gallery: GalleryItem[] = data.data ?? [];

    return gallery;
  } catch (err) {
    console.error("Error fetching gallery:", err);
    throw err;
  }
}

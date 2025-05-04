import type { ScheduleItem } from "../../types";
import { sortByWeekday } from "../../utils/DateUtils";

const API_URL = import.meta.env.PUBLIC_DIRECTUS_API_URL;

export async function fetchSchedule(): Promise<ScheduleItem[]> {
  const url = `${API_URL}/items/Pelivuorot`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
    const data = await res.json();
    const schedule: ScheduleItem[] = data.data ?? [];

    schedule.sort(sortByWeekday);

    return schedule;
  } catch (err) {
    console.error("Error fetching schedule:", err);
    throw err;
  }
}

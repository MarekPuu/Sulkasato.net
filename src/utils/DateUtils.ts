import type { ScheduleItem } from "../types";

const weekdayOrder: Record<string, number> = {
  Maanantai: 1,
  Tiistai: 2,
  Keskiviikko: 3,
  Torstai: 4,
  Perjantai: 5,
  Lauantai: 6,
  Sunnuntai: 7,
};

function parseTime(timeStr: string) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

export function sortByWeekday(a: ScheduleItem, b: ScheduleItem): number {
  const dayA = weekdayOrder[a.Day] ?? 99;
  const dayB = weekdayOrder[b.Day] ?? 99;

  if (dayA !== dayB) return dayA - dayB;

  return parseTime(a.StartTime) - parseTime(b.StartTime);
}

export const dayMeta = [
  { id: "mon", surface: "var(--color-day-mon)", ink: "var(--color-on-day)" },
  { id: "tue", surface: "var(--color-day-tue)", ink: "var(--color-day-ink)" },
  { id: "wed", surface: "var(--color-day-wed)", ink: "var(--color-day-ink)" },
  { id: "thu", surface: "var(--color-day-thu)", ink: "var(--color-on-day)" },
  { id: "fri", surface: "var(--color-day-fri)", ink: "var(--color-on-day)" },
  { id: "sat", surface: "var(--color-day-sat)", ink: "var(--color-on-day)" },
  { id: "sun", surface: "var(--color-day-sun)", ink: "var(--color-on-day)" },
] as const;

export type DayId = (typeof dayMeta)[number]["id"];

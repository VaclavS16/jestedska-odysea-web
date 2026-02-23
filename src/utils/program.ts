import type { JoBand } from "../types/content";

export const toBandSlug = (band: JoBand): string => {
  if (band.pathPart) return band.pathPart;

  return band.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const formatBandTime = (dateValue?: string): string => {
  if (!dateValue) return "";
  const startDate = new Date(dateValue);
  const hours = `${startDate.getHours()}`.padStart(2, "0");
  const minutes = `${startDate.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
};

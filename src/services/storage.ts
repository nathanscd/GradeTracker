import { Grade } from "../types";

const KEY = "grades";

export function getGrades(): Grade[] {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveGrades(data: Grade[]) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
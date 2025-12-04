import { useState, useEffect } from "react";
import { Grade } from "../types";

export function useGrades() {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("grades");
    if (saved) setGrades(JSON.parse(saved));
  }, []);

  function addGrade(g: Grade) {
    const updated = [...grades, g];
    setGrades(updated);
    localStorage.setItem("grades", JSON.stringify(updated));
  }

  function removeGrade(id: string) {
    const updated = grades.filter((g) => g.id !== id);
    setGrades(updated);
    localStorage.setItem("grades", JSON.stringify(updated));
  }

  return { grades, addGrade, removeGrade };
}

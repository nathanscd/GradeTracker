import { useEffect, useState } from "react";
import { Grade } from "../types";
import { getGrades, saveGrades } from "../services/storage";

export default function GradeTable() {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    setGrades(getGrades());
  }, []);

  function media(g: Grade) {
    const m= (g.simulado1 + g.simulado2 + g.prova);
    return Math.min(m, 10);
  }

  function removeGrade(id:string){
    const filtered = grades.filter( g => g.id !== id);
    setGrades(filtered);
    saveGrades(filtered);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sim1</th>
          <th>Sim2</th>
          <th>Prova</th>
          <th>Média</th>
        </tr>
      </thead>

      <tbody>
        {grades.map(g => {
          const m = media(g);
          return (
            <tr key={g.id} className={m >= 6 ? "ok" : "bad"}>
              <td>{g.nome}</td>
              <td>{g.simulado1}</td>
              <td>{g.simulado2}</td>
              <td>{g.prova}</td>
              <td>{m.toFixed(1)}</td>
              <td>
                <button onClick={() => { 
                  removeGrade(g.id); 
                  window.location.reload(); 
                }}>
                  Remover
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import { useState, useEffect } from "react";
import { saveGrades } from "../services/storage";

export default function Settings() {
  const [theme, setTheme] = useState("light");

  function resetData() {
    if (!confirm("Tem certeza que deseja apagar todas as notas?")) return;
    saveGrades([]);
    alert("Dados apagados.");
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="page settings">
      <h1>Configurações</h1>

      <div className="card">
        <h2>Tema</h2>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </div>

      <div className="card danger">
        <h2>Resetar Dados</h2>
        <button onClick={resetData}>Apagar todas as notas</button>
      </div>

      <div className="card">
        <h2>Sobre</h2>
        <p>GradeTracker reconstruído com React + Vite + TS.</p>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Grade } from "../types";
import { getGrades, saveGrades } from "../services/storage";

export default function GradeForm() {
  const [nome, setNome] = useState("");
  const [sim1, setSim1] = useState("");
  const [sim2, setSim2] = useState("");
  const [prova, setProva] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newGrade: Grade = {
      id: crypto.randomUUID(),
      nome,
      simulado1: Number(sim1),
      simulado2: Number(sim2),
      prova: Number(prova),
    };

    const all = getGrades();
    all.push(newGrade);
    saveGrades(all);

    setNome("");
    setSim1("");
    setSim2("");
    setProva("");
    alert("Nota adicionada");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Simulado 1" value={sim1} onChange={e => setSim1(e.target.value)} />
      <input placeholder="Simulado 2" value={sim2} onChange={e => setSim2(e.target.value)} />
      <input placeholder="Prova" value={prova} onChange={e => setProva(e.target.value)} />
      <button type="submit" onClick={() => window.location.reload()}>
        Salvar
      </button>
    </form>
  );
}

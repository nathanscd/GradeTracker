import { useState } from "react";
import { useGrades } from "../services/useGrades";
import { Grade } from "../types";

export default function GradeForm({ close }: { close?: () => void }) {
  const { addGrade } = useGrades();

  const [nome, setNome] = useState("");
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [prova, setProva] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newGrade: Grade = {
      id: crypto.randomUUID(),
      nome,
      simulado1: Number(s1),
      simulado2: Number(s2),
      prova: Number(prova),
    };

    addGrade(newGrade);

    setNome("");
    setS1("");
    setS2("");
    setProva("");

    if (close) close();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Simulado 1"
        type="number"
        value={s1}
        onChange={(e) => setS1(e.target.value)}
      />

      <input
        placeholder="Simulado 2"
        type="number"
        value={s2}
        onChange={(e) => setS2(e.target.value)}
      />

      <input
        placeholder="Prova"
        type="number"
        value={prova}
        onChange={(e) => setProva(e.target.value)}
      />

      <button className="btn" type="submit">Salvar</button>
    </form>
  );
}

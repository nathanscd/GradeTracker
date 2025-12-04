import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useGrades } from "../services/useGrades";

export default function GradeChart() {
  const { grades } = useGrades();

  const data = grades.map((g, index) => ({
    name: g.nome || `Atividade ${index + 1}`,
    media: g.simulado1 + g.simulado2 + g.prova >= 10 
      ? 10 
      : g.simulado1 + g.simulado2 + g.prova
  }));

  if (grades.length === 0) return <p>Nenhum dado disponível.</p>;

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 10]} />
      <Tooltip />
      <Line type="monotone" dataKey="media" stroke="#8e44ff" strokeWidth={3} />
    </LineChart>
  );
}

import GradeTable from "../components/GradeTable";
import GradeForm from "../components/GradeForm";


export default function Home() {
  return (
    <>
      <div className="page">
        <h1>GradeTracker</h1>
      </div>

      <div className="page">
        <h1>Dashboard</h1>
        <GradeTable />
      </div>

      <div className="page">
        <h1>Adicionar Nota</h1>
        <GradeForm />
      </div>
    </>
  );
}

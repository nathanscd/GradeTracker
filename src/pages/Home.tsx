import { useState } from "react";
import GradeTable from "../components/GradeTable";
import GradeChart from "../components/GradeChart";
import SettingsModal from "../components/SettingsModal";
import GradeFormModal from "../components/GradeFormModal";

export default function Home() {
  const [openSettings, setOpenSettings] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <div className="card">
        <h1>GradeTracker</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="settings-btn" onClick={() => setOpenSettings(true)}>
            Configurações
          </button>

          <button className="add-btn" onClick={() => setOpenForm(true)}>
            Adicionar Disciplina
          </button>
        </div>
      </div>

      <div className="card">
        <h1>Dashboard</h1>
        <GradeTable />
      </div>

      <div className="card">
        <h1>Evolução das Notas</h1>
        <GradeChart />
      </div>

      {openSettings && (
        <SettingsModal close={() => setOpenSettings(false)} />
      )}

      {openForm && (
        <GradeFormModal close={() => setOpenForm(false)} />
      )}
    </>
  );
}

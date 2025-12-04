import { useState } from "react";
import GradeTable from "../components/GradeTable";
import GradeForm from "../components/GradeForm";
import GradeChart from "../components/GradeChart";
import SettingsModal from "../components/SettingsModal";

export default function Home() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="header">
          <h1>GradeTracker</h1>
          <button className="settings-btn" onClick={() => setOpenSettings(true)}>Configurações</button>
        </div>

      <div className="card">
        <h1>Dashboard</h1>
        <GradeTable />
      </div>

      <div className="card">
        <h1>Evolução das Notas</h1>
        <GradeChart />
      </div>

      <div className="card">
        <h1>Adicionar Nota</h1>
        <GradeForm />
      </div>

      {openSettings && <SettingsModal close={() => setOpenSettings(false)} />}
    </div>
    </>
  );
}

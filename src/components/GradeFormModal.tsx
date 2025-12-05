import GradeForm from "./GradeForm";

export default function GradeFormModal({ close }: { close: () => void }) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Adicionar Disciplina</h2>

        <GradeForm close={close} />

        <button className="close-btn" onClick={close}>
          Fechar
        </button>
      </div>
    </div>
  );
}

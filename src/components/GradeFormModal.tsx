import GradeForm from "./GradeForm";

export default function GradeFormModal({ close }: { close: () => void }) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={close}>
          Fechar
        </button>
        <h2 className="ADD">Adicionar Disciplina</h2>
        <GradeForm close={close} />
      </div>
    </div>
  );
}

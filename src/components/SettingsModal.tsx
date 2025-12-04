export default function SettingsModal({ close }: { close: () => void }) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Configurações</h2>

        <div className="setting-item">
          <label>Tema</label>
          <select>
            <option value="dark">Escuro</option>
            <option value="light">Claro</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Ordem da tabela</label>
          <select>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>

        <button className="close-btn" onClick={close}>
          Fechar
        </button>
      </div>
    </div>
  );
}

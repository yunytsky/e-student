const Documents = () => {
    return (
      <div className="documents">
        <h3>Документи</h3>
        <ul className="documents-list">
          <li className="document">
            <span>Договір на проживання</span>
            <div className="document-links">
                <a href="/Договір_на_проживання.pdf" download="Договір_на_проживання.pdf" className="document-download-button button-empty">Завантажити</a>
                <a href="/Договір_на_проживання.pdf" target="_blank" className="document-preview-button">Переглянути</a>
            </div>
          </li>
          <li className="document">
            <span>Правила внутрішнього розпорядку в студентських гуртожитках</span>
            <div className="document-links">
                <a href="/Правила_внутрішнього_розпорядку.pdf" download="Правила_внутрішнього_розпорядку.pdf" className="document-download-button button-empty">Завантажити</a>
                <a href="/Правила_внутрішнього_розпорядку.pdf" target="_blank" className="document-preview-button">Переглянути</a>
            </div>
          </li>
          <li className="document">
            <span>Положення про ОСС студмістечка</span>
            <div className="document-links">
                <a href="/Положення_про_ОСС.pdf" download="Положення_про_ОСС.pdf" className="document-download-button button-empty">Завантажити</a>
                <a href="/Положення_про_ОСС.pdf" target="_blank" className="document-preview-button">Переглянути</a>
            </div>
          </li>
        </ul>
      </div>
    );    
};

export default Documents;
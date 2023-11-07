const Documents = () => {
    return (
      <div className="documents">
        <h3>Коваль Сергій Іванович</h3>
        <ul className="documents-list">
          <li className="document">
            <span>Договір на проживання</span>
            <div className="document-links">
                <a href="" className="document-download-button button-empty">Завантажити</a>
                <a href="" className="document-preview-button">Переглянути</a>
            </div>
          </li>
          <li className="document">
            <span>Правила внутрішнього розпорядку в студентських гуртожитках</span>
            <div className="document-links">
                <a href="" className="document-download-button button-empty">Завантажити</a>
                <a href="" className="document-preview-button">Переглянути</a>
            </div>
          </li>
          <li className="document">
            <span>Положення про ОСС студмістечка</span>
            <div className="document-links">
                <a href="" className="document-download-button button-empty">Завантажити</a>
                <a href="" className="document-preview-button">Переглянути</a>
            </div>
          </li>
        </ul>
      </div>
    );    
};

export default Documents;
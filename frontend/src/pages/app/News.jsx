import { Link } from "react-router-dom";

import arrowIcon from "../../assets/arrow-right.svg";
import tempImage from "../../assets/temp.jpg";

const News = () => {
    return (
      <div className="news">
        <h3>Новини</h3>
        <div className="news-container">
          <div className="news-items">
            <div className="news-item">
              <div className="news-item-image">
                <img src={tempImage} alt="news image" />
              </div>
              <div className="news-item-text">
                <div className="news-item-date">05.10.2023</div>
                <h4>Співпраця з роботодавцями</h4>
                <p>
                  Спільна освітня програма факультету комп'ютерних наук та
                  кібернетики з нашим надійним партнером, ІТ-компанією
                  SoftServe...
                </p>
                <Link to="#" className="news-item-view-more">
                  Детальніше
                </Link>
              </div>
            </div>
            <div className="news-item">
              <div className="news-item-image">
                <img src={tempImage} alt="news image" />
              </div>
              <div className="news-item-text">
                <div className="news-item-date">05.10.2023</div>
                <h4>Співпраця з роботодавцями</h4>
                <p>
                  Спільна освітня програма факультету комп'ютерних наук та
                  кібернетики з нашим надійним партнером, ІТ-компанією
                  SoftServe...
                </p>
                <Link to="#" className="news-item-view-more">
                  Детальніше
                </Link>
              </div>
            </div>
            <div className="news-item">
              <div className="news-item-image">
                <img src={tempImage} alt="news image" />
              </div>
              <div className="news-item-text">
                <div className="news-item-date">05.10.2023</div>
                <h4>Співпраця з роботодавцями</h4>
                <p>
                  Спільна освітня програма факультету комп'ютерних наук та
                  кібернетики з нашим надійним партнером, ІТ-компанією
                  SoftServe...
                </p>
                <Link to="#" className="news-item-view-more">
                  Детальніше
                </Link>
              </div>
            </div>
            <div className="news-item">
              <div className="news-item-image">
                <img src={tempImage} alt="news image" />
              </div>
              <div className="news-item-text">
                <div className="news-item-date">05.10.2023</div>
                <h4>Співпраця з роботодавцями</h4>
                <p>
                  Спільна освітня програма факультету комп'ютерних наук та
                  кібернетики з нашим надійним партнером, ІТ-компанією
                  SoftServe...
                </p>
                <Link to="#" className="news-item-view-more">
                  Детальніше
                </Link>
              </div>
            </div>
          </div>
          <aside className="news-information">
            <h5>Посилання та контактна інформація</h5>
            <ul>
              <li>
                <span>
                  Приймальня декана: <strong>+380445213554</strong>
                </span>
              </li>
              <li>
                <span>
                  Заступник декана з навчально-методичної та виховної роботи:{" "}
                  <strong>+380442590119</strong>
                </span>
              </li>
              <li>
                <span>
                  Заступник декана з наукової та міжнародної роботи:{" "}
                  <strong>+380442590119</strong>
                </span>
              </li>
              <li>
                <span>
                  Деканат факультету: <strong>+380445213274</strong>
                </span>
              </li>
              <li>
                <span>
                  E-mail:{" "}
                  <a href="#" id="email" type="email">
                    facultycsc@gmail.com
                  </a>
                </span>
                <span>
                  <a id="telegram" href="#">
                    Telegram
                  </a>
                </span>
              </li>
            </ul>
          </aside>
        </div>
        <div className="news-pagination">
          <button className="news-pagination-button active">1</button>
          <button className="news-pagination-button">2</button>
          <button className="news-pagination-button">3</button>
          <button className="news-pagination-button">...</button>
          <button className="news-pagination-button">38</button>
          <button className="news-pagination-button">
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      </div>
    );
};

export default News;
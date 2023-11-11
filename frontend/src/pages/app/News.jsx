import { Link } from "react-router-dom";

import arrowIcon from "../../assets/arrow-right.svg";
import tempImage from "../../assets/temp.jpg";
import tempImage2 from "../../assets/temp2.png";
import tempImage3 from "../../assets/temp3.jfif";
import tempImage4 from "../../assets/temp4.jpg";

const News = (props) => {
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
                <img src={tempImage2} alt="news image" />
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
                <img src={tempImage3} alt="news image" />
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
                <img src={tempImage4} alt="news image" />
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
            {props.type === "student" ? (
              <ul className="news-information-items student">
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
                  <span id="email" >
                    E-mail:{" "}
                    <a href="#" type="email">
                      facultycsc@gmail.com
                    </a>
                  </span>
                  <span id="telegram">
                    <a  href="#">
                      Telegram
                    </a>
                  </span>
                </li>
              </ul>
            ) : null}

            {props.type === "dweller" ? (
              <ul className="news-information-items dweller">
                <li>
                  <span>
                    <a href="https://studmisto.knu.ua/">
                      https://studmisto.knu.ua/
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    Для довідок: <strong>+380445213588</strong>
                  </span>
                </li>

                <li>
                  <span>
                    <a id="telegram" href="#">
                      Telegram
                    </a>
                  </span>
                </li>

              </ul>
            ) : null}
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
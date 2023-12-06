import { Link } from "react-router-dom";

import arrowIcon from "../../assets/arrow-right.svg";
import tempImage from "../../assets/temp.jpg";
import tempImage2 from "../../assets/temp2.png";
import tempImage3 from "../../assets/temp3.jfif";
import tempImage4 from "../../assets/temp4.jpg";

const Contacts = (props) => {
    return (
      <div className="contacts">
        <h3>Посилання та контактна інформація</h3>
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
              <span id="email">
                E-mail:{" "}
                <a href="mailto:facultycsc@gmail.com" type="email">
                  facultycsc@gmail.com
                </a>
              </span>
            </li>
            <li>
              <span id="telegram">
                <a href="https://t.me/cyberknu" target="_blank">Telegram</a>
              </span>
            </li>
          </ul>
        ) : null}

        {props.type === "resident" ? (
          <ul className="news-information-items resident">
            <li>
              <span>
                <a href="https://studmisto.knu.ua/" target="_blank">
                  Сайт студмістечка
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
                <a id="telegram" href="https://t.me/studmistoknu" target="_blank">
                  Telegram
                </a>
              </span>
            </li>
          </ul>
        ) : null}
      </div>
    );
};

export default Contacts;
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Header = (props) => {
    const auth = useSelector(state => state.auth.value);
    const navigate = useNavigate();

  //Protec for authorized users
  useEffect(() => {
    if(auth.user){
      navigate("/app/student/cabinet");
    }
  }, [auth])

    return (
      <header className="header www">
        <Link to="/" className="logo">
          <img src={logo}/>
          <span>Е-студент</span>
        </Link>
        <nav className="header-nav">
          <a
            className="support-link"
            href="https://savelife.in.ua/donate/#donate-army-card-monthly"
            target="_blank"
          >
            Підтримати ЗСУ
          </a>
          {props.type === "main" ? (
            <>
              {" "}
              <Link to="/login" className="header-cta button-empty">
                Увійти
              </Link>
              <Link to="/signup" className="header-cta button-filled">
                Зареєструватись
              </Link>
            </>
          ) : (
            <Link to="/" className="header-cta button-empty">
              На головну
            </Link>
          )}
        </nav>
      </header>
    );
};

export default Header;
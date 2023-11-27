import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <header className="header www">
        <Link to="/" className="logo">
          Е-студент
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
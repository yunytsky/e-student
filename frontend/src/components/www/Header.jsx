import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="header www">
        <Link to="/" className="logo">Е-студент</Link>
        <nav className="header-nav">
          <a className="support-link" href="#">
            Підтримати ЗСУ
          </a>
          <Link to="/login" className="header-cta button-empty">
            Увійти
          </Link>
          <Link to="/signup" className="header-cta button-filled">
            Зареєструватись
          </Link>
        </nav>
      </header>
    );
};

export default Header;
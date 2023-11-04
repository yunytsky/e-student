import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header www">
            <div className="logo">Е-студент</div>
            <nav className="header-nav">
                <a className="support-link" href="#">Підтримати ЗСУ</a>
                <button className="header-cta button-empty">
                    <Link to="#">Увійти</Link>
                </button>
                <button className="header-cta button-filled">
                    <Link to="#">Зареєструватись</Link>
                </button>
            </nav>
        </header>
    )
};

export default Header;
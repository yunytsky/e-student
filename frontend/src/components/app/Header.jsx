import { Link } from "react-router-dom";

const Header = (props) => {
 return(
    <header className="header app">
        <div className="header-left">
            <button className="header-sidebar-button">
               <span></span><span></span><span></span>
            </button>
            <div className="logo">Е-студент</div>
        </div>
        <div className="header-right">
            <Link className="header-switch">{props.type === "student" ? "Кабінет мешканця" : (props.type === "dweller" ? "Кабінет студента" : "") }</Link>
            <button className="header-user">Прізвище Ім'я</button>
        </div>
    </header>
 );
};

export default Header;
import { Link } from "react-router-dom";

const Header = () => {
 return(
    <header className="header">
        <div className="header-left">
            <div className="logo">Е-студент</div>
        </div>
        <div className="header-right">
            <Link className="header-switch"></Link>
            <button className="header-user"></button>
        </div>
    </header>
 );
};

export default Header;
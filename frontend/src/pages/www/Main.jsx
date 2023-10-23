import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = () => {
    return(
        <>
            <Header/>
            <div className="content">
                <div className="hero">
                    <h4>
                        КНУ імені Т. Шевченка
                    </h4>
                    <h1>
                        Електронна система для <span>студентів</span>
                    </h1>
                    <ul className="hero-features">
                        <li>Розклад</li>
                        <li>Е-перепустка</li>
                        <li>Новини</li>
                        <li>Документи</li>
                    </ul>
                    <button className="button-filled hero-cta">
                        <Link to="#">Увійти</Link>
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Main;
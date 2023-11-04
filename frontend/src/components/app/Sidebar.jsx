import { Link } from "react-router-dom";
import cabinetIcon from "../../assets/person.svg";
import scheduleIcon from "../../assets/clock.svg";
import newsIcon from "../../assets/paper.svg";
import chatIcon from "../../assets/chat.svg";


const Sidebar = () => {
 return(
    <aside className="sidebar">
        <Link className="sidebar-page active">
            <img src={cabinetIcon} alt="person" />
            <span>
                Кабінет
            </span>
        </Link>

        <Link className="sidebar-page ">
        <img src={scheduleIcon} alt="person" />
            <span>
                Розклад
            </span>
        </Link>

        <Link className="sidebar-page ">
        <img src={newsIcon} alt="person" />

            <span>
                Новини
            </span>
        </Link>

        <Link className="sidebar-page ">
        <img src={chatIcon} alt="person" />

            <span>
                Техпідтримка
            </span>
        </Link>

    </aside>
 );
};

export default Sidebar;
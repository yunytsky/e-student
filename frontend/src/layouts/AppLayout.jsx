import Sidebar from "../components/app/Sidebar";
import Header from "../components/app/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import cabinetIcon from "../assets/person.svg";
import scheduleIcon from "../assets/clock.svg";
import phoneIcon from "../assets/phone.svg";
import chatIcon from "../assets/chat.svg";
import permitIcon from "../assets/paper.svg";
import documentsIcon from "../assets/paper-clip.svg";

const AppLayout = (props) => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();

  //Define which pages to load
  useEffect(() => {
    props.type === "student"
      ? setPages([
          { name: "Кабінет", icon: cabinetIcon, url: "/app/student/cabinet" },
          { name: "Розклад", icon: scheduleIcon, url: "/app/student/schedule" },
          { name: "Контакти", icon: phoneIcon, url: "/app/student/contacts" },
          { name: "Техпідтримка", icon: chatIcon, url: "/app/student/support" },
        ])
      : setPages([
          { name: "Кабінет", icon: cabinetIcon, url: "/app/resident/cabinet" },
          { name: "Е-Перепустка", icon: permitIcon, url: "/app/resident/permit"},
          { name: "Розклад", icon: scheduleIcon, url: "/app/resident/schedule" },
          { name: "Контакти", icon: phoneIcon, url: "/app/resident/contacts" },
          { name: "Документи", icon: documentsIcon, url: "/app/resident/documents" },
          { name: "Техпідтримка", icon: chatIcon, url: "/app/resident/support" },
        ]);
  }, [props.type]);


  //Redirect to the main page
  useEffect(() => {
    if(location.pathname === "/app/resident"){
      navigate("/app/resident/cabinet");
    }else if( location.pathname === "/app/student"){
      navigate("/app/student/cabinet");
    }
  }, [navigate, location])

  return (
    <div className="app-container">
      <Header type={props.type} setSidebarVisible={setSidebarVisible} />
      <div className="main">
        {sidebarVisible && <Sidebar pages={pages} />}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

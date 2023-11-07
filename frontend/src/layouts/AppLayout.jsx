import Sidebar from "../components/app/Sidebar";
import Header from "../components/app/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import cabinetIcon from "../assets/person.svg";
import scheduleIcon from "../assets/clock.svg";
import newsIcon from "../assets/paper.svg";
import chatIcon from "../assets/chat.svg";
import permitIcon from "../assets/paper.svg";
import documentsIcon from "../assets/paper-clip.svg";

const AppLayout = (props) => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  //Define which pages to load
  useEffect(() => {
    props.type === "student"
      ? setPages([
          { name: "Кабінет", icon: cabinetIcon, url: "/app/student/cabinet" },
          { name: "Розклад", icon: scheduleIcon, url: "/app/student/schedule" },
          { name: "Новини", icon: newsIcon, url: "/app/student/news" },
          { name: "Техпідтримка", icon: chatIcon, url: "/app/student/support" },
        ])
      : setPages([
          { name: "Кабінет", icon: cabinetIcon, url: "/app/dweller/cabinet" },
          { name: "Е-Перепустка", icon: permitIcon, url: "/app/dweller/permit"},
          { name: "Розклад", icon: scheduleIcon, url: "/app/dweller/schedule" },
          { name: "Новини", icon: newsIcon, url: "/app/dweller/news" },
          { name: "Документи", icon: documentsIcon, url: "/app/dweller/documents" },
          { name: "Техпідтримка", icon: chatIcon, url: "/app/dweller/support" },
        ]);
  }, []);


  //Protect layout
  useEffect(() => {
    console.log(location)
    if(location.pathname === "/app/dweller"){
      navigate("/app/dweller/cabinet");
    }else if( location.pathname === "/app/student"){
      navigate("/app/student/cabinet");
    }
  }, [navigate, location])

  return (
    <div className="app-container">
      <Header type={props.type}/>
      <div className="main">
        <Sidebar pages={pages} />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

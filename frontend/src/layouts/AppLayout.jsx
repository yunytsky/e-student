import Sidebar from "../components/app/Sidebar";
import Header from "../components/app/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import cabinetIcon from "../assets/person.svg";
import scheduleIcon from "../assets/clock.svg";
import newsIcon from "../assets/paper.svg";
import chatIcon from "../assets/chat.svg";

const AppLayout = (props) => {
  const [pages, setPages] = useState([]);
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
        { name: "Кабінет", icon: cabinetIcon },
        { name: "Розклад", icon: scheduleIcon },
        { name: "Е-Перепустка", icon: scheduleIcon },
        { name: "Новини", icon: newsIcon },
        { name: "Техпідтримка", icon: chatIcon },
        ]);
  }, []);

  return (
    <div className="app-container">
      <Header />
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

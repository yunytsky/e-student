import Sidebar from "../components/app/Sidebar";
import Header from "../components/app/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
        <div className="app-container">
            <Header/>
            <div className="main">
                <Sidebar/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
 const loction = useLocation();

  const handleLinkClick = () => {
    if(window.innerWidth <= 768){
      props.setSidebarVisible(false);
    }
  }
  return (
    <aside className={props.sidebarVisible ? "sidebar visible" : "sidebar"}>
      {props.pages &&
        props.pages.map((page, index) => {
          return (
            <Link onClick={handleLinkClick} to={page.url} key={index} className={page.url == location.pathname ? "sidebar-page active" : "sidebar-page"}>
              <img src={page.icon} alt="person" />
              <span>{page.name}</span>
            </Link>
          );
        })}
    </aside>
  );
};

export default Sidebar;

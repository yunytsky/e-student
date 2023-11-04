import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
 const loction = useLocation();

  return (
    <aside className="sidebar">
      {props.pages &&
        props.pages.map((page, index) => {
          return (
            <Link to={page.url} key={index} className={page.url == location.pathname ? "sidebar-page active" : "sidebar-page"}>
              <img src={page.icon} alt="person" />
              <span>{page.name}</span>
            </Link>
          );
        })}
    </aside>
  );
};

export default Sidebar;

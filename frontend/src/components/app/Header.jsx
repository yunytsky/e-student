import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logoutIcon from "../../assets/logout.svg";
import { doLogout } from "../../features/auth";

const Header = (props) => {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //Toggle dropdown
  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  //Toggle sidebar
  const toggleSidebar = () => {
    props.setSidebarVisible(prevVisible => !prevVisible);
  }

  //Hide dropdown menu when clicked elsewhere
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef !== null &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleLogout = () => {
    localStorage.clear();
    dispatch(doLogout());
    navigate("/");
  }

  return (
    <header className="header app">
      <div className="header-left">
        <button onClick={toggleSidebar} className="header-sidebar-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">Е-студент</div>
      </div>
      <div className="header-right">
        <Link to={props.type === "resident" ? "/app/student/cabinet" : "/app/resident/cabinet"} className="header-switch">
          {props.type === "student"
            ? "Кабінет мешканця"
            : props.type === "resident"
            ? "Кабінет студента"
            : ""}
        </Link>
        <button
          onClick={toggleDropdown}
          ref={dropdownButtonRef}
          className="header-user"
        >
          {auth.user.fullName}
        </button>
        {dropdownVisible ? (
          <div className="header-user-dropdown" ref={dropdownRef}>
            <button onClick={handleLogout} className="header-user-dropdown-option">
              <img src={logoutIcon} alt="option-icon" />
              <span>Log out</span>
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;

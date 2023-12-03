import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logoutIcon from "../../assets/logout.svg";
import { logout } from "../../features/auth";

const Header = (props) => {
  const user = useSelector((state) => state.auth.value.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //Toggle dropdown
  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

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
    dispatch(logout());
    navigate("/");
  }

  return (
    <header className="header app">
      <div className="header-left">
        <button className="header-sidebar-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">Е-студент</div>
      </div>
      <div className="header-right">
        <Link className="header-switch">
          {props.type === "student"
            ? "Кабінет мешканця"
            : props.type === "dweller"
            ? "Кабінет студента"
            : ""}
        </Link>
        <button
          onClick={toggleDropdown}
          ref={dropdownButtonRef}
          className="header-user"
        >
          {user.fullName}
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

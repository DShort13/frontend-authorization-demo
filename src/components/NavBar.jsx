import { useContext } from "react"; // New import
import { NavLink, useNavigate } from "react-router-dom";

import AppContext from "../context/AppContext";
import { removeToken } from "../utils/token";
import Logo from "./Logo";
import "./styles/NavBar.css";

// Remove setIsLoggedIn from props
function NavBar() {
  const navigate = useNavigate();
  // Destructure setIsLoggedIn from the value provided by AppContext
  const { setIsLoggedIn } = useContext(AppContext);

  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__nav">
        <li>
          <NavLink to="/ducks" className="navbar__link">
            Ducks
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="navbar__link">
            My Profile
          </NavLink>
        </li>
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

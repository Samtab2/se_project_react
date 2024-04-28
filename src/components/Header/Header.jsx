import "./Header.css";
import logo from "../../assets/Logo.svg";
import logo2 from "../../assets/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
function Header({
  handleAddClick,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
   
  return (
    
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn">
            + Add clothes
          </button>

          <Link to="/profile" className="header__profile-link">
            <div className="header__user-container">
              <p className="header__username">Terrence Tegegne</p>
              <img src={logo2} alt="logo2" className="header__avatar" />
            </div>
          </Link>
    </header>
  );
}

export default Header;

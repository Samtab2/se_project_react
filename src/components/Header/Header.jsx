import "./Header.css";
import logo from "../../assets/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
  avatar,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <div>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn">
              + Add clothes
            </button>
          </div>
          <Link to="/profile" className="header__profile-link">
            <div className="header__user-container">
              <button type="button" className="header__username">
                {currentUser.name}
              </button>
            </div>
          </Link>
          {avatar ? (
            <Link to="/profile">
              <img
                className="header__avatar"
                alt="avatar"
                src={currentUser.avatar}
              />
            </Link>
          ) : (
            <>
              <img className="header__avatar-logo" src={currentUser.avatar} />
            </>
          )}
        </>
      ) : (
        <>
          <button
            onClick={onRegisterClick}
            type="text"
            className="header__signup-btn">
            Sign up{" "}
          </button>
          <button
            onClick={onLoginClick}
            type="text"
            className="header__login-btn">
            Log in{" "}
          </button>
        </>
      )}
    </header>
  );
}

export default Header;

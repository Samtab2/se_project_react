import "./Header.css";
import logo from "../../assets/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  name,
  avatar,
  onLoginClick,
  onRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });


  const handleSignInModalClick = () => {
    onRegisterClick();
  }

  const handleSignUpModalClick = () => {
    onLoginClick();
  }

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
              <button className="header__username">{name}</button>
            </div>
          </Link>
          {avatar ? (
            <Link to="/profile">
              <img className="header__avatar" alt="avatar" src={avatar} />
            </Link>
          ) : (
            <>
              <div className="header__avatar-logo">{name}</div>
            </>
          )}
        </>
      ) : (
        <>
          <button
            onClick={handleSignUpModalClick}
            type="text"
            className="header__signup-btn">
            Sign up{" "}
          </button>
          <button onClick={handleSignInModalClick} type="text" className="header__login-btn">
            Log in{" "}
          </button>
        </>
      )}
    </header>
  );
}

export default Header;

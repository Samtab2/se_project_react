import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getweather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import Api from "../../utils/api";
import EditProfileModal from "../ModalWIthForm/EditProfileModal";
import Auth from "../Auth/Auth";
import { setToken, getToken } from "../../utils/token";
import LoginModal from "../ModalWIthForm/LoginModal";
import RegisterModal from "../ModalWIthForm/RegisterModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// Create an instance of the Api class
const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = new Auth({ headers: { "Content-Type": "application/json" } });

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    _id: "",
    token: "",
  });
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    _id: "",
    token: "",
  });

  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onClose = () => {
    setActiveModal("");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  const handleSignInModal = () => {
    setActiveModal("sign-in");
  };

  const handleSignUpModal = () => {
    setActiveModal("sign-up");
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    auth
      .signUp({ name, avatar, email, password })
      .then((res) => {
        setUserState({ name: res.name, avatar: res.avatar, _id: res._id });
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(onClose);
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .signIn({ email, password })
      .then((data) => {
         localStorage.setItem("jwt", data.token).
         getUser(data.token).then((user) => {
           setCurrentUser(user, data.token, true);
           navigate("/profile");
         })
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(onClose);
  };

  const handleUpdateUser = ({ name, avatar }, token) => {
    auth
      .updateUser({ name, avatar }, token)
      .then((res) => {
        setCurrentUser(res.user);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(onClose);
  };

  const handleCheckToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
       return  auth.getUser(token).then((user) => {
        console.log(user);
        setUserState(user, token, true);
    return user;
      })
      .catch((err) => {
        console.error(err);
      });
      }

    return token;
    }
  useEffect(() => {
    handleCheckToken();
  }, []);

  const handleCardLike = (id, token) => {
    console.log(id);
    !isLiked
      ? api
          .addLike(id, token)
          .then((newClothingItems) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? newClothingItems : item))
            );
            setIsLiked(true);
          })
          .catch((err) => console.log(err))
      : api
          .removeLike(id, token)
          .then((newClothingItems) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? newClothingItems : item))
            );
            setIsLiked(false);
          })
          .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = (item, token) => {
    api
      .addItem(item, token)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        onClose();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const setUserState = (user,token) => {
    setUserData({ name: user.name, avatar: user.avatar, _id: user._id, token });
  };

  const handleLogOff = () => {
    localStorage.removeItem("jwt")
    navigate("/");
    setIsLoggedIn(false);
  };

  const handleItemDelete = (token) => {
    api
      .deleteItem(selectedCard._id, token)
      .then(() => {
        const newClothingItems = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(newClothingItems);
        onClose();
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getweather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
  });

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <CurrentUserContext.Provider value={userData}>
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            handleSignUpModal={handleSignUpModal}
            handleSignInModal={handleSignInModal}
            isLoggedIn={isLoggedIn}
            name={userData.name}
            avatar={userData.avatar}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                  name={userData.name}
                  avatar={userData.avatar}
                  handleEditProfileModal={handleEditProfileModal}
                  handleLogOff={handleLogOff}
                  handleCardLike={handleCardLike}
                />
              }
            />
            </Route>
          </Routes>
        <AddItemModal
          onClose={onClose}
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
          clothingItems={clothingItems}
        />
        <ItemModal
          onDelete={handleItemDelete}
          card={selectedCard}
          onClose={onClose}
          isOpen={activeModal === "preview"}
        />
        <EditProfileModal
          isOpen={activeModal === "edit-profile"}
          onUpdateUser={handleUpdateUser}
          name={userData.name}
          avatar={userData.avatar}
        />
        <RegisterModal
          onClose={onClose}
          isOpen={activeModal === "sign-up"}
          onRegister={handleSignUp}
        />
        <LoginModal
          onClose={onClose}
          isOpen={activeModal === "sign-in"}
          onLogin={handleSignIn}
        />
        </div>
        <Footer />
      </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
export default App;

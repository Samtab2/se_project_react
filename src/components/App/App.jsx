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
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Api from "../../utils/api";

// Create an instance of the Api class
const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

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

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        onClose();
      })
      .catch(console.error);
  }

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleItemDelete = (id) => {
    api
      .deleteItem(selectedCard._id)
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
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);


  const onAddItem = (data) => {
    // Send API request to create new item
    // pass the API the data argument
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onSelectCard={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route path="/profile" element={<Profile onSelectCard={handleCardClick}
              handleAddClick={handleAddClick}/>} />
          </Routes>
        </div>
        {activeModal === "add-garment" && (
          <AddItemModal
            onClose={onClose}
            isOpen={activeModal === "add-garment"} onAddItem={handleAddItemSubmit}
          />)} {activeModal === "preview" && (    <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={onClose}
          />
         )}
     
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
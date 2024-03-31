import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext, useMemo } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
    const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    const temp = weatherData?.temp?.[currentTemperatureUnit];
    const weatherType = useMemo(() => {
      if (
        (temp >= 70 && currentTemperatureUnit === "F") ||
        (temp >= 21.11 && currentTemperatureUnit === "C")
      ) {
        return "hot";
      } else if (
        (temp >= 60 && currentTemperatureUnit === "F") ||
        (temp >= 15.56 && currentTemperatureUnit === "C")
      ) {
        return "warm";
      } else if (
        (temp <= 45 && currentTemperatureUnit === "F") ||
        (temp >= 7.22 && currentTemperatureUnit === "C")
      ) {
        return "cold";
      }
    }, [weatherData]);

    const filteredCards = clothingItems.filter((item) => {
      return weatherType && item.weather === weatherType;
    })
  return (
    <main>
      <WeatherCard day={true} type="sunny" weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData?.temp?.[currentTemperatureUnit]} &deg; / You may want to wear:
        </p>
        <ul className="cards__list">
          {filteredCards
            .map((item) => (
             <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

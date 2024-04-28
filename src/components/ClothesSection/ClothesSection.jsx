import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({ clothingItems, handleCardClick, handleAddClick, handleCardLike  }) => {
  const profileCards = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div>
      <div className="clothes-section__list">
        <p className="clothes-items">Your Items</p>
        <button className="clothes__button" onClick={handleAddClick}>
          {" "}
          + Add New
        </button>
      </div>
      <ul className="clothes-list">
        {profileCards.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            handleCardClick={handleCardClick}
            onLikeClick={handleCardLike}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;

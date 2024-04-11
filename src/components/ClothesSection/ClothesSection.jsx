import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, handleCardClick, handleAddClick }) => {
  const profileCards = clothingItems ? clothingItems : [];

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
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;

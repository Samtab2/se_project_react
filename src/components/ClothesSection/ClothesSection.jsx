import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";


const ClothesSection = ({ clothingItems, handleCardClick }) => {
const profileCards = clothingItems ? clothingItems : [];

  return (
      <div className="clothes-section__list">
      {profileCards
        .filter((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
          />
        ))}
    </div>
  );
};


export default ClothesSection;

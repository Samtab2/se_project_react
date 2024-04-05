import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";



const ClothesSection = ({ clothingItems, handleCardClick }) => {
  const profileCards = clothingItems ? clothingItems : [];


  

  return (
      <div className="clothes-section__list">
        <div>
          <p className="clothes-items">Your Items</p>
          <button className="clothes__button">Add Items</button>
        </div>
      {profileCards
        .map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            handleCardClick={handleCardClick}
          />
        ))}
    </div>
  );
};


export default ClothesSection;

import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import AddItemModal from "../AddItemModal/AddItemModal";
import { useState } from "react";

const ClothesSection = ({ clothingItems, handleCardClick, addItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileCards = clothingItems ? clothingItems : [];
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="clothes-section__list">
        <p className="clothes-items">Your Items</p>
        <button className="clothes__button" onClick={addItem}>
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

      <AddItemModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        addItem={addItem}
      />
    </div>
  );
};

export default ClothesSection;

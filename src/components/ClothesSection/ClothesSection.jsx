import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div>
        <p>Your items</p>
        <button> + Add New</button>
      </div>
      <ul className="clothes-section__list">
      {defaultClothingItems
        .filter((item) => {
            <ItemCard
              key={item._id}
              item={item}
              //onCardClick={handleCardClick}
              // TODO - pass as props
            />
        } )}
   
      </ul>
    </div>
  );
}

export default ClothesSection;

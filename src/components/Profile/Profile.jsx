import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ handleCardClick, clothingItems, handleAddClick }) {
  const addItem = () => {
    handleAddClick();
  };
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={addItem}
      />
    </div>
  );
}

export default Profile;

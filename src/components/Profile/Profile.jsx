import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ handleCardClick, clothingItems }) {
  const addItem = () => {
    handleCardClick();
  };
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          addItem={addItem}
        />
    </div>
  );
}

export default Profile;

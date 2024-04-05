import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
        />
    </div>
  );
}

export default Profile;
